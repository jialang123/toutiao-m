const mysql = require('myqsql')
const db = mysql.createpool({
    connectionlimit:10,
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'admin123',
    database:'first_name'
})
db.query('delete from ev_users where id=4',(err,data)=>{
    console.log('err->',err)
    console.log('data->',data)
})
//简化更新语法
