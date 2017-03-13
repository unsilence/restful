"use strict"
import _ from 'underscore'
import * as Base from './_base'

/**
 * 属性表
 */
export var keys = Object.assign({},Base.keys,{
        name: {
            type: String,
            default: ''
        },
        categoryId: {
            type: [String],
            default: ''
        },
        type: {
            type: String,
            default: ''
        },//分类关键分类、销售属性、其他属性
        etype: {
            type: String,
            default: ''
        },//继承分类
        stype: {
            type: String,
            default: ''
        },//1运营输入、2suk配图、不输入
        canExtends: {
            type: Boolean,
            default: false
        },
        isNull: {
            type: Boolean,
            default: false
        },
        svalue: {
            type: [String],
            default: []
        },
        size:{
            type:[String],
            default:[]
        }
})
export var PRE = 'ATTRIBUTE'
Base._getThis(exports,keys,__filename)
