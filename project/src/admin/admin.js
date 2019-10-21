import React,{Component} from 'react'
import './admin.less'
import Nav from '../nav/nav'
class Admin extends Component{
  render(){
    return(
      <div className="admin">
        <div className="admin-nav">
          <Nav/>
        </div>
        <div className='admin-right'>
          <div className="header">??</div>
          <div className="middle">
            ??
            {this.props.children}
          </div>
          <div className="footer">??</div>
        </div>
      </div>
    )
  }
}
export default Admin