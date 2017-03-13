"use strict"
import _ from 'underscore'
import * as Base from './_base'

export var keys = Object.assign({},Base.keys,{
        userName: {
            type: String,
            default: ''
        },
        data: {
            type: String,
            default: ''
        }
    })
export var PRE = 'SN'
Base._getThis(exports,keys,__filename)
