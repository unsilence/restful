"use strict"
import _ from 'underscore'
import * as Base from './_base'

export var keys = Object.assign({}, Base.keys, {
    skuNumList: {
        type: [{ skuNum: String, count: Number, price: Number }],
        default: []
    }, //sku num
    totalPrice: { type: String, default: '' },	//总价格
    userId: { type: String, default: '' },	//用户ID
    state: { type: String, default: '' },	//订单状态
    note: { type: String, default: '' },	//备注信息
    orderNum: { type: String, default: '' },	//订单号
    projectInfoId: { type: String, default: '' },	//项目信息
})
export var PRE = 'ORDER'
Base._getThis(exports, keys, __filename)
