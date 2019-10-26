import React,{Component} from 'react'
import {Icon,Popconfirm} from 'antd'
import {connect} from 'react-redux'
import './index.less'
import FoodImg from './upload'
import Model1 from './model1'

class Model extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.update.name||'',
            desc:this.props.update.desc||'',
            classify:this.props.update.classify||'',
            imgPath:this.props.update.imgPath||'',
            rule:this.props.update.rule||'',
            pack:this.props.update.pack||'',
            price:this.props.update.price||'',
            score:this.props.update.score,
            _id:this.props.update.foodid,
            addGui:false,
            show:false,
            list:[],
            nowpage:this.props.nowpage
        }
    }
    addGui=()=>{
        // this.state.addGui = !this.state.addGui
        this.setState({addGui:true})
    }
    del=(index)=>{
        let list = this.state.list
        list.splice(index,1)
        this.setState({list})
    }
    changeState=()=>{
        this.state.show = !this.state.show
        this.setState({show:this.state.show})
    }
    // changeImg=()=>{
    //     let file=this.refs.file.files[0]
    //     let formdata=new FormData()
    //     formdata.append('hehe',file)
    //     let url = '/api/file/img'
    //     this.$axios.post(url,{hehe:formdata})
    //     // console.log(formdata.get('img').name)
    //     let config = {
    //         headers:{'Content-Type':'multipart/form-data'}
    //     }
    //         .then((data)=>{
    //             console.log(data)
    //         })
    // }
    update=()=>{
        // if(this.state.imgPath === ''){
        //     return false
        // }else
        // {
            // 发起请求
            let url = '/api/food/updatefood'
            this.$axios.get(url,{
                params: {
                    _id:this.state._id,
                    foodname :this.state.name,
                    foodprice:this.state.price,
                    // foodimgpath:this.state.imgPath,
                    foodType:this.state.classify,
                    fooddesc:this.state.desc,
                    foodgrade:this.state.score,
                    foodpack:this.state.pack,
                    foodrule:this.state.rule
                }
            })
            .then((data)=>{
                console.log(data)
                console.log(this.state.imgPath)
                this.props.refresh(this.state.nowpage,10)
            })
        // }
        // console.log(this.state.name,this.state.desc,this.state.classify)
        // this.props.refresh()
    }
    cacelModel1=()=>{
        this.setState({addGui:false})
    }
    changePath=(path)=>{
        this.setState({imgPath:path})
        // console.log(this.state.imgPath)
    }
    componentDidMount() {
        this.cacelModel1()
        // this.props.imgUrl = this.state.imgPath
        // this.addUpdate()
        // console.log(this)
        // let bs = new BScroll(this.refs.wrapper,{pullUpLoad: true,click:true})
    }
    addUpdate=(data)=>{
        let list = this.state.list
        list.push(data)
        this.setState({addGui:false,list:list})
        console.log(this.state.list)
    }
    // componentDidUpdate() {
    //     console.log(this.state.list)
    // }

    render(){
        let {name,desc,classify,price, imgPath} = this.state
        // console.log(this,'信息修改组件')
        return (
            <div>
                {this.state.addGui?<Model1 cacel1={this.cacelModel1} addUpdate={this.addUpdate}></Model1>:''}
                <div className='model-box' ref='wrapper'>
                    <div className='model content'>
                        <div className='model-header'>
                            <span>修改食品信息</span>
                            <span className='close'  ref='close' onClick={()=>{
                                this.props.cancel()
                            }}>
                                <Icon type="close"/>
                            </span>
                        </div>
                        <div className='model-container'>
                            <form className='el-form'>
                                <div className='el-form-item'>
                                    <label>食品名称</label>
                                    <div className='inp'>
                                        <input type='text' value={name} onChange={(e)=>{
                                            this.setState({name:e.target.value})
                                        }}/>
                                    </div>
                                </div>
                                <div className='el-form-item'>
                                    <label>食品介绍</label>
                                    <div className='inp'>
                                        <input type='text' value={desc} onChange={(e)=>{
                                            this.setState({desc:e.target.value})
                                        }}/>
                                    </div>
                                </div>
                                <div className='el-form-item'>
                                    <label>食品分类</label>
                                    <div className='inp select' onClick={this.changeState}>
                                        <input type='text' value={classify} onChange={(e)=>{
                                            this.setState({classify:e.target.value})
                                        }}/>
                                        {/*{this.state.show ? <Icon type="caret-up"/>:<Icon type="caret-down"/>}*/}
                                    </div>
                                </div>
                                <div className='el-form-item'>
                                    <label>食品图片</label>
                                    <div className='inp'>
                                        {/*<input type="file" ref='file' onChange={this.changeImg}/>*/}
                                        <FoodImg imgPath={imgPath} changePath={this.changePath}></FoodImg>
                                    </div>
                                </div>
                            </form>
                            <div className='el-table'>
                                <div className='header-table'>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>
                                                <div className='cell'>
                                                    规格
                                                </div>
                                            </th>
                                            <th>
                                                <div className='cell'>
                                                    包装费
                                                </div>
                                            </th>
                                            <th>
                                                <div className='cell'>
                                                    价格
                                                </div>
                                            </th>
                                            <th>
                                                <div className='cell'>
                                                    操作
                                                </div>
                                            </th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className='tabel-container1'>
                                    {this.state.list.length?<table>
                                        <tbody>
                                        {
                                            this.state.list.map((item,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>
                                                            <div className='cell'>
                                                                {item.norms}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='cell'>
                                                                {item.subvalue}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='cell'>
                                                                {item.supvalue}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='cell'>
                                                                <Popconfirm
                                                                    title='你确定要删除吗'
                                                                    okText='OK'
                                                                    cancelText='No'
                                                                    onConfirm={()=>{
                                                                        this.del(index)
                                                                    }}
                                                                >
                                                                    <button className='btn'>删除</button>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>:<div className='empty'>
                                        <span>暂无数据</span>
                                    </div>}

                                </div>
                            </div>
                            <button className='addBtn' onClick={this.addGui}>添加规格</button>
                        </div>
                        <div className='model-footer'>
                            <button className='addBtn btn_xiao' onClick={()=>{
                                this.props.cancel()
                            }}>取消</button>
                            <button className='addBtn' onClick={this.update}>确定</button>
                        </div>
                        {/*{this.state.show?<div className='el-select-dropdown'>*/}
                        {/*    <p>无数据</p>*/}
                        {/*</div>:''}*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default  connect(state=>state)(Model)
