"use strict"
import _ from 'underscore'
import * as Base from './_base'


export var keys = Object.assign({}, Base.keys, {

  //---------------------------------spu 公共属性---------------
  productNum: { type: String, default: '' },    //商品编号
  skuNum: { type: String, default: '' },		//单品编号
  key: { type: String, default: '' },				//搜索关键字
  itype: { type: String, default: 'spu' },			//类别 sku 、spu 区别
  prefix: { type: String, default: '' },				//促销 前缀  最多四个中文
  name: { type: String, default: '' },          //商品名称
  notes: { type: String, default: '' },		//备注
  descriptions: { type: String, default: '' },		//商品描述
  categoryId: { type: String, default: '' },	      //商品分类
  hotC: { type: Number, default: 0 },	//热度
  attributes: {
    type: [{
      attributeID: String,
      value: String
    }], default: []
  },

  //---------------------------------sku ---------------
  images: { type: [String], default: [] },            //商品图片
  recommendIndex: { type: String, default: '' },            //推荐系数
  price: { type: Number, default: 0 },			  //售价
  count:{type: Number, default: 0 },          //数量
  isOnlines: {              //是否上架，默认是下架
    type: Boolean,
    default: false
  },
  seriesNumber: { type: String, default: '' },//货号
  advName: { type: String, default: '' },		//商品广告标题
  key: { type: [String], default: [] },	//关键字
  imodel: { type: String, default: '' },			  //型号

  isRecommend: { type: Boolean, default: false },     //是否推荐
  isOnline: {						//spu的状态
    type: Boolean,
    default: false
  },
  updateByperson: { type: String, default: '' },      //更新人姓名
  proViews: { type: Number, default: 0 },                 //访问量
  rank: { type: Number, default: 0 },        //排序
})
export var PRE = 'PRODUCT'
Base._getThis(exports, keys, __filename)
