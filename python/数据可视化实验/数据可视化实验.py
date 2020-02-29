'''
@Author: your name
@Date: 2020-02-27 16:41:08
@LastEditTime: 2020-02-27 19:59:41
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: /studyCode/python/数据可视化实验.py
'''
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
# 可以显示中文字体
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
# 正弦图
# x=np.arange(0,2*np.pi,0.01)
# y=np.sin(x)
# plt.plot(x,y,'s')
# plt.xlabel(u"x轴")
# plt.ylabel(u"y轴")
# plt.title(u"正弦函数")
# 显示负号
matplotlib.rcParams['axes.unicode_minus']=False
# 三种幂函数
# x=np.linspace(-5,4,200)
# f1=np.power(15,x)
# f2=np.power(np.e,x)
# f3=np.power(1.3,x)
# plt.plot(x,f1,'r',ls='-',linewidth=2,label='$15^x$')
# plt.plot(x,f2,'b',ls='--',linewidth=2,label='$e^x$')
# plt.plot(x,f3,'g',ls='solid',linewidth=2,label='$1.3^x$')
# plt.axis([-5,4,-2,16])
# plt.text(1,7.5,r'$15^x$',fontsize=14)
# plt.text(2.2,7.5,r'$e^x$',fontsize=14)
# plt.text(3.2,3,r'$1.3^x$',fontsize=14)
# plt.title(u"三种幂函数曲线")
# plt.legend(loc='upper left')

# 两列两行四张图
# plt.subplot(221)#两行两列的第一个位置
# plt.axis([-1,2,-1,2])
# plt.axhline(y=0.5,color="b")#水平线
# plt.axhline(y=0.2,xmin=0.25,xmax=0.65,color="r")#水平线
# plt.subplot(222)#两行两列的第二个位置
# plt.axis([-1,2,-1,2])
# plt.axvline(x=0,ymin=0.5,linewidth=4,color="b")#垂直线
# plt.axvline(x=1,ymin=-0.5,ymax=0.25,color="r")#垂直线
# plt.subplot(223)#两行两列的第三个位置
# plt.axis([-1,2,-1,2])
# plt.axhline(y=0.5,color="b")#水平线
# plt.axvline(x=1,ymin=-0.5,ymax=0.5,linewidth=4,color="g")#垂直线
# plt.subplot(224)#两行两列的第四个位置
# plt.axis([-1,2,-1,2])
# plt.axvspan(1.23,1.55,facecolor='g',alpha=0.5)#水平块
# plt.axvline(x=1,ymin=-0.5,ymax=0.25,color="r")#水平线
# 直方图
# 随机生成（10000,）服从正态分布的数据
# data = np.random.randn(10000)
# """
# 绘制直方图
# data:必选参数，绘图数据
# bins:直方图的长条形数目，可选项，默认为10
# normed:是否将得到的直方图向量归一化，可选项，默认为0，代表不归一化，显示频数。normed=1，表示归一化，显示频率。
# facecolor:长条形的颜色
# edgecolor:长条形边框的颜色
# alpha:透明度
# """
# plt.hist(data, bins=40, normed=0, facecolor="blue", edgecolor="black", alpha=0.7)
# # 显示横轴标签
# plt.xlabel("区间")
# # 显示纵轴标签
# plt.ylabel("频数/频率")
# # 显示图标题
# plt.title("频数/频率分布直方图")
# 点状图
# x=np.random.rand(50)
# y=np.random.rand(50)
# area=np.pi*(15*np.random.rand(50))**1.5
# color=2*np.pi*np.random.rand(50)
# plt.scatter(x,y,s=area,c=color,alpha=0.2,cmap= plt.cm.hsv)
# 2D笛卡尔心形图
# t = np.linspace(0, np.pi, 1000)
# x = np.sin(t)
# y = np.cos(t) + np.power(x, 2.0 / 3)
# plt.plot(x, y, color='red', linewidth=2)
# plt.plot(-x, y, color='red', linewidth=2)
# plt.title("笛卡尔心形图")
# plt.ylim(-1.5, 2)
# plt.xlim(-1.5, 1.5)
# plt.fill_between(x,y,facecolor='pink')
# plt.fill_between(-x,y,facecolor='pink')
# 3D点线图
#绘制三角螺旋线
# from mpl_toolkits import mplot3d
# import matplotlib.pyplot as plt
# import numpy as np
# ax = plt.axes(projection='3d')
# #三维线的数据
# zline = np.linspace(0, 15, 1000)
# xline = np.sin(zline)
# yline = np.cos(zline)
# ax.plot3D(xline, yline, zline, 'gray')
# # 三维散点的数据
# zdata = 15 * np.random.random(100)
# xdata = np.sin(zdata) + 0.1 * np.random.randn(100)
# ydata = np.cos(zdata) + 0.1 * np.random.randn(100)
# ax.scatter3D(xdata, ydata, zdata, c=zdata, cmap='Greens')
data = np.random.randn(100)
fig,(ax2)=plt.subplots(1,figsize=(8,4))
ax2.boxplot(data)
plt.show()