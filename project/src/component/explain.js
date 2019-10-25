import React,{Component} from 'react'

class Explain extends Component{
  constructor(){
    super()
    this.state={
      
    }
  }
  render(){
    return(
      <div>
         <div style={{width:"500px",height:"500px",marginLeft:"300px",fontSize:"14px",font:"500 15px Microsoft YaHei"}}>
              <p>node-elm后台管理系统</p>

              <p> 第一次登录的用户自动注册成为普通管理员</p>
         
              <p> 普通管理员可以添加，修改信息</p>
         
               <p>超级管理员可以删除信息</p>
         </div>
      </div>
    )
  }
}
export default Explain