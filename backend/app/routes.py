from flask import request, jsonify
from app import app, db
from app.models import User
import jwt
import datetime

@app.route('/signup',methods=['GET','POST','DELETE','PUT'])
def signup():
    if request.method=='POST':
        firstname=request.args.get('firstName')
        lastname = request.args.get('lastName')
        email = request.args.get('email')
        password = request.args.get('password')
        user=User(firstname=firstname,lastname=lastname,email=email,password=password)
        db.session.add(user);
        db.session.commit()
        # return 'ok'
        token=jwt.encode({'user': email ,'exp': datetime.datetime.utcnow()+datetime.timedelta(minutes=30)},app.config['SECRET_KEY'])
        return jsonify({'token':token.decode('UTF-8')})
    if request.method=='GET':
        cols = ['id', 'firstname','lastname','password', 'email']
        data = User.query.all()
        result = [{col: getattr(d, col) for col in cols} for d in data]
        return jsonify(result=result)

@app.route('/login',methods=['GET','POST','DELETE','PUT'])
def login():
    if request.method=='POST':
        email = request.args.get('email')
        password = request.args.get('password')
        user=User.query.filter_by(email=email).first()
        if user.password==password:
            token=jwt.encode({'user': email ,'exp': datetime.datetime.utcnow()+datetime.timedelta(minutes=30)},app.config['SECRET_KEY'])
            return jsonify({'token':token.decode('UTF-8')})
    if request.method=='GET':
        cols = ['id', 'firstname','lastname','password', 'email']
        data = User.query.all()
        result = [{col: getattr(d, col) for col in cols} for d in data]
        return jsonify(result=result)
