'''
@Author: your name
@Date: 2020-02-28 13:09:32
@LastEditTime: 2020-02-28 14:56:49
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: /studyCode/python/大数据处理实验/下载python爬虫.py
'''
from bs4 import BeautifulSoup
import urllib.request
import sys
# Python 2.7.9 之后引入了一个新特性，当你使用urllib.urlopen一个 https 的时候会验证一次 SSL证书。
# 当目标使用的是自签名的证书时就会报urllib.error.URLError错误。
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
def searchPython(url):
    resp = urllib.request.urlopen(url)
    data = resp.read()
    html = data.decode()
    soup = BeautifulSoup(html, "html.parser")
    ol = soup.find(name="ol", attrs={"class": "list-row-container menu"})
    li = ol.find("li")
    a = li.find(name="span", attrs={"class": "release-number"}).find("a")
    # python = a.text
    url = a["href"]
    downurl = "https://www.python.org/downloads/"+url
    return downurl

print(searchPython("https://www.python.org/downloads/"))
downurl=searchPython("https://www.python.org/downloads/")
def downPython(url):
    resp = urllib.request.urlopen(url)
    data = resp.read()
    html = data.decode()
    soup = BeautifulSoup(html, "html.parser")
    a=soup.find_all(name="a")
    for i in a:
        if(i["href"].endswith('64.zip')):
            print(i["href"])
            return i["href"]
def cbk(a, b, c):  
    '''回调函数 
    @a: 已经下载的数据块 
    @b: 数据块的大小 
    @c: 远程文件的大小 
    '''  
    per = 100.0 * a * b / c  
    if per > 100:  
        per = 100  
    print ('%.2f%%'% per)
    
url2=downPython(downurl)      
urllib.request.urlretrieve(url2,'/Users/a/Downloads/python-3.8.2-embed-amd64.zip',cbk)