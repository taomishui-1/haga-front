# haga-front
## cnpm i 安装依赖 
# 会报错 Inline JavaScript is not enabled. Is it set in your options? 解决方法：修改 less-load/dist/index.js文件：加上options.javascriptEnabled = true，然后重新启动项目即可。
# function lessLoader(source) {
#  const loaderContext = this;
#  const options = (0, _getOptions.default)(loaderContext);
#  options.javascriptEnabled = true;
#  const done = loaderContext.async();
# const isSync = typeof done !== 'function';
#  ……

## cnpm run dev 启动
## 