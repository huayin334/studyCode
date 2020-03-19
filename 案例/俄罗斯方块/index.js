/*
 * @Author: your name
 * @Date: 2020-03-19 15:09:42
 * @LastEditTime: 2020-03-19 17:23:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /studyCode/案例/俄罗斯方块/index.js
 */


// 定义砖块数据：宽度10格 高度20层

let blocks = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



// 封装场地类
class Map {
    // 设置格子的大小
    size = 30
    // 设置格子间距
    margin = 5
    // 设置格子的元素列表
    blocks = []
    // 显示场地
    show() {
        // 在页面中创建一个div代表场地
        let map = $('<div></div>')
            // 设置宽高
            .width(10 * this.size + 9 * this.margin)
            .height(20 * this.size + 9 * this.margin)
            // 设置基础样式
            .css({
                backgroundColor: '#cccccc',
                position: 'absolute'
            })
            .appendTo('body');

        // 循环20*10次创建小格子
        for (let y = 0; y < 20; y++) {
            this.blocks.push([])
            for (let x = 0; x < 10; x++) {
                this.blocks[y].push($('<div></div>')
                    .width(this.size)
                    .height(this.size)
                    .css({
                        backgroundColor: 'white',
                        position: 'absolute'
                    })
                    // 设置坐标
                    .offset({
                        left: x * (this.size + this.margin),
                        top: y * (this.size + this.margin)
                    })
                    .appendTo(map))
            }
        }
    }

    // 封装砖块的渲染方法
    render() {
        // 空0 可移动1 固定2
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                switch (blocks[y][x]) {
                    case 0:
                        this.blocks[y][x].css('backgroundColor', 'white');
                        break;
                    case 1:
                        this.blocks[y][x].css('backgroundColor', 'blue');
                        break;
                    case 2:
                        this.blocks[y][x].css('backgroundColor', 'black');
                        break;
                }
            }
        }
    }

    // 砖块的改变方法
    change(oldnum, newnum) {
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                //  判断当前砖块遍历的数据
                if (blocks[y][x] === oldnum) {
                    blocks[y][x] = newnum;
                }
            }
        }
    }

    // 向左移动
    left() {
        let flag = true;
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                //  判断当前砖块是否可移动
                if (blocks[y][x] === 1 && x == 0) {
                    flag = false;
                } else if (blocks[y][x] == 1 && blocks[y][x - 1] == 2) {
                    flag = false;

                }
            }
        }
        if (flag) {
            for (let y = 0; y < 20; y++) {
                for (let x = 0; x < 10; x++) {
                    if (blocks[y][x] == 1) {
                        blocks[y][x - 1] = 1;
                        // 当前格子改为白色
                        blocks[y][x] = 0;
                    }
                }
            }
        }
        // 让形状原点左移
        shape.origin[1]--;
        // 立即渲染出来数据
        this.render()
    }
    // 向右移动
    right() {
        let flag = true;
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                //  判断当前砖块是否可移动
                if (blocks[y][x] === 1 && x == 9) {
                    flag = false;
                } else if (blocks[y][x] == 1 && blocks[y][x + 1] == 2) {
                    flag = false;

                }
            }
        }
        if (flag) {
            for (let y = 0; y < 20; y++) {
                // 从右往左遍历
                for (let x = 9; x >= 0; x--) {
                    if (blocks[y][x] == 1) {
                        blocks[y][x + 1] = 1;
                        // 当前格子改为白色
                        blocks[y][x] = 0;
                    }
                }
            }
        }
        // 让形状原点右移
        shape.origin[1]++;
    }
    // 下坠
    down() {
        let flag = true;
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                //  判断当前砖块是否可移动
                if (blocks[y][x] === 1 && y == 19) {
                    flag = false;
                } else if (blocks[y][x] == 1 && blocks[y + 1][x] == 2) {
                    flag = false;

                }
            }
        }
        if (flag) {
            for (let y = 19; y >= 0; y--) {
                // 从右往左遍历
                for (let x = 0; x < 10; x++) {
                    if (blocks[y][x] == 1) {
                        blocks[y + 1][x] = 1;
                        // 当前格子改为白色
                        blocks[y][x] = 0;
                    }
                }
            }
        }
        // 让形状原点下移
        shape.origin[0]++;
    }
}
// 形状类
class Shape {
    // 形状类型 0-6七种类型
    type = 0
    angle = 1
    shapes = [
        // 一字型 四种类型因为会转4种方向
        [
            [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ],
            [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ]
        ],
        // 定义z字型
        [
            [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0]
            ],
            [
                [1, 0, 0],
                [1, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 0, 1]

            ],
            [
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0]
            ]
        ],
        // 定义T字型
        [
            [
                [1, 1, 1],
                [0, 1, 0],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]

            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0]
            ],
        ]
    ]
    // 形状原点
    origin = [0, 3]

    // 封装形状砖块坐标推导方法
    getPos(type, angle) {
        //取得对应形状数据
        let shape = this.shapes[type][angle];

        //存储形状坐标
        let pos = [];

        //遍历形状数据 根据原点推算出可移动方块的坐标
        shape.forEach((row, y) => {
            row.forEach((block, x) => {
                if (block == 1) {
                    pos.push([this.origin[0] + y, this.origin[1] + x])
                }
            })
        })
        console.log(pos);

        return pos;
    }

    // 显示形状方法
    show() {
        // 获取可移动的砖块坐标 把对应的坐标数据设置为1
        this.getPos(this.type, this.angle).forEach(pos => {
            blocks[pos[0]][pos[1]] = 1;
        })
    }

    // 新增形状
    add() {
        // 重置形状原点坐标
        this.origin = [0, 3];

        // 重置形状角度
        this.angle = 0;

        // 生成随机形状 random左闭右开
        this.type = Math.floor(Math.random() * 3);

        // 显示新形状
        this.show();
    }

    // 封装形状旋转方法
    rotato() {
        // 根据旧角度 得出新角度 0,1,2,3
        let newAngle = (this.angle + 1) % 4;

        // 设置新角度
        this.angle = newAngle;

        // 清除旧方块
        map.change(1, 0);

        // 显示新方块
        this.show();
        this.render();
    }
}
let map = new Map();
map.show();
map.render();
// map.change(1, 2)
let shape = new Shape()
shape.show()
// 定时器 渲染数据
setInterval(function () {
    map.render();
}, 1000)