'''
@Author: your name
@Date: 2020-02-28 09:12:30
@LastEditTime: 2020-02-28 10:59:44
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: /studyCode/python/test.py
'''

import requests
from bs4 import BeautifulSoup
import re
headers={'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}
def getHTMLText(url):
    try:
        kv = {'user-agent':'Mozilla/5.0'}
        r = requests.get(url,headers=kv)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return r.text
    except:
        return "产生异常"   
if __name__ == '__main__':
    url = 'https://www.ivsky.com/bizhi/love_live_v59137/'
    html = getHTMLText(url)
    #print(html)
    soup = BeautifulSoup(html,"html.parser")
    pattern= re.compile(r'img src="(.*?jpg)" alt')
    image_url= pattern.findall(html)
    #print(image_url)
    for i,link in enumerate(image_url):   
        link = "http:"+link         
        resp=requests.get(link,headers=headers)#请求图片链接            
        content=resp.content#获取二进制内容      
        with open('/Users/a/Downloads/imgs/%d.jpg'%(i),'wb') as f:                
            f.write(content)#下载图片

    print("下载成功")