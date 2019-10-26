import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Admin from './admin/admin'
import Login from './login/login'
import Manage from "./component/manage"
import UserList from "./component/userList"
import ShopList from "./component/shopList"
import FoodList from "./component/foodList/index"
import OrderList from "./component/orderList"
import AddShop from "./component/addShop"
import AddGoods from "./component/addGoods"
import Visitor from "./component/visitor"
import VueEdit from "./component/vueEdit"
import AdminSet from "./component/adminSet/adminSet"
import Explain from "./component/explain"
import AdminList from './component/adminList/index'
console.log(FoodList)
let obj = [
      {component:Manage,
    address:"/admin/manage"
  }, {
    component:UserList,
    address:"/admin/userlist"
  }, {
    component:ShopList,
    address:"/admin/shoplist"
  }, {
    component:FoodList,
    address:"/admin/foodlist"
  }, {
    component:OrderList,
    address:"/admin/orderList"
  },{
    component:AdminList,
    address:"/admin/adminList"
  }, {
    component:AddShop,
    address:"/admin/addshop"
  }, {
    component:AddGoods,
    address:"/admin/addgoods"
  }, {
    component:Visitor,
    address:"/admin/visitor"
  }, {
    component:VueEdit,
    address:"/admin/vueEdit"
  }, {
    component:AdminSet,
    address:"/admin/adminSet"
  }, {
    component:Explain,
    address:"/admin/explain"
  },
]
class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                  {/*{this.renderList.bind(this,obj)}*/}
                  <Redirect exact from='/admin' to ='/admin/manage'></Redirect>
                  {

                  obj.map((item,index)=>(

                      <Route key={index} path={item.address} render={()=>(
                        
                        <item.component></item.component>
                       ) }></Route>
                      )
                    )     
                }
              </Admin>
            )
          }}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Router