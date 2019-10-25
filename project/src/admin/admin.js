import React,{Component} from 'react'
import './admin.less'
import Nav from '../nav/nav'
<<<<<<< HEAD
import { Avatar } from 'antd'
import BScroll from 'better-scroll'
class Admin extends Component{
    componentDidMount() {
        let wrapper = this.refs.wrapper
        const scroll = new BScroll(wrapper, {
            scrollY: true,  //开启横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
        })
    }

    render(){
    console.log(this.props.children)
=======
// import TableModal from '../modal'
// import Shi from './shi'
import Shishi from './shishi'
class Admin extends Component{
  render(){
>>>>>>> a16c2ae43837b7df1b47919d0f9788c1dee4ca64
    return(
      <div className="admin">
        <div className="admin-nav">
          <Nav/>
        </div>
<<<<<<< HEAD
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
=======
        <div className='admin-right'>
          <div className="header">??</div>
          <div className="middle">
        

       
      
        <tr className="el-table__row">
        
        <td  className="el-table_1">
        <div className="cel"></div>
        </td>
       

       
        <td  className="el-table_1">
        <div className="cel"></div>
        </td>
     

      
        <td  className="el-table_1">
        <div className="cel"></div>
        </td>
     

    
        <td  className="el-table_1">
        <div className="cel"></div>
        </td>
     

      
        <td  className="el-table_1">
        <div className="cel">
       
        </div>
        </td>
        </tr>
      
<Shishi/>
            {this.props.children}
          </div>
          <div className="footer"></div>
>>>>>>> a16c2ae43837b7df1b47919d0f9788c1dee4ca64
        </div>
      </div>
    )
  }
}
export default Admin