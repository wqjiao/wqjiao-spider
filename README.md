# spider-demo

node spider 项目，爬取网站接口数据，包括 MongoDB

## 下载安装运行

```
git clone https://github.com/wqjiao/wqjiao-spider.git
yarn install
node app.js || npm start || npm run start:***
```

## 项目结构

```
|-- apis            接口文件
|-- data            爬取的 JSON 数据
|-- model           mongoose.Schema
|-- spider          爬取各类网站文件
|-- utils           通用工具类文件
|--|-- superagent   封装 superagent 方法
|--|-- writeFile    数据写入文件方法
|-- app.js          入口文件
|-- config.js       项目配置文件
```

## 相关链接

* [koa2-cors](https://www.npmjs.com/package/koa2-cors)
* [koa-bodyparser](// https://www.npmjs.com/package/koa-bodyparser)
* [mongoose](// https://github.com/Automattic/mongoose)
* [建立 mongose 链接](https://mongoosejs.com/docs/deprecations.html)

## 注意事项

* `mongose` 链接数据库
`DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.`
```js
mongoose.set('useCreateIndex', true);
```

* `module-alias` 设置路径别名

    - `yarn add module-alias`

    - 添加 `package.json` 配置
    ```json
    {
        "_moduleAliases": {
            "@root": ".",
            "@model": "model",
            "@apis": "apis",
            "@spider" : "spider",
            "@utils"  : "utils"
        }
    }
    ```

    - `app.js` 中引入依赖
    ```js
    require('module-alias/register');
    ```

    - 使用别名路径
    ```js
    const config = require('@root/config');
    const apis = require('@apis');
    ```