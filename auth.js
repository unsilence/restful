import model from './model'
const ACTIONS ={
    async login(ctx,next){
        let item = await model.Session.addItem(null,{userName:'ceshi'})
        ctx.body = {status:'success',data:{item:{name:'ceshi'},token:item._id}}
    },
    async logout(ctx,next){
        let item = await model.Session.getById(ctx.req.query.token)
        ctx.body = {status:'success',data:{item}}
    },
    async account(ctx,next){
        console.log("query",ctx.query)
        let item = await model.Session.getById(ctx.query.token)
        if(item)
            ctx.body = {status:'success',data:{item}}
        else
            ctx.body = {status:'wrong',msg:'请使用/auth/login接口登录'}
    }
}
export default async (ctx, next) => {
    try {
        let urls = ctx.path.split('/')
        let clt = urls[1] || 'file'
        let action = urls[2] || ''
        if(clt === 'auth'){
            if(action in ACTIONS){
               await ACTIONS[action](ctx,next)
          }else {
            throw new Error('访问地址不存在')
          }
        }else if (true) {//这里要检测 1 是否已登录  2 是否为总部
            await next()
        }
    } catch (err) {
        console.log(err)
        ctx.body = { message: err.message };
        ctx.status = err.status || 500;
    }
}
