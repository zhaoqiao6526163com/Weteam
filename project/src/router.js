import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Admin from './admin/admin'
<<<<<<< HEAD
import Login from './login/login'
import Manage from "./component/manage"
import UserList from "./component/userList"
import ShopList from "./component/shopList"
import FoodList from "./component/foodList"

import OrderList from "./component/orderList"
import AddShop from "./component/addShop"
import AddGoods from "./component/addGoods"
import Visitor from "./component/visitor"
import VueEdit from "./component/vueEdit"
import AdminSet from "./component/adminSet"
import Explain from "./component/explain"
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
=======
import Login from './login/login.js'
>>>>>>> 4cd706843f3c8ad7f2a62e263052eaff4f32a40e
class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
<<<<<<< HEAD
                  {/*{this.renderList.bind(this,obj)}*/}
                  {
                  obj.map((item,index)=>(
                      
                      <Route key={index} path={item.address} render={()=>(
                        
                        <item.component></item.component>
                       ) }></Route>
                      )
                    )     
                }


                 {/*<Route path='/admin/manage' component={Manage}></Route>
                  <Route path='/admin/userList' component={UserList}></Route>
                 <Route path='/admin/shopList' component={ShopList}></Route>
                 <Route path='/admin/foodList' component={FoodList}></Route>
                 <Route path='/admin/orderList' component={OrderList}></Route>
                 <Route path='/admin/addShop' component={AddShop}></Route>
                 <Route path='/admin/addGoods' component={AddGoods}></Route>
                 <Route path='/admin/visitor' component={Visitor}></Route>
                 <Route path='/admin/vueEdit' component={VueEdit}></Route>
                 <Route path='/admin/adminSet' component={AdminSet}></Route>
                 <Route path='/admin/explain' component={Explain}></Route>*/}
=======
                <Redirect exact from='/admin' to ='/admin/home'></Redirect>
               
                
>>>>>>> a16c2ae43837b7df1b47919d0f9788c1dee4ca64
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