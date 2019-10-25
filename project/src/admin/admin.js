import React,{Component} from 'react'
import './admin.less'
import Nav from '../nav/nav'
// import TableModal from '../modal'
// import Shi from './shi'
import Shishi from './shishi'
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
        </div>
      </div>
    )
  }
}
export default Admin