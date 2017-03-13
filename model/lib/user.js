"use strict"
import _ from 'underscore'
import * as Base from './_base'


export var keys = Object.assign({},Base.keys,{
        name: {
            type: String,
            default: ''
        },
        password: {
            type: String,
            default: ''
        },
        phone: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        city:{
            type: String,
            default: ''
        },
        note: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            enum: ['enable', 'disabled'],
            default: 'enable'
        }
    })
export var PRE = 'US'
Base._getThis(exports,keys,__filename)
