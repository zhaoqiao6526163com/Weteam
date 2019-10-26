import React,{Component} from 'react'
import './admin.less'
import Nav from '../nav/nav'
import { Avatar } from 'antd'
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'
class Admin extends Component{
    componentDidMount() {
        let wrapper = this.refs.wrapper
        const scroll = new BScroll(wrapper, {
            scrollY: true,  //开启横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
        })
    }
    render(){
            return(
              <div className="admin">
                <div className="admin-nav">
                  <Nav/>
                </div>
                <div className='wrapper' ref='wrapper'>
                    <div className='admin-right'>
                        <div className="header">
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={50} style={{float:'right',marginRight:'20px'}}/>
                            </div>
                        </div>
                        <div className="middle">
                            {this.props.children}
                        </div>
                    </div>
                </div>
              </div>
            )
          }
        }
export default withRouter(Admin)