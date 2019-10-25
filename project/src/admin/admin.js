import React,{Component} from 'react'
import './admin.less'
import Nav from '../nav/nav'
import { Avatar } from 'antd'
class Admin extends Component{
  render(){
    console.log(this.props.children)
    return(
      <div className="admin">
        <div className="admin-nav">
          <Nav/>
        </div>
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
      
    )
  }
}
export default Admin