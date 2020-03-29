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
    let myChart = echarts.init(document.querySelector('.bar .char'));
    // 指定配置项和数据
    let option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10%',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['旅游行业', '金融行业', 'IT行业', '洗脚行业', '吃饭行业', '捡垃圾', '外卖行业'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: '#9ea4bb',
                fontSize: '9'
            },
            // 不显示坐标轴的线 x轴的那条黑线
            axisLine: {
                show: false

            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '12'
            },
            // y轴线条的颜色
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    width: 2
                }

            },
            // y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };
    // 把配置项给实例对象
    myChart.setOption(option);

    // 让图表自适应屏幕
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


// 右上横向柱状图
(() => {
    console.log(document.querySelector('.bar1 .char'));
    //实例化对象
    let myChart = echarts.init(document.querySelector('.bar1 .char'));
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '22%',
            top: '10%',
            bottom: '10%',
            containLabel: false
        },
        xAxis: {
            //不显示x轴
            show: false
        },
        yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
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
                color: '#fff'
            }
        },
        series: [{
                name: '条',
                type: 'bar',
                data: [88, 23, 29, 50, 13, 76],
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // 此时的color可以修改柱子的颜色
                    color:['pink','green']
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                // 柱子的宽度
                barWidth: 10,
                label: {
                    normal: {
                        show: true,
                        // 柱子内显示文字
                        position: 'inside',
                        // data中的数据会替换c
                        formatter: '{c}%'
                    }
                }
            },
            {
                name: '2012年',
                type: 'bar',
                data: [19, 23, 31, 124, 13, 68],
                itemStyle: {
                    barBorderRadius: 20
                }
            }
        ]
    };
    // 把配置项给实例对象
    myChart.setOption(option);

    // 让图表自适应屏幕
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();