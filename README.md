# fast-cloud管理系统前端项目

## 项目介绍
**fast-cloud-fronend**是**fast-cloud**微服务项目的前端项目，基于 [Vue](https://cn.vuejs.org/) 和 [Element](https://element.eleme.cn/#/zh-CN) 搭建。

## 技术选型
- vue
- vue router
- vuex
- axio 
- element-ui
- echarts
- js-cookie
- vue-admin-template

## 本地运行
```
# 克隆项目
git clone https://github.com/DreamChan/fast-cloud-frontend.git

# 进入项目目录
cd fast-cloud-frontend

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 本地开发环境启动项目
npm run dev
```

在浏览器打开`http://127.0.0.1:3000`, 即可访问后台管理系统页面
注意: 此项目为前端项目，需要与后台项目接口配和使用，若不想搭建后台环境，需要将`.env.development`文件中的`VUE_APP_BASE_API`和`VUE_APP_OSS_API`的值修改为线上地址, 修改成`.env.production`文件中的值即可。


## 项目发布
```
# 打包项目，发布到正式环境
npm run build:prod

# 打包项目，发布到测试环境
npm run build:staging
```