"use strict"
var koa = require('koa');
var app = new koa();
var getRawBody = require('./raw')
import model from './model'
import authMiddle from './auth'
import fileMiddle from './file'

model.connect('mongodb://localhost:27017/mxgj_test')
//文件处理
app.use(fileMiddle)
//访问权限
app.use(authMiddle)
//特殊接口 ...

app.use(async (ctx, next) => {
    try {
        const buf = await getRawBody(ctx.req)
        ctx.rawBody = buf.toString()
        console.log('--',new Date(),ctx.path,'\nrequest::json\n',ctx.rawBody)
        await next()
        console.log('response::json\n',ctx.body)
    } catch (err) {
        console.log(err)
        ctx.body = { message: err.message };
        ctx.status = err.status || 500;
    }
})

app.use(async (ctx,next) => {
    let urls = ctx.path.split('/')
    let clt = urls[1] || 'Color'
    let method = urls[2] || 'fetch'
    let {id,filter,limit,startPos,orderBy,item} = JSON.parse(ctx.rawBody)
    console.log(clt,method,{id,filter,limit,startPos,orderBy})

    if((method === 'addItem' || method.endsWith('ById')) && clt in model &&  method in model[clt]){
        let ret = await model[clt][method](id,item)
        ctx.body = {status:'success',msg:'hello world!',data:{item:ret}}
    }else{
        let {list,count} = await model[clt][method](filter,orderBy,limit,startPos)
        ctx.body = {status:'success',msg:'hello world!',data:{list,count}}
    }
});

app.listen(20000);
