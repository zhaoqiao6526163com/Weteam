import React,{Component} from 'react'
import './home.less'
import ReactEcharts from 'echarts-for-react';

class Manage extends Component{
  constructor(){
    super()
    this.state={
      option:{
        title: {
          text: '走势图',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['新注册用户','新增订单','新增管理员']
        },
        color:['#5793F3','#675BBA', '#D14A61'],
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis:  {
          type: 'category',
          boundaryGap: false,
          data: ['2019-10-18','2019-10-19','2019-10-20','2019-10-21','2019-10-22','2019-10-23','2019-10-24']
        },
        yAxis: [{
          type: 'value',
          id:'1',
          position:'left',
          name:'用户',
          // nameGap:20,
          splitNumber:4,
          min:0,
          max:200,
          boundaryGap:[0.2,0.2],
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: { //网格线
            show: false
          }
        },
          {
            type: 'value',
            id:'2',
            position:'right',
            name:'订单',
            min:0,
            max:200,
            splitNumber:4,
            boundaryGap:[0.2,0.2],
            axisLabel: {
              formatter: '{value}'
            },

          }
        ],
        series: [
          {
            name:'新注册用户',
            type:'line',
            data:[117,1,20,60,18,34,2],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ],
              itemStyle:{
                color:'#5793F3'
              }
            },
            lineStyle:{
              color:'#5793F3' //改变折线颜色
            }
          },
          {
            name:'新增订单',
            type:'line',
            data:[0,0,0,0,2,12,5],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ],
              itemStyle:{
                color:'#675BBA'
              }
            },
            lineStyle:{
              color:'#675BBA' //改变折线颜色
            },
            yAxisIndex:1,
          },
          {
            name:'新增管理员',
            type:'line',
            data:[108,20,40,80,124,120,6],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ],
              itemStyle:{
                color:'#D14A61'
              }
            },
            lineStyle:{
              color:'#D14A61' //改变折线颜色
            }
          }
        ]
      }
    }
  }
  render(){
    return(
      <div className='home'>
        <section className='section-data'>
          <header className='section-title'>数据统计</header>
          <div className='el-row'>
            <div className='el-head'>当日数据：</div>
            <div className='el-col'>
              <span>2</span>新增用户
            </div>
            <div className='el-col'>
              <span>4</span>新增订单
            </div>
            <div className='el-col'>
              <span>6</span>新增管理员
            </div>

          </div>
          <div className='el-row'>
            <div className='el-head el-title'>总数据：</div>
            <div className='el-col'>
              <span>38156</span>新注册用户
            </div>
            <div className='el-col'>
              <span>12435</span>订单
            </div>
            <div className='el-col'>
              <span>54765</span>管理员
            </div>
          </div>
        </section>
        <div className='data-box'>
          <div className='data-column'>
            <ReactEcharts option={this.state.option} />
          </div>
        </div>
      </div>
    )
  }
}
export default Manage