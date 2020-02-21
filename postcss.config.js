module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth: 375,  // 视窗的宽度，对应设计稿的宽度
      viewportHeight: 667,  // 视窗的高度，对应设计稿的高度
      unitPrecision: 5,   // 指定 px 转为视窗值的小数位数
      viewportUnit: 'vw',   // 指定转换的视窗单位
      selectorBlackList: [],  // 不需要转换的类
      minPixelValue: 1,   // 小于或等于 1px 不需要转为视窗单位
      mediaQuery: false,   // 媒体查询中转换px
      exclude: []         //数组元素必须是正则表达式
    }
  }
}