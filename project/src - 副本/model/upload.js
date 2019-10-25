import React from 'react'
import { Upload, Icon, message } from 'antd/lib/index';
import {connect} from 'react-redux'
import ActionCreator from '../store/actionCreator'

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

class FoodImg extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                // console.log(imageUrl, 'upload')
                this.setState({
                    imageUrl,
                    loading: false,
                })
            });
        }
    };
    componentDidUpdate() {
        let url = this.state.imageUrl
        // if(this.state.loading === false){
        //     // console.log(this.state.imageUrl)
        //     let url = '/api/file/img'
        //     this.$axios.get(url,{
        //         params:{
        //             hehe:this.state.imageUrl
        //         }
        //     })
        //         .then((data)=>{
        //             console.log(data)
        //         })
        // }

        this.props.changePath(url)
    }

    render() {
        // console.log(this,'upload')
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : <img src={this.props.imgPath} alt="avatar" style={{ width: '100%' }} />}
            </Upload>
        );
    }
}

export default connect(state=>state)(FoodImg)