import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Admin from './admin/admin'
import Login from './login/login.js'
import Manage from "./component/manage"
import UserList from "./component/userList"
import ShopList from "./component/userList"
import FoodList from "./foodlist"
import OrderList from "./component/orderList"
import AddShop from "./component/addShop"
import AddGoods from "./component/addGoods"
import Visitor from "./component/visitor"
import VueEdit from "./component/vueEdit"
import AdminSet from "./component/adminSet"
import Explain from "./component/explain"
class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
        <Redirect exact from='/admin' to ='/admin/home'></Redirect>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                 <Route path='/admin/manage' component={Manage}></Route>
                 <Route path='/admin/userList' component={UserList}></Route>
                 <Route path='/admin/shopList' component={ShopList}></Route>
                 <Route path='/admin/foodList' component={FoodList}></Route>
                 <Route path='/admin/orderList' component={OrderList}></Route>
                 <Route path='/admin/addShop' component={AddShop}></Route>
                 <Route path='/admin/addGoods' component={AddGoods}></Route>
                 <Route path='/admin/visitor' component={Visitor}></Route>
                 <Route path='/admin/vueEdit' component={VueEdit}></Route>
                 <Route path='/admin/adminSet' component={AdminSet}></Route>
                 <Route path='/admin/explain' component={Explain}></Route>
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