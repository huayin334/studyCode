'''
@Author: your name
@Date: 2020-02-27 08:06:53
@LastEditTime: 2020-02-27 13:25:19
@LastEditors: Please set LastEditors
@Description: In User Settings Edit
@FilePath: /studyCode/python/test.py
'''

import flask
app=flask.Flask(__name__)
@app.route("/")
def hello():
    return "你好"

@app.route("/hi")
def hi():
    return "Hi,你好"

@app.route("/index")
def index():
    try:
        fobj=open("index.html","rb")
        data=fobj.read()
        fobj.close()
        return data
    except Exception as err:
        return str(err)


if __name__=="__main__":
    app.run()

