"use strict"
import _ from 'underscore'
import * as Base from './_base'

/**
 * 单品
 */
export var keys = Object.assign({},Base.keys,{
        name: {
            type: String,
            default: ''
        },
        skuNum:{
            type: String,
            default: ''
        },
        status:{
            type: String,
            default: ''
        },//单品状态
        note: {
            type: String,
            default: ''
        }//备注
        ,
        doorCount:{
            type: String,
            default: ''
        },//上门次数
        modifyCount:{
            type: String,
            default: ''
        }//修改次数
        ,
        store:{
            type: String,
            default: ''
        }//仓库位置
    })
export var PRE = 'GOODS';
Base._getThis(exports,keys,__filename);
