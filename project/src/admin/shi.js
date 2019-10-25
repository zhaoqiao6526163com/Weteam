
import React from 'react';
import { Collapse } from 'antd';
import './shi.less'

const { Panel } = Collapse;

const text = <td className="el-table__expanded-cell">
  <form className="el-form demo-table-expand el-form--label-left el-form--inline">
    <div className="el-form-item">

      <label class="el-form-item__label">2店铺名称</label>

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
</td>

  ;

class Router extends React.Component {

  render() {
    return (
      <Collapse accordion>
        <Panel header={<tr className="el-table__row">

          <td className="el-table_1">
            <div className="cel"></div>
          </td>



          <td className="el-table_1">
            <div className="cel">效果演示</div>
          </td>



          <td className="el-table_1">
            <div className="cel">广东省广州市越秀区中山五路219号华联购物中心F1</div>
          </td>



          <td className="el-table_1">
            <div className="cel">2345</div>
          </td>



          <td className="el-table_1">
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
        </tr>
        } key="1">




          <p>{text}</p>
        </Panel>
        <Panel header={<tr className="el-table__row">

          <td className="el-table_1">
            <div className="cel"></div>
          </td>



          <td className="el-table_1">
            <div className="cel">北京市顺义区</div>
          </td>



          <td className="el-table_1">
            <div className="cel">广东省广州市越秀区中山五路219号华联购物中心F1</div>
          </td>



          <td className="el-table_1">
            <div className="cel">2345</div>
          </td>



          <td className="el-table_1">
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
        </tr>}

          key="2">
          <p>{text}</p>
        </Panel>
        <Panel header={<tr className="el-table__row">

          <td className="el-table_1">
            <div className="cel"></div>
          </td>



          <td className="el-table_1">
            <div className="cel">北京市顺义区</div>
          </td>



          <td className="el-table_1">
            <div className="cel">广东省广州市越秀区中山五路219号华联购物中心F1</div>
          </td>



          <td className="el-table_1">
            <div className="cel">2345</div>
          </td>



          <td className="el-table_1">
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
        </tr>} key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    )
  }
}
export default Router;

