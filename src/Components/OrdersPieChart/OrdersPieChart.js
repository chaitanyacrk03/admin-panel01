import React from 'react'
import EChartsReact from 'echarts-for-react'
import * as echarts from 'echarts';
const OrdersPieChart = () => {
    const options={
        series:[
            {
                name:"Item",
                type:"pie",
                radius:["60%","80%"],
                avoidLabelOverLap:false,
                itemStyle:{
                    borderRadius:50,
                    borderColor:"black",
                    borderWidth:5
                },
                data:[
                    {
                        value:4638,
                        name:"Search Engine"
                    },
                    {
                        value:6849,
                        name:"direct"
                    },
                    {
                        value:7482,name:"Email"
                    },
                    {
                        value:4728,name:"Union Ads"
                    }
                ]
            }
        ]
    }
  return (
    <EChartsReact 
    style={{height:140,marginTop:"1rem"}}
    option={options}/>
  )
}

export default OrdersPieChart