import React,{Component} from 'react'
import {Card, Table, spin, Pagination} from 'antd';
import '../style/orderlist.less'
const columns = [
  { title: '订单ID', dataIndex: 'name', key: 'name' },
  { title: '总价格', dataIndex: 'desc', key: 'desc' },
  { title: '订单状态', dataIndex: 'score', key: 'score' },
];

class OrderList extends Component{
  constructor(){
    super()
    this.state={
      spinning:true,
      nowPage:1,
      list:[],
      updateData:null,
    }
  }
  componentDidMount() {
    let page = this.state.nowPage
    this.refreshData(page)
  }

  refreshData=(page,pagesize)=>{
    this.setState({spinning:true})
     let url = `/api/food/getfoodlist?page=${page}&pagesize=${pagesize}`
    this.$axios.get(url)
        .then((data)=>{
          console.log(data)
          let list = data.data.list.map((item,index)=>{
            let obj = {
              show:false,
              name:item.foodname,
              desc:item.fooddesc,
              score:item.foodgrade,
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
          this.setState({spinning:false,list})
        })
        .catch(()=>{
          this.setState({spinning:false})
        })
  }
  render(){
    let {spinning,list} = this.state
    return(
        <Card>
          <spin spinning={spinning}>
            <Table
                columns={columns}
                expandedRowRender={() => {
                  return(
                      <h1>hello world</h1>
                  )
                }}
                dataSource={list}
                pagination={false}
            />
            <Pagination defaultCurrent={1} total={list.length} pageSize={5} onChange={(page,pagesize)=>{
              this.refreshData(page)
              console.log(page,pagesize)
            }} />
          </spin>
        </Card>
    )
  }
}

export default OrderList