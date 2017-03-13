"use strict"
import _ from 'underscore'
import * as Base from './_base'

/**
 * 地址表
 */
export var keys = Object.assign({}, Base.keys, {
    name: {
        type: String,
        default: ''
    },
    designerName: {
        type: String,
        default: ''
    },
    designerPhone: {
        type: String,
        default: ''
    },
    designerDepartment: {
        type: String,
        default: ''
    },
    address:{
        type: String,
        default: ''
    },
    doorTime:{
        type: String,
        default: ''
    },
    days:{
         type: String,
        default: ''
    },
    area:{
        type:String,
        default:''
    },
    schedule:{
        type:String,
        default:''
    },
    note: {
        type: String,
        default: ''
    },
    userId:{
        type:String,
        default:''
    }
})
export var PRE = 'PROJECTINFO';
Base._getThis(exports, keys, __filename);
