/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-15 17:09:48
 * @Description: 入口文件
 */
require('module-alias/register');
const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const debug = require('debug');

const config = require('@root/config');
const apis = require('@apis');
const spiders = require('@spider');

const app = new Koa();
const appName = process.env.APP_NAME;

// 建立 MongoDB 链接
mongoose.set('useCreateIndex', true);
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
});

// 爬取数据
if (spiders[appName]) {
    // 按类爬取数据
    spiders[appName]();
} else {
    // 爬取全部网站
    Object.values(spiders).map(spider => spider());
}

app.use(cors());
app.use(bodyParser());

// 注入 api
Object.values(apis).forEach(api => {
    app.use(api.routes()).use(api.allowedMethods());
});

// 启动服务监听指定端口
app.listen(config.port, () => {
    console.log('Your App is running at http://localhost:%s', config.port);
});
// HTTP 和 HTTPS 或多个地址,同时启动多个地址服务
// http.createServer(app.callback()).listen(config.port, () => {
//     console.log('Your App is running at http://localhost:%s', config.port);
// });

debug('start');
