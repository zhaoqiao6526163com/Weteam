import React,{Component} from "react"
import { Form, Icon, Input, Button, Checkbox,Card,message } from 'antd';
import './login.less'
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
          <div className='bg'>
            <img src="http://hoss.haowu.com/hoss-web/hoss-v2/dist/image/web_login_background2.jpg"/>
          </div>
          <Card style={{width:"400px",position:"fixed",top:"240px",right:"100px",background:'transparent',border:'none'}}>
            <Form.Item>
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
                  <Input style={{display:'inline'}}
                         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                         type="password"
                         placeholder="密码"
                         value={this.state.ps}
                         onChange={(e)=>{
                           this.setState({ps:e.target.value})
                         }}
                  />,
              )}
            </Form.Item>
            <Form.Item style={{color:'#fff',marginTop:'-20px'}}>
              {/* <Checkbox style={{color:'#fff',display:'inline'}}>Remember me</Checkbox> */}
              <a className="login-form-forgot" href="" style={{color:'#fff'}}>
                Forgot password
              </a>
              <Button style={{background:'#F4A733',width:'100%'}} htmlType="submit" className="login-form-button"  onClick={this.submit} >
                登录
              </Button>
              Or <a href="" style={{color:'#fff',display:'inline'}}>register now!</a>
            </Form.Item>
          </Card>
        </div>
    );
  }


}
export default Form.create()(Login)
