/**
 * @description 图片组件
 * @param {String} src 图片链接
 * @param {Boolean} round 是否显示为圆形
 * @param {Null} width 宽度，默认单位为px
 * @param {Null} height 高度，默认单位为px
 * @param {Null} radius 圆角大小，默认单位为px
 * @param {Boolean} previewImage 点击图片是否可以预览
 * @param {Boolean} lazyLoad 是否懒加载
 * @param {Boolean} useErrorSlot 是否使用 error 插槽
 * @param {Boolean} useLoadingSlot 是否使用 loading 插槽
 * @param {Boolean} showMenuByLongpress 是否开启长按图片显示识别小程序码菜单
 * @param {String} [fit='scaleToFill'] 图片填充模式
 * @param {Boolean} [showError=true] 是否展示图片加载失败提示
 * @param {Boolean} [showLoading=true] 是否展示图片加载中提示
 * @param {String} [loadingSrc='./icon-imggood.png'] 加载中图片路径
 * @param {String} [errorSrc='./icon-imgbad.png'] 加载失败图片路径
 * @param {String} errorText 加载失败的文字提示
 * 
 * 点击加载失败图片时触发
 * @method onLoadFail
 * @param {Object} event 回调参数
 * 
 */

import { addUnit, isDef } from '../utils'

const LOADING_SRC_MAP = {
  gif: './loading.gif',
  img: './icon-imggood.png',
  avatar: './icon-defavatar.png'
}

const ERROR_SRC_MAP = {
  img: './icon-imgbad.png',
  avatar: './icon-defavatar.png'
}

Component({

  externalClasses: ['custom-class', 'loading-class', 'error-class', 'image-class'],

  observers: {
    'src': function(src) {
      if (src === this.data.imgSrc) return false
      let previewList = []
      previewList.push(src)
      this.setData({
        error: false,
        loading: true,
        imgSrc: src,
        previewList
      })
    },
    'width': function() {
      this.setStyle()
    },
    'height': function() {
      this.setStyle()
    },
    'radius': function() {
      this.setStyle()
    },
    'loadingType': function(loadingType) {
      this.setData({
        loadingImgSrc: LOADING_SRC_MAP[loadingType]
      })
    },
    'loadingSrc': function(loadingSrc) {
      this.setData({
        loadingImgSrc: loadingSrc
      })
    },
    'errorType': function(errorType) {
      this.setData({
        errorImgSrc: ERROR_SRC_MAP[errorType]
      })
    },
    'errorSrc': function(errorSrc) {
      this.setData({
        errorImgSrc: errorSrc
      })
    }
  },

  properties: {
    src: String,
    round: Boolean,
    width: null,
    height: null,
    radius: null,
    previewImage: Boolean,
    lazyLoad: Boolean,
    useErrorSlot: Boolean,
    useLoadingSlot: Boolean,
    showMenuByLongpress: Boolean,
    fit: {
      type: String,
      value: 'scaleToFill'
    },
    showError: {
      type: Boolean,
      value: true,
    },
    showLoading: {
      type: Boolean,
      value: true,
    },
    loadingType: {
      type: 'String',
      value: 'img'
    },
    loadingSrc: {
      type: String,
      value: ''
    },
    errorType: {
      type: 'String',
      value: 'img'
    },
    errorSrc: {
      type: String,
      value: ''
    },
    errorText: String
  },
  
  data: {
    imgSrc: '',
    loadingImgSrc: './icon-imggood.png',
    errorImgSrc: './icon-imgbad.png',
    error: false,
    loading: true,
    viewStyle: '',
    previewList: []
  },

  ready() {
    this.setStyle()
  },

  methods: {
    setStyle() { // 设置外层样式
      const { width, height, radius } = this.data;
      let style = '';
      if (isDef(width)) {
        style += `width: ${addUnit(width)};`;
      }
      if (isDef(height)) {
        style += `height: ${addUnit(height)};`;
      }
      if (isDef(radius)) {
        style += 'overflow: hidden;';
        style += `border-radius: ${addUnit(radius)};`;
      }
      this.setData({ viewStyle: style });
    },
    onLoad(event) {
      let { fit, viewStyle } = this.data
      if (fit == 'widthFix') { // 防止图片显示不全
        this.setData({ viewStyle: `height: auto;${viewStyle}`})
      }
      this.setData({
        loading: false,
      });
      this.triggerEvent('load', event.detail);
    },
    onError(event) {
      this.setData({
        loading: false,
        error: true,
      });
      this.triggerEvent	('error', event.detail);
    },
    onClick(event) {
      let { previewImage, error } = this.data
      if (previewImage&&!error) {
        this._previewImage();
        this.triggerEvent('click', event.detail);
      }
    },
    _previewImage() {
      wx.previewImage({
        current: this.data.previewList[0],
        urls: this.data.previewList
      })
    },
    onLoadFail(event) {
      this.setData({
        loading: true,
        error: false,
        imgSrc: this.data.imgSrc,
      })
      this.triggerEvent('loadfail', event.detail)
    }
  }

})