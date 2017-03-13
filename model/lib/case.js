"use strict"
import _ from 'underscore'
import * as Base from './_base'
/**
 * 案例表 
 */
export var keys = Object.assign({},Base.keys,{
        headline: {
            type: String,    //标题
            default: ''
        },
        click_rate: {
            type: String,   //点击量
            default: ''
        },
        release_time: {
            type: String,     //发布时长
            default: ''
        },
        collocatImg: {
            type: String,    //配图
            default: ''
        },
        urladdress: {
            type : String,   //url地址
            default : ''
        },
        caseNum: {
            type: String,   //案例编号
            default: '' 
        },
        styleId:{
            type:String,       //风格
            default:''
        },               
        projectName: {
            type : String,   //项目名称
            default : ''
        },
        caseNote: {
            type : String,   //案例介绍
            default : ''
        },
        releaseTime:{
            type:String,     //发布时间
            default:''
        },
        endTime: {
            type: String,   //结束时间
            default: ''
        }
    })
export var PRE = 'BRAND'
Base._getThis(exports,keys,__filename)
