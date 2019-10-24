import React,{Component} from 'react'
import { Input,Upload, Icon, message,Radio,Button } from 'antd';
import "../style/addGoods.less"
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
class AddGoods extends Component{
 
  
  constructor(){
    super()
    this.state={
      foodType:"",   //  食品类型
      foodname:"", //食品名称
      fooddesc:"",  //食品描述
      foodrule:"", //食品规格

      oading: false,
      value: 1,
      foodpack:0, //包装费
      foodprice:20  // 价格
    }
  }

  submit=()=>{
    let {
      foodType,   //  食品类型
      foodname, //食品名称
      fooddesc,  //食品描述
      foodrule, //食品规格
      foodpack, //包装费
      foodprice  // 价格
    }=this.state;
    this.$axios.get("/api/food/addfood",{
      // let {_id} = localStorage.setItem();
      params:{
        foodType,   //  食品类型
        foodname, //食品名称
        fooddesc,  //食品描述
        foodrule, //食品规格
        foodpack, //包装费
        foodprice  // 价格
      }
  })
  .then((data)=>{
      console.log(data)
  })
}


  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };
  onChange = e => {   //   食品规格
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render(){
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const { imageUrl } = this.state;
    return(
      <div>
        <div className="box">
            <span>食品种类</span><Input className="ip" value={this.state.foodType} onChange={(e)=>{
                    this.setState({foodType:e.target.value})
            }} /><br/>
        </div>
        <div className="box2">
            <span>食品名称</span><Input className="ip" id="ip2" value={this.state.foodname} onChange={(e)=>{
                    this.setState({foodname:e.target.value})
            }}/><br/>
            <span>食品描述</span><Input className="ip" value={this.state.fooddesc} onChange={(e)=>{
                  this.setState({fooddesc:e.target.value})
            }} /><br/>
            <span>食品详情</span><Input className="ip" onChange={()=>{

            }} /><br/>

            <div className="uploadPri" style={{display:"flex"}}>
                <span>上传图片</span> 
              <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%'}} /> : uploadButton}
              </Upload>
            </div>

          <div className="specification">
            <span>食品规格</span>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1} onClick={()=>{
                        this.state.foodrule = this.refs.rule1.innerHTML
                        this.setState({foodrule:this.setState.foodrule})
                }}><span ref="rule1">单规格</span></Radio>
                <Radio value={2} onChange={()=>{
                      this.state.foodrule = this.refs.rule2.innerHTML
                      this.setState({foodrule:this.state.foodrule})
                }}><span ref="rule2">多规格</span></Radio>
          </Radio.Group>
          </div>

          <div className="outSide">
                <span>包装费</span><input type="text" ref="pack" value={this.state.foodpack} onChange={(e)=>{
                          if(e.target.value > 100 ){    
                            {/* || e.target.value.replace(/[^/u4E00-/u9FA5]/g) */}
                                e.target.value = 100
                          }
                          this.setState({foodpack:e.target.value})
                }} /><button className="subtract" onClick={()=>{
                      this.setState({foodpack:this.state.foodpack-1})
                      if( this.state.foodpack <= 0 ){
                        this.setState({foodpack:0})
                      }else if(this.state.foodpack >= 100){
                        this.setState({foodpack:0})
                      }
                }}>-</button><button ref="btn_add" className="add" onClick={()=>{
                      if(this.refs.pack.value === 100){
                          this.refs.btn_add.style={disabled:"disabled"}
                      }
                      this.setState({foodpack:this.state.foodpack+1})
                
                }}>+</button><br/>
                <span>价格  &nbsp;&nbsp;</span><input type="text" value={this.state.foodprice}/><button className="subtract" onClick={()=>{
                  this.setState({foodprice:this.state.foodprice-1})
                  if( this.state.foodprice <= 0 ){
                    this.setState({foodprice:0})
                  }
            }}>-</button><button className="add"  onClick={()=>{

              this.setState({foodprice:this.state.foodprice+1})
        }}>+</button>
          </div>
          <Button type="primary" onClick={this.submit}>确认添加商品</Button>
        </div>
      </div>
    )
  }
}
export default AddGoods