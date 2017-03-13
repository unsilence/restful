"use strict"
import _ from 'underscore'
import * as Base from './_base'

/**
 * 国家表
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
export var PRE = 'COUNTRY';
Base._getThis(exports,keys,__filename);
