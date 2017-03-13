import model from './model'

export default async (ctx, next) => {
    try {
        let urls = ctx.path.split('/')
        let clt = urls[1] || 'file'
        let md5 = urls[2] || ''
        if(clt == 'file'){
            if(md5 == 'upload'){
                ctx.body = {status:'wrong',msg:'这里还没做'}
            }else if(md5.length < 20){
                ctx.body = {status:'wrong',msg:'你在做什么？'}
            }
            return
        }
        await next()
    } catch (err) {
        console.log(err)
        ctx.body = { message: err.message };
        ctx.status = err.status || 500;
    }
}
