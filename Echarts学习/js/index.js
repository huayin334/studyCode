/*
 * @Author: your name
 * @Date: 2020-03-27 20:01:11
 * @LastEditTime: 2020-03-28 20:49:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/Echarts学习/js/index.js
 */
//为了防止命名污染，放在立即执行函数里面
// 左上柱形图
(function () {
  let myChart = echarts.init(document.querySelector(".bar .char"));
  // 指定配置项和数据
  let option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10%",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      data: ["旅游行业", "金融行业", "IT行业", "洗脚行业", "吃饭行业", "捡垃圾", "外卖行业"],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: "#9ea4bb",
        fontSize: "9"
      },
      // 不显示坐标轴的线 x轴的那条黑线
      axisLine: {
        show: false

      }
    }],
    yAxis: [{
      type: "value",
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      // y轴线条的颜色
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 2
        }

      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
      name: "直接访问",
      type: "bar",
      barWidth: "35%",
      data: [10, 52, 200, 334, 390, 330, 220],
      itemStyle: {
        barBorderRadius: 5
      }
    }]
  };
  // 把配置项给实例对象
  myChart.setOption(option);

  // 让图表自适应屏幕
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 右上横向柱状图
(() => {
  let myColor = ["#1089E7", "#F57474", "#56D013", "#F8B448", "#8B78F6"];
  console.log(document.querySelector(".bar1 .char"));
  //实例化对象
  let myChart = echarts.init(document.querySelector(".bar1 .char"));
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "22%",
      top: "10%",
      bottom: "10%",
      containLabel: false
    },
    xAxis: {
      //不显示x轴
      show: false
    },
    //有左右两组y轴
    yAxis: [{
      type: "category",
      //默认是反向显示的，这里是将其翻转
      inverse: true,
      data: ["node", "js", "vue", "html", "css"],
      // 不显示线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // y轴刻度文字颜色
      axisLabel: {
        color: "#fff"
      }
    },
      {
        type: "category",
        data: [702, 350, 233, 644, 777],
        // 不显示线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // y轴刻度文字颜色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [{
      name: "条",
      type: "bar",
      data: [28, 63, 49, 80, 57],
      //层叠
      yAxisIndex: 0,
      // 修改第一组柱子的圆角
      itemStyle: {
        barBorderRadius: 20,
        // 此时的color可以修改柱子的颜色
        color: function (params) {
          // params传进来的是柱子对象 dataIndex是当前柱子的索引号
          return myColor[params.dataIndex];
        }
      },
      // 柱子之间的距离
      barCategoryGap: 50,
      // 柱子的宽度
      barWidth: 10,
      //图形上的文本标签
      label: {
        normal: {
          show: true,
          // 柱子内显示文字
          position: "inside",
          // data中的数据会替换c
          formatter: "{c}%"
        }
      }
    },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 15,
        data: [124, 124, 124, 124, 124],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 13
        }
      }
    ]
  };
  // 把配置项给实例对象
  myChart.setOption(option);

  // 让图表自适应屏幕
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//左中折线图
(() => {
  // 1.实例化对象
  console.log(document.querySelector(".line .char"));
  let myChart = echarts.init(document.querySelector(".line .char"));

  // 2.指定对象
  option = {
    //通过color修改2条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      //修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      //这个10%必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,//显示边框
      borderColor: "#012f4a",
      //包含刻度文字在内
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      //去除轴间距
      boundaryGap: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      axisTick: {
        show: false //去除刻度线
      },
      axisLabel: {
        color: "#4c9bfb",//文本颜色
        interval: 0//强制显示所有的标签
      },
      axisLine: {
        show: false //去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false //去除刻度线
      },
      axisLabel: {
        color: "#4c9bfb" //文本颜色
      },
      axisLine: {
        show: false //去除轴线
      },
      //y轴分割线颜色
      splitLine: {
        lineStyle: "#012f4a"
      }
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        stack: "总量",
        data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 22, 11],
        //平滑的显示
        smooth: true
      },
      {
        name: "新增游客",
        type: "line",
        stack: "总量",
        data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 22, 191, 234],
        //平滑的显示
        smooth: true
      }
    ]
  };

//  3.把配置给实例对象
  myChart.setOption(option);

  // 4.让图表自适应屏幕
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 数据变化
  let dataAll = [
    {
      year: "2020",
      data: [[300, 400, 350, 800, 1800, 1400, 700, 400, 350, 800, 700, 400], [200, 300, 700, 400, 300, 900, 700, 400, 1500, 1200, 600, 100]]
    },
    {
      year: "2021",
      data: [[300, 400, 350, 800, 660, 400, 700, 1400, 700, 400, 350, 800], [100, 400, 350, 800, 800, 100, 700, 300, 900, 700, 400, 1500]]
    }
  ];
//  5.点击切换效果
  $(".line h2").on("click", "a", function () {
    let obj = dataAll[$(this).index()];
    // 点击a之后，根据a的索引号，找到对应的yeardata的相关对象

    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    //重新渲染
    myChart.setOption(option);

  });
})();

