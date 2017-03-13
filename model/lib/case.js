"use strict"
import _ from 'underscore'
import * as Base from './_base'
/**
 * ������ 
 */
export var keys = Object.assign({},Base.keys,{
        headline: {
            type: String,    //����
            default: ''
        },
        click_rate: {
            type: String,   //�����
            default: ''
        },
        release_time: {
            type: String,     //����ʱ��
            default: ''
        },
        collocatImg: {
            type: String,    //��ͼ
            default: ''
        },
        urladdress: {
            type : String,   //url��ַ
            default : ''
        },
        caseNum: {
            type: String,   //�������
            default: '' 
        },
        styleId:{
            type:String,       //���
            default:''
        },               
        projectName: {
            type : String,   //��Ŀ����
            default : ''
        },
        caseNote: {
            type : String,   //��������
            default : ''
        },
        releaseTime:{
            type:String,     //����ʱ��
            default:''
        },
        endTime: {
            type: String,   //����ʱ��
            default: ''
        }
    })
export var PRE = 'BRAND'
Base._getThis(exports,keys,__filename)
