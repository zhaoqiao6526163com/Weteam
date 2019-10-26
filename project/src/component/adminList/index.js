import React,{Component} from 'react'
import {Table,Pagination,Card} from 'antd'

class AdminList extends Component{
  constructor(){
    super()
    this.state={
      dataSource:[],
      count:0,
      nowdata:1,
      columns:[
        {
          title: '用户姓名',
          dataIndex: 'us',
          key: 'us',
        },
        {
          title: '注册日期',
          dataIndex: 'data',
          key: 'data',
        },
      
      
      {
        title: '注册地址',
        dataIndex: 'address',
        key: 'address',
      },
      ,{
        title: '权限',
        dataIndex: 'power',
        key: 'power',
      },
    
    ],
    
  }
}
componentDidMount(){
let page=this.state.nowdata
this.refreshdata(page)
}
refreshdata(page,pageSize){
  let url=`/api/home/getuserbypage?page=${page}&pagesize=${pageSize}`
  this.$axios.get(url)
  .then((data)=>{
    console.log(data)
    this.state.count=data.data.count
    this.setState({state:this.state.count})
    data.data.list.map((item,index)=>{
      let key=index
      let order=index+1
     let { us,data, address}=item
     let num=this.state
     num.dataSource.push({key,power:'管理员',us,data, address,})
     this.setState({state:num})
    })
  })
  
}

  render(){
    return(
      <div>
       <Card style={{height:'900px'}}>
        <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false}
           style={{marginBottom:'20px',border:'1px solid #ccc'}}
        />
        <Pagination defaultCurrent={1} 
        total={this.state.count} pageSize={10} onChange={(page,pageSize)=>{
          // console.log(page,pageSize)
          this.setState({dataSource:[]})
            this.refreshdata(page,pageSize)
        }}/>
        </Card>
      </div>
    )
  }
}
export default AdminList