//右中折线图
(() => {
  let myChart = echarts.init(document.querySelector(".line1 .char"));
  // console.log(myChart);
  option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
      data: ["邮件营销", "联盟广告"]
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        //x轴的文本设置
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴的线的颜色
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {show: false},
        //x轴的文本设置
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴的线的颜色
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        //  修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "邮件营销",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
        //  单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        //  填充区域
        areaStyle: {
          //  渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(1,132,213,.4)"//渐变色的起始颜色 (上面的)
            },
            {
              offset: 0.8,
              color: "rgba(1,132,213,.1)"//渐变色结束颜色 (下面的)
            }
          ], false),
          shadowColor: "rgba(0,0,0,.1)" //影子
        },
        //  设置拐点
        symbol: "circle",
        //  拐点大小
        symbolSize: 5,
        //拐点样式
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12
        },
        //  开始不显示拐点,鼠标经过显示
        showSymbol: false
      },
      {
        name: "联盟广告",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310],
        //  单独修改当前线条的样式
        lineStyle: {
          color: "#00d887",
          width: "2"
        },
        //  填充区域
        areaStyle: {
          //  渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0,216,135,.4)"//渐变色的起始颜色 (上面的)
            },
            {
              offset: 0.8,
              color: "rgba(0,216,135,.1)"//渐变色结束颜色 (下面的)
            }
          ], false),
          shadowColor: "rgba(0,0,0,.1)" //影子
        },
        //  设置拐点
        symbol: "circle",
        //  拐点大小
        symbolSize: 5,
        //拐点样式
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12
        },
        //  开始不显示拐点,鼠标经过显示
        showSymbol: false
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表自适应屏幕
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//左下饼状图
(()=>{
  // 1.实例化对象
  let myChart = echarts.init(document.querySelector('.pie .char'));
  // 2.指定配置
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      //小图标的位置和大小
      bottom:'0%',
      itemWidth:10,
      itemHeight:10,
      // orient: 'vertical',
      // left: 10,
      data: ['直接', '邮件', '联盟', '视频', '搜索'],
    //  修改图标组件的文字为12px
      textStyle:{
        color:'rgba(255,255,255,.5)',
        fontSize:'12'
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        //水平垂直居中
        center:['50%','50%'],
        //内圆和外圆的半径
        //假如把内圆的半径设为0，就变成实心饼状图
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: true //显示文字
          // position: 'center'
        },
        labelLine: {
          show: true //显示连接线
        },
        data: [
          {value: 335, name: '直接'},
          {value: 310, name: '邮件'},
          {value: 234, name: '联盟'},
          {value: 135, name: '视频'},
          {value: 1548, name: '搜索'}
        ]
      }
    ]
  };

  // 3.把配置给实例对象
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//右下饼形图
(()=>{
  let myChart = echarts.init(document.querySelector('.pie1 .char'));
  option = {

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: [10, 60],
        center: ['50%', '50%'],
        roseType: 'area',
        data: [
          {value: 10, name: 'rose1'},
          {value: 5, name: 'rose2'},
          {value: 15, name: 'rose3'},
          {value: 25, name: 'rose4'},
          {value: 20, name: 'rose5'},
          {value: 35, name: 'rose6'},
          {value: 30, name: 'rose7'},
          {value: 40, name: 'rose8'}
        ]
      }
    ]
  };
myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//模拟飞行路线模块
(()=>{
  let myChart = echarts.init(document.querySelector('.map .chart'));
  var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
  };

  var XAData = [
    [{name:'西安'}, {name:'北京',value:100}],
    [{name:'西安'}, {name:'上海',value:100}],
    [{name:'西安'}, {name:'广州',value:100}],
    [{name:'西安'}, {name:'西宁',value:100}],
    [{name:'西安'}, {name:'银川',value:100}]
  ];

  var XNData = [
    [{name:'西宁'}, {name:'北京',value:100}],
    [{name:'西宁'}, {name:'上海',value:100}],
    [{name:'西宁'}, {name:'广州',value:100}],
    [{name:'西宁'}, {name:'西安',value:100}],
    [{name:'西宁'}, {name:'银川',value:100}]
  ];

  var YCData = [
    [{name:'银川'}, {name:'北京',value:100}],
    [{name:'银川'}, {name:'广州',value:100}],
    [{name:'银川'}, {name:'上海',value:100}],
    [{name:'银川'}, {name:'西安',value:100}],
    [{name:'银川'}, {name:'西宁',value:100}],
  ];

  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  //var planePath = 'arrow';
  var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;

  };

  var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
  var series = [];
  [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
    series.push({
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: 'red',   //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      });
  });
  var option = {
    tooltip : {
      trigger: 'item',
      formatter:function(params, ticket, callback){
        if(params.seriesType=="effectScatter") {
          return "线路："+params.data.name+""+params.data.value[2];
        }else if(params.seriesType=="lines"){
          return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
        }else{
          return params.name;
        }
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data:['西安 Top3', '西宁 Top3', '银川 Top3'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'multiple'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: true,
          color:'#fff'
        }
      },
      //将地图放大1.2倍
      zoom:1.2,
      roam: true,
      itemStyle: {
        normal: {
          //地图省份颜色的修改
          areaColor: 'rgba(20,41,87,.5)',
          borderColor: '#0692a4',
          // borderWidth: 1,
        },
        emphasis: {
          areaColor: '#0b1c2d'
        }
      }
    },
    series: series
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();