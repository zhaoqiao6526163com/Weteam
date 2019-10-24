import React,{Component} from 'react'
import {Table,Pagination,Card} from 'antd'
import './userList.less'
class UserList extends Component{
  constructor(){
    super()
    this.state={
      dataSource:[],
      count:0,
      nowdata:1,
      columns:[{
        title: '序号',
        dataIndex: 'order',
        key: 'order',
      },
      {
        title: '注册日期',
        dataIndex: 'data',
        key: 'data',
      },
      {
        title: '用户姓名',
        dataIndex: 'us',
        key: 'us',
      },
      {
        title: '注册地址',
        dataIndex: 'address',
        key: 'address',
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
     num.dataSource.push({key,order,us,data, address})
     this.setState({state:num})
    })
    this.state.dataSource.push()
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
         style={{position:'fixed',bottom:'30px',}}

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
export default UserList