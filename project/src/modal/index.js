import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { Button,Icon,Popconfirm } from 'antd';
// import {connect} from 'react-redux'
import './index.less'
class Modal extends Component {
    render() {
        console.log(this,'modal')
        let {table}=this.props
        return (
            <Fragment>
       
            <div className="da">
            <div className='table-modal'>
            <div className="el-dialog__header">
          <span>修改店铺信息</span>

            <span className='el-dialog__headerbtn'  ref='close' onClick={()=>{
                console.log(this)
                this.props.cancel()
            }}>
            <Icon type="close"/>
            </span>

            </div>
                <Card>
                <div className="el-dialog el-dialog--small">
              
                    <div className="item"><span className="el-form-item__label">店铺名称 </span>
                        <input className="el-input__inner"></input>
                    </div>
                    <div className="item"><span className="el-form-item__label">详细地址 </span>
                        <input className="el-input__inner"></input>
                    </div>
                    <span className="el-form-item__label">当前城市:</span>
                    <div className="item"><span className="el-form-item__label">店铺介绍 </span>
                        <input className="el-input__inner"></input>
                    </div>
                    <div className="item"><span className="el-form-item__label">联系电话 </span>
                        <input className="el-input__inner"></input>
                    </div>
                    <span className="el-form-item__label">店铺分类</span><input autocomplete="off" readonly="readonly" type="text" rows="2" class="el-input__inner">
                    </input>
                   
                    <br/>
                    <span className="el-form-item__label">商铺图片</span> 
                    <br/>
                   </div>

                </Card>
                <div className='el-dialog__footer'>
                <div className='dialog-footer'>
                <Button className="w"type="primary">确定</Button>
                <Button className="q">取消</Button>
              </div>
              </div>
            </div>
            </div>
       
            </Fragment>
        )
    }
}
export default Modal