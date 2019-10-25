import React,{Component} from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'
class Visitor extends Component{
  constructor(){
    super()
    this.state={
      option : {
        title : {
          text: '????',
          subtext: '',
          x:'center'
      },
        legend: {
            orient: 'vertical',
            left: 'left',
            // data: ['????','????','????','????','????']
            data: []

        },
        series : [
            {
                name: '????',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    // {value:335, name:'????'},
                    // {value:310, name:'????'},
                    // {value:234, name:'????'},
                    // {value:135, name:'????'},
                    // {value:1548, name:'????'}
                ],
               
            }
        ]
    }
    
    }
  }
  render(){
    return(
      <div>
         <Card style={{margin:'20px',height:'600px'}}>
          <ReactEcharts option={this.state.option} />
         </Card>
      </div>
    )
  }
  componentDidMount(){
    let url='/api/home/getuserlist'
    this.$axios.get(url).then((data)=>{
      // console.log(data.data.data)
      let list=data.data.data
      let obj={}
      let option=JSON.parse(JSON.stringify(this.state.option))
      list.map((item,index)=>{
        let address=item.address
        // console.log(address)
        option.legend.data.push(address)
        // console.log(option)
        if(obj[address]){
          let num=obj[address]
          num=num+1
          obj[address]=num
        }else{
          obj[address]=1
        }
        console.log(obj)
        
      })
      // console.log(obj)
      let series=option.series
      for(var attr in obj){
        series[0].data.push({value:obj[attr],name:attr})
      }
      this.setState({option})
      console.log(option)
    })
  }
}
export default Visitor