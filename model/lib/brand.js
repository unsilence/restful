"use strict"
import _ from 'underscore'
import * as Base from './_base'
/**
 * 品牌表 
 * name 名字
 * name_en 英文名字
 * shortcut 品牌缩写
 * brandId 品牌Id
 * categoryId 分类id
 */
export var keys = Object.assign({},Base.keys,{
        name: {
            type: String,
            default: ''
        },
        name_en: {
            type: String,
            default: ''
        },
        shortcut: {
            type: String,
            default: ''
        },
        brandId: {
            type: String,
            default: ''
        },
        categoryId: {
            type : String, 
            default : ''
        },
        describe:{
            type:String,
            default:''
        },
        logo: {
            type: String,
            default: ''
        },
        definition:{
            type:String,
            default:''
        },
        note: {
            type: String,
            default: ''
        },
        countryId: {
            type : String, 
            default : ''
        },
        firstletter:{
            type : String,    //品牌首字母
            default : ''
        },
        key: {
            type: [String],
            default: []
        }
    })
export var PRE = 'BRAND'
Base._getThis(exports,keys,__filename)
