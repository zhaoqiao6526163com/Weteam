import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Admin from './admin/admin'
import Login from './login/login.js'
class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                <Redirect exact from='/admin' to ='/admin/home'></Redirect>
                
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