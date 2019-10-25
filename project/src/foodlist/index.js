import React,{Component} from 'react'
import {Card,Icon,Popconfirm,Pagination } from 'antd'
import '../style/index.less'
import Model from '../model'
// import ActionCreator from '../store/actionCreator'

class FoodList extends Component{
    constructor(){
        super()
        this.state={
            changeModel:false,
            title:['','食品名称','食品介绍','评分','操作'],
            data:[
                {show:false,name:"ascdss",desc:"sdvajd",score:4.7,resname:" ",foodid:3970,resid:7,address:' ',classify:' ',amount:731}
            ],
            updateData:null,
            nowPage:1,
            pageSize:10,
            count:''
        }
    }
    componentDidMount() {
        let page = this.state.nowPage
        let pagesize = this.state.pageSize
        this.refreshData(page,pagesize)
        this.cancelModel()
    }

    refreshData=(page,pageSize)=>{
        this.setState({changeModel:false})
        let url = `/api/food/getfoodbypage?page=${page}&pagesize=${pageSize}`
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
            this.setState({data:list,count:data.data.count})
        })
    }
    cancelModel=()=>{
        this.setState({changeModel:false})
    }
    del(id){
        let url = '/api/food/delfood'
        this.$axios.get(url,{
            params:{
                _id:id
            }
        })
        .then((data)=>{
            console.log(data)
            console.log(id)
            this.refreshData(this.state.nowPage)
        })
    }
    changeModel=(data)=>{
        // console.log(123)
        // this.state.changeModel = !this.state.changeModel
        this.setState({changeModel:true,updateData:data})
    }
    changeState=(index)=>{
        this.state.data[index].show = !this.state.data[index].show
        this.setState({show:this.state.data[index].show})
    }
    render(){
        let {updateData,data,count,pageSize} = this.state
        return(
            <div className='tabel-container'>
                {this.state.changeModel?<Model update={updateData} refresh={this.refreshData} cancel={this.cancelModel}></Model>:''}
                <div className='food-list'>
                    <table>
                        <thead>
                            <tr>
                                {
                                    this.state.title.map((item,index)=>{
                                        return(
                                            <th key={index}>
                                                <div className='cell'>
                                                    {item}
                                                </div>
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                    </table>
                    {
                        this.state.data.map((item,index)=>{
                            return(
                                <table key={index}>
                                    <tbody>
                                        <tr>
                                            <td onClick={this.changeState.bind(this, index)}>
                                                {this.state.data[index].show ? <Icon type="down"/> : <Icon type="right"/>}

                                            </td>
                                            <td>
                                                <div className='cell'>
                                                    {item.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='cell'>
                                                    {item.desc}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='cell'>
                                                    {item.score}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='cell'>
                                                    <button className='btn1 btn' onClick={this.changeModel.bind(this,data[index])}>编辑</button>
                                                    <Popconfirm
                                                        title='你确定要删除吗'
                                                        okText='OK'
                                                        cancelText='No'
                                                        onConfirm={()=>{
                                                            this.del(item.foodid)
                                                        }}
                                                    >
                                                        <button className='btn2 btn'>删除</button>
                                                    </Popconfirm>
                                                </div>
                                            </td>
                                        </tr>
                                        {this.state.data[index].show?<tr>
                                            <td className='td-item' colSpan='5'>
                                                <div className='el'>
                                                    <div className='el-item'>
                                                        <span className='title'>食品名称</span>
                                                        <span className='content'>{item.name}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>餐馆名称</span>
                                                        <span className='content'>{item.resname}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>食品ID</span>
                                                        <span className='content'>{item.foodid}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>餐馆ID</span>
                                                        <span className='content'>{item.resid}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>食品介绍</span>
                                                        <span className='content'>{item.desc}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>餐馆地址</span>
                                                        <span className='content'>{item.address}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>食品评分</span>
                                                        <span className='content'>{item.score}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>食品分类</span>
                                                        <span className='content'>{item.classify}</span>
                                                    </div>
                                                    <div className='el-item'>
                                                        <span className='title'>月销量</span>
                                                        <span className='content'>{item.amount}</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>:<tr></tr>}
                                    </tbody>
                                </table>
                            )
                        })
                    }
                </div>
                <div className='pagination'>
                    <span>共{count}条</span>
                    <Pagination defaultCurrent={1} total={count} pageSize={pageSize} onChange={(page,pageSize)=>{
                        this.refreshData(page,pageSize)
                        console.log(page,pageSize)
                    }} />
                </div>
            </div>
        )
    }
}

export default FoodList