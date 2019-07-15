/*
 * @Author: wqjiao
 * @Date: 2019-03-25 17:57:51
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-15 16:46:02
 * @Description: 腾讯云数据接口
 */
const router = require('koa-router')();
const cloud = require('@model/cloud');

router.get('/cloud/aside', async (ctx, next) => {
    const req = ctx.request.query;
    const examples = await cloud.find(req, { _id: 0 });
    console.log(req, examples)
  
    ctx.status = 200;
    ctx.body = {
        msg: 'get request!!',
        data: {
            query: req,
            name: examples[0].name,
            data: examples[0].data
        }
    }
});

module.exports = router;
