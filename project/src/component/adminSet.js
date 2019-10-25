
import React,{Component} from 'react'
import { Upload, Icon, message } from 'antd';

import "../style/addminSet.less"


class AdminSet extends Component{
  constructor(){
    super()
    this.state={
      
    }
  }
  render(){
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return(
      <div>
            <div className="box">
                <ul>
                    <li>姓名：</li>
                    <li>注册时间：</li>
                    <li>管理员权限：</li>
                    <li>管理员&nbsp;&nbsp;ID：</li>
                    <li className="change">
                        <span>更换头像</span>
                        <div>
                            <Upload
                            listType="picture-card"
                          >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                          </Upload>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
    )
  }
}
export default AdminSet