import { Table } from 'antd';
import React from 'react';
import './shi.less'
// 店铺名称	店铺地址	店铺介绍	操作
const columns = [
  { title: '店铺名称', dataIndex: 'name', key: 'name' },
  { title: '店铺地址', dataIndex: 'age', key: 'age' },
  { title: '店铺介绍', dataIndex: 'address', key: 'address' },
//   { title: '操作', dataIndex: 'address', key: 'address' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () =>     <td className="el-table_1">
    <div className="cel">
      <button className="el-button el-button--Success el-button--mini">
        <span>编辑</span>
      </button>
      <button className="el-button el-button--Success el-button--mini">
        <span>添加商品</span>
      </button>
      <button className="el-button el-button--Success el-button--mini1">
        <span> 删除</span>
      </button>
    </div>

  </td>
  
  ,

  
  },
];

const data = [
  {
    key: 1,
    name: '效果演示',
    age: '广东省广州市越秀区中山五路219号华联购物中心F1',
    address: 'sad',
    description:'<span>' ,
   
  },
  
  {
    key: 2,
    name: '北京烤鸭',
    age: '北京市顺义区',
    address: '999',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: '南所对的',
    age: '北京市顺义区站前南街4号',
    address: '9999',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];



class Router extends React.Component{
    render(){
        return(
            <Table
    columns={columns}
     expandedRowRender={()=>{
return ( <td className="el-table__expanded-cell">
<form className="el-form demo-table-expand el-form--label-left el-form--inline">
  <div className="el-form-item">

    <label class="el-form-item__label">店铺名称</label>

    <span>效果演示</span>

  </div>
  <div className="el-form-item"><label class="el-form-item__label">店铺地址</label>
    <div className="el-form-item__content">
      <span>广东省广州市越秀区中山五路219号华联购物中心F1</span>
    </div>
  </div>
  <div className="el-form-item"><label class="el-form-item__label">店铺介绍</label>
  
      <span>sad</span>
    </div>
  <div className="el-form-item"><label class="el-form-item__label">店铺ID</label>
   
      <span>1</span>
    </div>
  <div className="el-form-item"><label class="el-form-item__label">联系电话</label>
 
      <span>13437850035</span>
    </div>
  <div className="el-form-item"><label class="el-form-item__label">评分</label>
  
      <span>4.7</span>
    </div>
  <div className="el-form-item"><label class="el-form-item__label">销售量</label>
  
      <span>106</span>
    </div>
  <div className="el-form-item"><label class="el-form-item__label">分类
  
  </label>
 
      <span>快餐便当/简餐</span>
    </div>
</form>
</td>)
     }}
    
    dataSource={data}
  /> 
        )
    }
}
// ReactDOM.render(
//   <Table
//     columns={columns}
//     expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
//     dataSource={data}
//   />,
//   mountNode,
// );
export default Router