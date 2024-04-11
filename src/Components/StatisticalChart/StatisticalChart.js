import React from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts';
const StatisticalChart = () => {
    const option={
        color:['var(--orange)'],
        toolbox:{
            feature:{
                saveAsImage:{

                }
            }
        },
        grid:{
            left:"3%",
            right:"4%",
            bottom:'3%',
            containLabel:true,
            show:false
        }
        ,
        tooltip:{
            trigger:"axis",
            axisPointer:{
                type:"cross"
            },
            backgroundColor:"rgb(0,0,0,0.59)",
            borderWidth:0,
        }
        ,
        xAxis:[
        {
            type:"category",
            boundaryGap: false,
            data:["Mon","Tue","Wed","Thu","Fri","Sat"]
        }
    ],
    yAxis:[
        {
            type:'value',
            splitLine:{ //wil remove the horizontal line from the graph
                show:false
            }
        }
    ],
    series:[
        {
            type:"line",  //type of graph..eg line or bar or pie
            smooth:true, //curved line instead of straight line
            data:[4393,8340,2193,4932,9328,7453],
            lineStyle:{
                color:new echarts.graphic.LinearGradient(0,0,0,1,
                    [
                        {
                            offset:0,
                            color:"rgb(255,191,9)"
                        },
                        {
                            offset:1,
                            color:"#F450d3"
                        }
                        ]
                    ),
                    width:4
            },
            emphasis:{
                focus:"series"
            }
            
            ,
            showSymbol:false,     //remove  dots representing value
            areaStyle:{
                opacity:.5,
                color:new echarts.graphic.LinearGradient(0,0,0,0.8,[
                    {
                        offset:0,
                        color:"#FE4C00"
                    },
                    {
                        offset:1,
                        color:'#5dc9ff'
                    }
                ])
            }
        }
    ]


}
  return (
//charts provided by react
        <ReactECharts
        option={option} />
  )
}

export default StatisticalChart