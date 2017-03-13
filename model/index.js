"use strict"
const fs = require('fs')
const path = require('path')

function walk(p) {
    var dirList = fs.readdirSync(p);
    dirList.forEach(function(item) {
        var _p = path.join(p, item)
        if (fs.statSync(_p).isDirectory()) {
            walk(_p);
        } else {
            fileList.push(_p);
        }
    });
}
let fileList = []
walk(path.join(__dirname, 'lib'))
let _dict = {}
let namelist = fileList.map(v=>path.basename(v))
    .filter(v=>!v.startsWith('_')).map(v=>{
    var d = require('./lib/'+v)
    console.log('model::',d.modelName,d)
    _dict[d.modelName] = d
})

let _db
_dict.getDb = ()=>{
    return _db
}
let MongoClient = _dict.MongoClient = require('mongodb').MongoClient

_dict.connect = mstr => {
    MongoClient.connect(mstr,function(err,db){
        _db = db
        console.log('connect ok',mstr,err)
    })
}
export default _dict
