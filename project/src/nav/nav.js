import React,{Component} from 'react'
<<<<<<< HEAD
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import { Menu,Icon } from 'antd';
import "./index.less"
import { bindActionCreators } from 'redux'
import actionCreator from '../store/actionCreator'
import BScroll from "better-scroll";
const { SubMenu } = Menu

let newData = [
  {name:"首页",path:"/admin/manage",type:'appstore'},
  {name:"数据管理",
      type:'file',
    children:[
      {name:"用户列表",path:"/admin/userList"},
      {name:"商家列表",path:"/admin/shopList"},
      {name:"食品列表",path:"/admin/foodList"},
      {name:"订单列表",path:"/admin/orderList"},
      {name:"管理员列表",path:"/admin/adminList"}
    ]  
  },
  {name:"添加数据",
      type:'plus',
    children:[
      {name:"添加商铺",path:"/admin/addShop"},
      {name:"添加商品",path:"/admin/addGoods"}
    ]
  },
  {name:"图表",
      type:'star',
    children:[
      {name:"用户分布",path:"/admin/visitor"}
    ]
  },
  {name:"编辑",
      type:'edit',
   children:[
    {name:"文本编辑",path:"/admin/vueEdit"}
  ]
},
  {name:"设置",
      type:'setting',
  children:[
    {name:"管理员设置",path:"/admin/adminSet"}
  ]
},
  {name:"说明",
      type:'exclamation-circle',
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
      componentDidMount() {
          let wrapper = this.refs.wrapper
          const scroll = new BScroll(wrapper, {
              scrollY: true,  //开启横向滚动
              click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
          })
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

      jump=(path)=> {
          this.props.history.push(path)
          console.log(this)
          console.log(this.refs.qs)
      }

      renderList=(data)=>{
          return data.map((item,index)=>{
                if( item.children ){
                    return <SubMenu title={
                        <span>
                            <Icon type={item.type} />
                            <span>{item.name}</span>
                        </span>
                    }>
                                {this.renderList(item.children)}
                          </SubMenu>
                }else{
                    return <Menu.Item  onClick={this.jump.bind(this,item.path)}>
                        <div className='cell'>
                            <Icon type={item.type} />
                            {item.name}
                        </div>
                    </Menu.Item>
                }
          })
      }
  render(){
      return(
        <div className="nav-list" ref='wrapper'>
            <Menu
              mode="inline"
              style={{ width: 200 }}
            >
              {this.renderList(newData)}
            </Menu>
        </div>
      );
=======
class Nav extends Component{
  constructor(){
    super()
    this.state={
>>>>>>> a16c2ae43837b7df1b47919d0f9788c1dee4ca64
      
    }
  }
  render(){
    return(
      <div>
        我是导航
      </div>
    )
  }
}
export default Nav