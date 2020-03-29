1.引入echarts.js

```javascript
<script src="js/echarts.min.js"></script>
```



2.设置一个有宽和高的盒子

```javascript
   <div class="box"></div>
  .box{
          width: 300px;
          height: 300px;
          margin: 0 auto;
          background-color: antiquewhite;
      }
```



3.初始化实例对象

```javascript
//echarts.init（dom对象）
let myChart = echarts.init(document.querySelector('.box'));
```



4.指定配置项和数据

```javas
 // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
```



5.把配置项给实例对象

```javascript
myChart.setOption(option)
```

