import React,{Component} from "react"
import { Form, Icon, Input, Button, Checkbox,Card,message } from 'antd';

class Login extends Component {
  constructor(){
      super()
      this.state = {
          us:"",
          ps:""
      }
  }
  submit=()=>{
    // let result = this.props.form.getFieldsValue();
    // console.log(result);
    let {us,ps} = this.state
    this.props.form.validateFields((err,data)=>{
          if(err){
              message.error("输入有误，请重新输入")
          }else{
              this.$axios.get('/api/home/login',{
                  params:{
                      us,
                      ps
                  }
              })
              .then((data)=>{
                  console.log(data)

              })
              .catch((err)=>{
                  console.log(err)
              })
              message.success("输入成功,等待跳转",1,()=>{
                  this.props.history.push("./admin/home")
              });
          }
    })

  }

  render() {
    
    console.log(this)
    let { getFieldDecorator } = this.props.form
    return (
    <div  className="login-form">
      <Card style={{width:"400px",position:"fixed",top:"200px",left:"600px"}}>
      <Form.Item>
<<<<<<< HEAD
      {getFieldDecorator("us",{
        rules: [{ required: true, message: '请输入你的用户名!' },
                { min: 6, message: '输入长度6-9位!' },
                { max: 12, message: '输入长度6-9位!' }
      ],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="账号"
          value={this.state.us}
          onChange={(e)=>{
              this.setState({us:e.target.value})
          }}
        />,
      )}
    </Form.Item>
    <Form.Item>
    {getFieldDecorator("ps",{

    })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="密码"
          value={this.state.ps}
          onChange={(e)=>{
              this.setState({ps:e.target.value})
          }}
        />,
    )}
=======
        {getFieldDecorator("us",{
          rules: [{ required: true, message: '请输入你的用户名!' },
                  { min: 6, message: '输入长度6-9位!' },
                  { max: 12, message: '输入长度6-9位!' }
        ],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="账号"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("ps",{

        })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
        )}
>>>>>>> 92f40b718edcaf4c3d393a7968e2f10d7b7c38a7
    </Form.Item>
    <Form.Item>
      <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      <Button type="primary" htmlType="submit" className="login-form-button"  onClick={this.submit}>
        登录
      </Button>
        Or <a href="">register now!</a>
    </Form.Item>
        </Card>
  </div>
      );  
    }
  }


export default Form.create()(Login)