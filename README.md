# spider-demo

node spider 数据demo，包括 MongoDB

## 链接

* [koa2-cors](https://www.npmjs.com/package/koa2-cors)
* [koa-bodyparser](// https://www.npmjs.com/package/koa-bodyparser)
* [mongoose](// https://github.com/Automattic/mongoose)
* [建立 mongose 链接](https://mongoosejs.com/docs/deprecations.html)

## 注意

* `mongose` 链接数据库
`DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.`
```js
mongoose.set('useCreateIndex', true);
```
