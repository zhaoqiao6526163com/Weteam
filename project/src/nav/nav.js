import React,{Component} from 'react'
import {withRouter} from "react-router-dom"
import { Menu } from 'antd';
import "./index.less"
const { SubMenu } = Menu;

let newData = [
  {name:"首页",path:"/admin/manage"},
  {name:"数据管理",
    children:[
      {name:"用户列表",path:"/admin/userList"},
      {name:"商家列表",path:"/admin/shopList"},
      {name:"食品列表",path:"/admin/foodList"},
      {name:"订单列表",path:"/admin/orderList"},
      {name:"管理员列表",path:"/admin/adminList"}
    ]  
  },
  {name:"添加数据",
    children:[
      {name:"添加商铺",path:"/admin/addShop"},
      {name:"添加商品",path:"/admin/addGoods"}
    ]
  },
  {name:"图表",
    children:[
      {name:"用户分布",path:"/admin/visitor"}
    ]
  },
  {name:"编辑",
   children:[
    {name:"文本编辑",path:"/admin/vueEdit"}
  ]
},
  {name:"设置",
  children:[
    {name:"管理员设置",path:"/admin/adminSet"}
  ]
},
  {name:"说明",
  children:[
    {name:"说明",path:"/admin/explain"}
  ]
 }
]
class Nav extends Component{
      constructor(){
        super()
        this.state={
          openKeys: ['sub1'],
        }
      }

      rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
      onOpenChange = openKeys => {
        let latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
      };

      jump(path){
        this.props.history.push(path);
      }

      renderList=(data)=>{
          return data.map((item,index)=>{
                if( item.children ){
                    return <SubMenu title={item.name}>
                              {this.renderList(item.children)}
                          </SubMenu>
                }else{
                    return <Menu.Item onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                }
          })
      }
  render(){
      return(
        <div className="nav-list">
        <Menu
          mode="inline"
          style={{ width: 256 }}
        >
          {this.renderList(newData)}
      {/*  <Menu.Item>首页</Menu.Item>
          <SubMenu
            title={ 123 }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            
      </SubMenu> */}
        </Menu>
        </div>
      );
      
  }
}

export default withRouter(Nav)