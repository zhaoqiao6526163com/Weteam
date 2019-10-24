import React,{Component} from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'
class Visitor extends Component{
  constructor(){
    super()
    this.state={
      // option:{
      //   legend: {
      //       orient: 'vertical',
      //       left: 'left',
      //       data: ['????','????','????','????','????']
      //   },
      //   series : [
      //       {
      //           name: '????',
      //           type: 'pie',
      //           radius : '55%',
      //           center: ['50%', '60%'],
      //           data:[
      //               {value:335, name:'????'},
      //               {value:310, name:'????'},
      //               {value:234, name:'????'},
      //               {value:135, name:'????'},
      //               {value:1548, name:'????'}
      //           ],
                
      //       }
      //   ]
    // }
    
    }
  }
  render(){
    return(
      <div>
         <Card>
          <ReactEcharts option={this.state.option} />
         </Card>
      </div>
    )
  }
}
export default Visitor