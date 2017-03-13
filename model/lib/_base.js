"use strict"
import path from 'path'
import moment from 'moment'
import {ObjectID} from 'mongodb'
import model from '../index'
import _ from 'underscore'
export var keys = {
    qtext:{type:String,default:''},
    valid:{type: Boolean,default:true},
    updateAt:{type:Date,default: Date.now()},
    createAt:{type:Date,default: Date.now()}
}
export var collectionName = 'test'

export var getById = (ithis,_id)=>{
    console.log("model:: getById",ithis.collectionName,_id)
    return new Promise((resolve,reject)=>{
        let clt = model.getDb().collection(ithis.collectionName+'s')
        clt.findOne({_id:new ObjectID(_id),valid:true},function(err,doc){
            console.log({err,doc})
            resolve(JSON.parse(JSON.stringify(doc)))
        })
    }).catch(e=>console.log(e))
}
export var updateById = (ithis,_id,options)=>{
    console.log("model:: updateById ",ithis.collectionName,_id,options)
    return new Promise((resolve,reject)=>{
        let clt = model.getDb().collection(ithis.collectionName+'s')
        //ensure column values
        let setmap={updateAt:new Date()}
        Object.keys(ithis.keys).filter(k=>k in options)
        .map(k=>{
            let coltype = ithis.keys[k]
            setmap[k] =typeEnsure(coltype,options[k])
        })
        clt.findOneAndUpdate({_id:new ObjectID(_id),valid:true},
                            {$set:setmap},
                            {returnOriginal:false},
                            function(err,result){
                                console.log({err,result})
                                resolve(JSON.parse(JSON.stringify(result.value)))
                        })
    }).catch(e=>console.log(e))
}
let typeEnsure = (tp,v)=>{
    console.log('typeEnsure enter',{tp,v})
    if(_.isFunction(tp['type'])){
        return tp['type'](v||tp['default'])
    }else if(_.isArray(tp['type'])){
        console.log('enter array',tp)
        v = v || []
        return v.map(i=>typeEnsure(tp['type'][0],i))
    }else if(_.isObject(tp['type'])){
        console.log('enter object',tp)
        let _o={}
        _.keys(tp['type']).map(k=>{
            _o[k] = typeEnsure(tp['type'][k],v[k])
        })
    }else if(_.isFunction(tp)){
        return tp(v)
    }else if(_.isArray(tp)){
        console.log('enter array',tp)
        v = v || []
        return v.map(i=>typeEnsure(tp[0],i))
    }else if(_.isObject(tp)){
        console.log('enter object',tp)
        let _o={}
        _.keys(tp['type']).map(k=>{
            _o[k] = typeEnsure(tp[k],v[k])
        })
    }else {
        throw "wrong";
    }
}
export var addItem = (ithis,_id,options)=>{
    console.log("model:: addItem ",ithis.collectionName,options)
    return new Promise((resolve,reject)=>{
        console.log(ithis)
        let strpre = ithis.PRE + moment().format('YYMMDD')
        let filter = {
            cnum: new RegExp(strpre, 'i')
        }
        let clt = model.getDb().collection(ithis.collectionName+'s')
        clt.find(filter,{sort:{_id:-1}}).toArray(function(err,docs){
            let item = {}
            Object.keys(ithis.keys)
            .map(k=>{
                let coltype = ithis.keys[k]
                item[k] =typeEnsure(coltype,options[k])
            })
            let cnum
            if(_.isEmpty(docs)){
                cnum = strpre+'0001'
            }else{
                let _mx = _.max(docs.map(d=>parseInt(d.cnum.slice(d.cnum.length - 4, d.cnum.length))))
                let t = '0000' + (_.isNumber(_mx)?  _mx + 1 : 1)
                cnum = strpre + t.slice(t.length - 4, t.length)
            }
            item.cnum = cnum
            item.updateAt = item.createAt = new Date()
            console.log('insert',{item})
            clt.insertOne(item,function(err,result){
                                    console.log({err,insertedId:result.insertedId})
                                    clt.findOne({_id:new ObjectID(result.insertedId),valid:true},function(err,doc){
                                        console.log({err,doc})
                                        resolve(JSON.parse(JSON.stringify(doc)))
                                    })
                            })
        })
    }).catch(e=>console.log(e))
}
export var deleteById = (ithis,_id)=>{
    console.log("model:: deleteById ",ithis.collectionName,_id)
    return new Promise((resolve,reject)=>{
        let clt = model.getDb().collection(ithis.collectionName+'s')
        clt.findOneAndUpdate({_id:new ObjectID(_id),valid:true},
                            {$set:{valid:false,updateAt:new Date()}},
                            function(err,result){
                                console.log({err,result})
                                resolve(JSON.parse(JSON.stringify({'delete':'ok'})))
                        })
    }).catch(e=>console.log(e))
}

export var fetch = (ithis,filter,orderBy,limit,startPos)=>{
    console.log("model:: fetch",ithis.collectionName,'fetch',filter,orderBy,limit,startPos)
    filter = filter || {}
    orderBy = orderBy || {createAt:-1}
    limit   = limit || 10
    startPos= startPos || 0
    filter.valid = true
    return new Promise((resolve,reject)=>{
        let clt = model.getDb().collection(ithis.collectionName+'s')
        let list
        clt.find(filter,{sort:{_id:-1},skip:startPos,limit:limit}).toArray(function(err,doc){
            console.log({err})
            list = JSON.parse(JSON.stringify(doc))
            clt.count(filter,function(err,count){
                resolve({list,count})
            })
        })
    }).catch(e=>console.log(e))
}

let to2fu = f=>f.slice(0,1).toUpperCase()+f.slice(1,100).toLowerCase()
export var _getThis = (_exports,keys,filename)=>{
    let ithis = {keys}
    ithis.collectionName = _exports.collectionName = path.basename(filename).replace('.js','')
    ithis.modelName = _exports.modelName = _exports.collectionName.split('_').map(v=>to2fu(v)).join('')
    Object.keys(exports)
    .filter(k => !k.startsWith('_') && !(k in _exports) && typeof(exports[k]) === 'function')
    .map(k => {
        // console.log(filename,'set ',k)
        _exports[k] = function(...args){
            return exports[k](_exports,...args)
        }
    })
}
