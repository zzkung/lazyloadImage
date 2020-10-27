# lazyloadImage

[![ECMAScript version](https://img.shields.io/badge/ECMAScript-6.0-orange)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Language_Resources)
[![license](https://img.shields.io/github/license/zzkung/lazyloadImage)](https://github.com/zzkung/lazyloadImage/blob/main/LICENSE)
[![languages](https://img.shields.io/github/languages/top/zzkung/lazyloadImage)]()

微信小程序图片懒加载组件

## 演示
<video id="video" width="350" autoplay buffered loop preload="auto" poster="https://blog.zzkung.com/AppImg/lazyloadImage.png">
  <source id="mp4" src="https://blog.zzkung.com/AppImg/lazyloadimage.mp4" type="video/mp4">
</video>

## Usage

### 引入

需要全局调用的在 app.json 中引入组件，单个文件调用的在 index.json 中引入组件

```json
{
  "usingComponents": {
    "cu-image": "/components/image/index"
  }
}
```

#### 代码演示

##### 基础调用

在 wxml 文件中，创建 `cu-image`，并定义好 `src`

```html
<cu-image src="https://cdn.pixabay.com/photo/2020/10/09/08/15/dragonfly-5639879__340.jpg"/>
```

##### 自定义调用

在 wxml 文件中，创建 `cu-image`，并定义好 `src`, `width`, `height`, `lazy-load` 等等的参数

```html
<cu-image src="https://cdn.pixabay.com/photo/2020/10/09/08/15/dragonfly-5639879__340.jpg" width="240rpx" height="200rpx" lazy-load />
```


## API

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| ---- | --- | ------ | --- | ---- |
| src | String | - | 是 | 图片资源地址 |
| fit | String | scaleToFill | 否 | 图片填充模式 |
| width | String `|` Number | 320px | 否 | 宽度，默认单位为px |
| height | String `|` Number | 240px | 否 | 高度，默认单位为px |
| round | Boolean | false | 否 | 是否显示为圆形 |
| radius | String `|` Number | - | 否 | 圆角大小，默认单位为px |
| preview-image | Boolean | false | 否 | 点击图片是否可以预览 |
| lazy-load | Boolean | false | 否 | 是否懒加载 |
| use-error-slot | Boolean | false | 否 | 是否使用 error 插槽 |
| use-loading-slot | Boolean | false | 否 | 是否使用 loading 插槽 |
| show-loading | Boolean | true | 否 | 是否展示图片加载中提示 |
| show-error | Boolean | true | 否 | 是否展示图片加载失败提示 |
| loading-src | String | ./icon-imggood.png | 否 | 加载中图片路径 |
| error-src | String | ./icon-imgbad.png | 否 | 加载失败图片路径 |
| show-menu-by-longpress | Boolean | false | 否 | 是否开启长按图片显示识别小程序码菜单 |

## Events

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| ---- | --- | ------ | --- | ---- |
| bindload | eventhandle | - | 否 | 图片加载完毕时触发，event: Event |
| binderror | eventhandle | - | 否 | 图片加载失败时触发，event: Event |
| bindclick | eventhandle | - | 否 | 点击图片时触发，event: Event |
| bindloadfail | eventhandle | - | 否 | 点击加载失败的图片时触发，event: Event |

## Slots

| 名称 | 说明 |
| ---- | ---- |
| loading | 自定义加载中的提示内容 |
| error | 自定义加载失败时的提示内容 |

## 外部样式类

| 类名 | 说明 |
| ---- | ---- |
| custom-class | 根节点样式类 |
| image-class | 图片样式类 |
| loading-class | loading 样式类 |
| error-class | error 样式类 |
