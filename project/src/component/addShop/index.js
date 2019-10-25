import React,{Component} from 'react'
import { Form, Input, Button, TimePicker, Select, Cascader, InputNumber,checkOut,message,Card } from 'antd';
import "./addShop.less"
class AddShop extends Component{
    constructor(){
      super()
      this.state = {
          shopname:"",
          address:"",
          phone:"",
          shopdesc:"",
          discount:""
      }
    }
    submit=()=>{

      if(this.refs.in.value === ""){
          alert("输入有误")
      }
      // for(let i = 0;i < inputAll.length;i++){
      //   if(inputAll[i].value === ""){
      //     alert(inputAll[i])
      //   }
      // }
        console.log(this)
       
        let {shopname,
        address,
        phone,
        shopdesc,
        discount
        }=this.state
     
      this.$axios.get("/api/shop/addshoplist",{
        params: {
          shopname,
          address,
          phone,
          shopdesc,
          discount
        }
      })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    
  // submit=()=>{
  //   // let result = this.props.form.getFieldsValue();
  //   // console.log(result);
  //   this.props.form.validateFields((err,data)=>{
  //         if(err){
  //             message.error("输入有误，请重新输入")
  //         }else{
  //             // this.$axios.get('/api/admin/addShop',{})
  //             // .then((data)=>{
  //             //     console.log(data)

  //             // })
  //             // .catch((err)=>{
  //             //     console.log(err)
  //             // })
  //             message.success("输入成功,等待跳转",1,()=>{
  //                 // this.props.history.push("./admin/home")
  //             });
  //         }
  //   })

}
 
  render(){
    let {getFieldDecorator} = this.props.form
    // console.log(this.state.shopname)
    return(
      <div>
        <div className="addShop-form">
          
             <span>店铺名称</span><input type="text" ref="in" value={this.state.shopname} onChange={(e)=>{
                                      this.setState({shopname:e.target.value})
              }}/><br/>
              <span>详细地址</span> <input type="text" ref="in" value={this.state.address} onChange={(e)=>{
                                      this.setState({address:e.target.value})
              }}/><br/>
              <span>联系电话</span> <input type="text"  ref="in" value={this.state.phone} onChange={(e)=>{
                                       this.setState({phone:e.target.value})
              }}/><br/>
              <span>店铺描述</span> <input type="text"  ref="in" value={this.state.shopdesc} onChange={(e)=>{
                                        this.setState({shopdesc:e.target.value})
              } }/><br/>
         
           <select value={this.state.discount} onChange={(e)=>{
             this.setState({discount:e.target.value})
           }}>
              <option value="满减优惠">满减优惠</option>
              <option value="优惠大酬宾">优惠大酬宾</option>
              <option value="新用户立减">新用户立减</option>
          </select><br/>
          <Button type="primary" onClick={this.submit}>立即创建</Button>
        {/*<Form.Item
        label="店铺名称"
        >
        {getFieldDecorator("error",{
          rules: [{ required: true, message: '请输入你的用户名!' },
          { min: 1, message: '输入长度6-9位!' },
        ],
      })(
       
         <Input id="error"  value={this.state.shopname} onchange={(e)=>{
                this.setState({shopname:e.target.value})
         }}/>
            )}
          </Form.Item>
          <Form.Item label="详细地址">
          {getFieldDecorator("warning",{
            rules: [{ required: true, message: '请输入你的用户名!' },
                    { min: 1, message: '输入长度6-9位!' },
          ],
          })(
            <Input id="warning" />
          )}
          </Form.Item>

          <Form.Item
          label="联系电话"
          >
          {getFieldDecorator("validating",{
            rules: [{ required: true, message: '请输入联系号码!' },
                    { min: 1, message: '输入长度6-9位!' },
          ],
          })(
            <Input id="validating" />
          )}
          </Form.Item>

          <Form.Item
            label="店铺描述"
          >
         
            <Input id="success" />
          </Form.Item>
    
          <Form.Item
            label="店铺活动"
          >
            <select>
                <option>满减优惠</option>
                <option>优惠大酬宾</option>
                <option>新用户立减</option>
            </select>
          </Form.Item>
            
          <Button type="primary" onClick={this.submit}>立即创建</Button>
          */}
          
          </div>
      </div>
    )
  }
}
export default Form.create()(AddShop)