from flask import request
from app import app, db
from app.models import User


@app.route('/signup',methods=['GET','POST','DELETE','PUT'])
def signup():
    if request.method=='POST':
        username=request.args.get('name')
        password = request.args.get('pass')
        user=User(username=username,password=password)
        db.session.add(user);
        db.session.commit()
