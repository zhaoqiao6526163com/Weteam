import React,{Component} from 'react'
import {Card, Table, spin, Pagination,Icon} from 'antd';
import './orderlist.less'
const columns = [
  { title: '订单ID', dataIndex: 'name', key: 'name' },
  { title: '总价格', dataIndex: 'desc', key: 'desc' },
  { title: '订单状态', dataIndex: 'score', key: 'score' },
];
const shop=['用户','店铺地址','名称']
class OrderList extends Component{
  constructor(){
    super()
    this.state={
      spinning:true,
      nowPage:1,
      pagesize:10,
      list:[],
      updateData:null,
      count:''
    }
  }
  componentDidMount() {
    let page = this.state.nowPage
      let pagesize = this.state.pagesize
    this.refreshData(page,pagesize)
  }

  refreshData=(page,pagesize)=>{
    this.setState({spinning:true})
     let url = `/api/food/getfoodbypage?page=${page}&pagesize=${pagesize}`
    this.$axios.get(url)
        .then((data)=>{
          console.log(data)
          let list = data.data.list.map((item,index)=>{
            let obj = {
                key:index,
              show:false,
              name:item.foodname,
              desc:item.fooddesc,
              score:'超时未支付',
              imgPath:item.foodimgpath,
              classify:item.foodType,
              pack:item.foodpack,
              price:item.foodprice,
              rule:item.foodrule,
              resname:" ",
              foodid:item._id,
              resid:7,
              address:' ',
              amount:''
            }
            return obj
          })
          this.setState({spinning:false,list,count:data.data.count})
        })
        .catch(()=>{
          this.setState({spinning:false})
        })
  }
  render(){
    let {spinning,list,pagesize,count} = this.state
    return(
        <Card>
          <spin spinning={spinning}>
            <Table
                columns={columns}
                expandedRowRender={(index) => {
                  return(
                      <div className='el'>
                          <div className='el-item'>
                              <span className='title'>用户名</span>
                              {/*{console.log(index)}*/}
                              <span className='content'>{list[index.key].name}</span>
                          </div>
                          <div className='el-item'>
                              <span className='title'>店铺名称</span>
                              <span className='content'>{list[index.key].resname}</span>
                          </div>
                          <div className='el-item'>
                              <span className='title'>收货地址</span>
                              <span className='content'>{list[index.key].foodid}</span>
                          </div>
                          <div className='el-item'>
                              <span className='title'>店铺ID</span>
                              <span className='content'>{list[index.key].resid}</span>
                          </div>
                          <div className='el-item'>
                              <span className='title'>店铺地址</span>
                              <span className='content'>{list[index.key].desc}</span>
                          </div>
                      </div>
                  )
                }}
                dataSource={list}
                pagination={false}
                // expandIcon={()=>{
                //     return(
                //         <div>
                //             <Icon type="down"/>
                //         </div>
                //     )
                // }}
            />
            <Pagination defaultCurrent={1} total={this.state.count-0} pageSize={pagesize} onChange={(page,pagesize)=>{
              this.refreshData(page,pagesize)
            }} />
          </spin>
        </Card>
    )
  }
}

export default OrderList