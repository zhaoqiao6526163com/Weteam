import React,{Component} from 'react'
import '../style/edit.less'
import {Icon} from 'antd'
class VueEdit extends Component{
  constructor(){
    super()
    this.state={
      kuo:'</>'
    }
  }
  render(){
    return(
      <div className='edit-box'>
        <div className='edit-container'>
          <div className='editor'>
            <div className='edit-tools'>
              <span className='edit-formats'>
                <Icon type="bold" />
                <Icon type="italic" />
                <Icon type="underline" />
                <Icon type="strikethrough" />
              </span>
              <span className='edit-formats'>
                <span className='anticon anticon1'>”</span>
                <span className='anticon'>{this.state.kuo}</span>
              </span>
              <span className='edit-formats'>
                <span className='anticon'>H<sub>1</sub></span>
                <span className='anticon'>H<sub>2</sub></span>
              </span>
              <span className='edit-formats'>
                <Icon type="ordered-list" />
                <Icon type="unordered-list" />
              </span>
              <span className='edit-formats'>
                <span className='anticon'>x<sub>2</sub></span>
                <span className='anticon'>x<sup>2</sup></span>
              </span>
              <span className='edit-formats'>
                <Icon type="column-width" />
                <Icon type="column-width" />
              </span>
              <span className='edit-formats'>
                <Icon type="drag" />
              </span>
              <span className='edit-formats'>
                <select>
                  <option className='select-small'>Small</option>
                  <option className='select-normal'>Normal</option>
                  <option className='select-large'>Large</option>
                  <option className='select-huge'>Huge</option>
                </select>
              </span>
              <span className='edit-formats'>
                <select>
                  <option className='select-heading1'>Heading1</option>
                  <option className='select-heading2'>Heading2</option>
                  <option className='select-heading3'>Heading3</option>
                  <option className='select-heading4'>Heading4</option>
                  <option className='select-heading5'>Heading5</option>
                  <option className='select-heading6'>Heading6</option>
                  <option className='select-normal'>Normal</option>
                </select>
              </span>
              <span className='edit-formats'>
                <Icon type="font-colors" />
                <Icon type="bg-colors" />
              </span>
              <span className='edit-formats'>
                <select>
                  <option className='select-sans'>Sans Serif</option>
                  <option className='select-serif'>Serif</option>
                  <option className='select-monospace'>Monospace</option>
                </select>
              </span>
              <span className='edit-formats position'>
                <Icon type="align-left" />
                <Icon type="align-center" />
                <Icon type="align-right" />
              </span>
              <span className='edit-formats'>
                <Icon type="paper-clip" />
                <Icon type="picture" />
                <Icon type="play-square" />
              </span>
            </div>
            {/*<div className='edit-text'>*/}
              <textarea className='edit-text' >

              </textarea>
            {/*</div>*/}
          </div>
        </div>
        <div className='submit-btn'>
          <button className='btn'>提交</button>
        </div>
      </div>
    )
  }
}
export default VueEdit