const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();

const errorPage = require('./controllers/error');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');

const post = require('./models/itemModel');
const comment = require('./models/comments');

app.use(cors({
    origin:['http://127.0.0.1:5501','http://127.0.0.1:5501/store.html?item=Item+1&desc=Description1&price=1&quantity=1&submit=Add+Product'],
    methods:['GET','POST'],
    credentials:true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(adminRoute);

comment.belongsTo(post, {foreignKey: 'UserId',constraints: true, onDelete: 'CASCADE'});
post.hasMany(comment);
sequelize.sync()
  .then(res => {
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });
  