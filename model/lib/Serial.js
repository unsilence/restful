"use strict"
import _ from 'underscore'
import * as Base from './_base'

/**
 * 色系表
 */
export var keys = Object.assign({},Base.keys,{
        name: {
            type: String,
            default: ''
        },
        note: {
            type: String,
            default: ''
        }
    })
export var PRE = 'SERIAL';
Base._getThis(exports,keys,__filename);