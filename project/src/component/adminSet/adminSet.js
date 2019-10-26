import './adminSet.less'
import React,{Component} from 'react'
import {Card} from 'antd'
class AdminSet extends Component{
  constructor(){
    super()
    this.state={
      list:['姓名','注册时间','管理员权限','管理员ID'],
      msg:['孙世博','2019-10-21 14:14','管理员','2387364027301',],
      value:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  }
  render(){
    return(
      <div className='adminset-box' style={{padding:'20px'}}>
         <p style={{fontSize:'20px',textAlign: 'center'}}>管理员设置</p>
         <div className="adminSet">姓名：<input ></input></div>
        <Card >
          {this.state.list.map((item,index)=>{
             return(<div><span>{item}:</span><span>{this.state.msg[index]}</span></div>)
          })}
          <div><span>更换头像:</span>
            <div>
              <input type='file' ref='file' id='inp'/>
              <img src={this.state.value}/>
              <button onClick={this.change}>上传</button>
            </div>
          </div>
          
        </Card>
      </div>
    )
  }
  change=()=>{
    let file=this.refs.file.files[0]
  //   console.log(file)
    let formdata=new FormData()
    formdata.append('hehe',file)

  //   console.log(formdata.get('hehe'))
    // this.$axios.post('/api/file/img',{
    //   data:formdata,
    //   cache:false,
    //   contentType:false,
    //   processDate:false,
      
      
    // }).then((data)=>{
    //   console.log(data)
    // })
    // this.setState({value:this.refs.file.value})
  }
}
export default AdminSet