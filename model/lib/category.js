"use strict"
import _ from 'underscore'
import * as Base from './_base'

/**
 * 分类表
 */
export var keys = Object.assign({}, Base.keys, {
    name: {
        type: String,
        default: ''
    },
    parentId:{
        type: String,
        default: ''
    },
    attributes: {
        type: [{
            attributeID: String,
            value: String
        }],
        default:[]
    },
    note: {
        type: String,
        default: ''
    }
})
export var PRE = 'CATEGORY';
Base._getThis(exports, keys, __filename);
