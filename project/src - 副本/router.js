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
<<<<<<< HEAD
               
=======
>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d
                
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