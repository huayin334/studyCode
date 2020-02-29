'''
@Author: your name
@Date: 2020-02-28 12:07:42
@LastEditTime: 2020-02-28 13:07:40
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: /studyCode/python/大数据处理实验.py
'''
from bs4 import BeautifulSoup
doc = '''
<html> <body>
<bookstore>
<book id = "b1">
<title lang = "english" > Harry Potter </title>
<price> 23.99 </price>
</book>
<book id = "b2">
<title lang = "chinese" class="a"> 学习XML </title>
<price> 39.95 </price>
</book>
<book id = "b3" >
<title lang = "english"> Learning Python </title>
<price> 30.20 </price>
</book>
</bookstore>
</body> </html >'''
soup = BeautifulSoup(doc, 'html.parser')
tag=soup.find_all("title",attrs={"lang":"english"})
for t in tag:
    print("英文书名："+t.text+"价格："+t.next_sibling.next_sibling.text)

title=soup.find_all("title")
price=soup.find_all("price")
print("价格在30元以上：")
for t,p in zip(title,price):
    if float(p.text)>30:       
        print("书名："+t.text+"价格："+p.text)
            




    
