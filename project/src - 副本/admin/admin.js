import React,{Component} from 'react'
import './admin.less'
import Nav from '../nav/nav'
<<<<<<< HEAD
// import TableModal from '../modal'
// import Shi from './shi'
import Shishi from './shishi'
=======
>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d
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
<<<<<<< HEAD
        

       
      
        <tr className="el-table__row">
        
        <td  className="el-table_1">
        <div className="cel"></div>
=======
          <tr>
          <th colspan="1" rowspan="1" class="el-table1">
           <div class="cell1"></div>
          </th>
          <th colspan="1" rowspan="1" class="el-table2">
          <div class="cell">店铺名称</div>
         </th>
         <th colspan="1" rowspan="1" class="el-table3">
          <div class="cell">店铺地址</div>
         </th>
         <th colspan="1" rowspan="1" class="el-table4">
          <div class="cell">店铺介绍</div>
         </th>
         <th colspan="1" rowspan="1" class="el-table5">
         <div class="cell">操作</div>
        </th>
        </tr>


        <tr className="el-table__row">
        <td colspan="1" rowspan="1" class="el-table_1">
        <div class="cel">></div>
>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d
        </td>
       

       
<<<<<<< HEAD
        <td  className="el-table_1">
        <div className="cel"></div>
=======
        <td colspan="1" rowspan="1" class="el-table_1">
        <div class="cel">北京市顺义区</div>
>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d
        </td>
     

      
<<<<<<< HEAD
        <td  className="el-table_1">
        <div className="cel"></div>
=======
        <td colspan="1" rowspan="1" class="el-table_1">
        <div class="cel">北京烤鸭2345</div>
>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d
        </td>
     

    
<<<<<<< HEAD
        <td  className="el-table_1">
        <div className="cel"></div>
=======
        <td colspan="1" rowspan="1" class="el-table_1">
        <div class="cel">2345</div>
>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d
        </td>
     

      
<<<<<<< HEAD
        <td  className="el-table_1">
        <div className="cel">
       
        </div>
        </td>
        </tr>
      
<Shishi/>
=======
        <td colspan="1" rowspan="1" class="el-table_1">
        <div class="cel">
        <button className="el-button el-button--Success el-button--mini">
        <span>编辑</span>
        </button>
        <button className="el-button el-button--Success el-button--mini">
        <span>添加商品</span>
        </button>
        <button className="el-button el-button--Success el-button--mini1">
        <span> 删除</span>
        </button>
        </div>
        </td>
        </tr>

>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d
            {this.props.children}
          </div>
          <div className="footer"></div>
        </div>
      </div>
    )
  }
}
export default Admin