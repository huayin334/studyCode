'''
@Author: your name
@Date: 2020-02-27 13:36:09
@LastEditTime: 2020-02-27 13:37:32
@LastEditors: Please set LastEditors
@Description: In User Settings Editr
@FilePath: /studyCode/python/client.py
'''
import urllib.request
url="http://127.0.0.1:5000"
html = urllib.request.urlopen(url)
html = html.read()
html = html.decode()
print(html)