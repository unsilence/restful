"use strict"
import _ from 'underscore'
import * as Base from './_base'

/**
 * 颜色表
 */
export var keys = Object.assign({},Base.keys,{
        name: {
            type: String,      //颜色名称
            default: ''
        },
        seriesId:{
            type: String,      //对应的色系
            default: ''
        },
        categoryId:{
            type: String,
            default: ''
        },
        note: {
            type: String,
            default: ''
        }
    })
export var PRE = 'COLOR';
Base._getThis(exports,keys,__filename);
