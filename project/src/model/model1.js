import React,{Component} from 'react'
import {Icon} from 'antd'
import './index.less'
import FoodImg from './upload'

class Model1 extends Component{
    constructor(){
        super()
        this.state={
            norms:'',
            subvalue:0,
            supvalue:20,
        }
    }
    subNum=()=>{
        if(this.state.subvalue <= 0) return false
       let value = this.refs.val.placeholder - 0
        this.state.subvalue = value-1
        // console.log(this.state.subvalue)
        this.setState({subvalue:this.state.subvalue})
    }
    supNum=()=>{
        let value = this.refs.val.placeholder - 0
        this.state.subvalue = value + 1
        this.setState({subvalue:this.state.subvalue})
    }
    subPrice=()=>{
        if(this.state.supvalue <= 0) return false
        let value = this.refs.val1.placeholder - 0
        this.state.supvalue = value-1
        // console.log(this.state.subvalue)
        this.setState({supvalue:this.state.supvalue})
    }
    supPrice=()=>{
        let value = this.refs.val1.placeholder - 0
        this.state.supvalue = value + 1
        this.setState({supvalue:this.state.supvalue})
    }
    addData=()=>{
        console.log(this.state.norms)
        console.log(this.state.subvalue)
        console.log(this.state.supvalue)
        let obj = {
            norms:this.state.norms,
            subvalue:this.state.subvalue,
            supvalue:this.state.supvalue
        }
        this.props.addUpdate(obj)
    }

    render(){
        // console.log(this,'规格模态框')
        let {norms} = this.state
        return (
            <div>
                <div className='model-box model-box1'>
                    <div className='model content'>
                        <div className='model-header'>
                            <span>添加规格</span>
                            <span className='close'  ref='close' onClick={()=>{
                                this.props.cacel1()
                            }}>
                                <Icon type="close"/>
                            </span>
                        </div>
                        <div className='model-container'>
                            <form className='el-form'>
                                <div className='el-form-item'>
                                    <label>
                                        <span>*</span>
                                        规格
                                    </label>
                                    <div className='inp'>
                                        <input type='text' value={norms} onChange={(e)=>{
                                            this.setState({norms:e.target.value})
                                        }}/>
                                    </div>
                                </div>
                                <div className='el-form-item'>
                                    <label>包装费</label>
                                    <div className='inp select'>
                                        <input type='text' placeholder={this.state.subvalue} ref='val'/>
                                        <span className='sub'  onClick={this.subNum}>-</span>
                                        <span className='sup' onClick={this.supNum}>+</span>
                                    </div>
                                </div>
                                <div className='el-form-item'>
                                    <label>价格</label>
                                    <div className='inp select' onClick={this.changeState}>
                                        <input type='text' placeholder={this.state.supvalue} ref='val1'/>
                                        <span className='sub' onClick={this.subPrice}>-</span>
                                        <span className='sup' onClick={this.supPrice}>+</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='model-footer'>
                            <button className='addBtn btn_xiao' onClick={()=>{
                                this.props.cacel1()
                            }}>取消</button>
                            <button className='addBtn' onClick={this.addData}>确定</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Model1
