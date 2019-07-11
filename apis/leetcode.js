/*
 * @Author: wqjiao
 * @Date: 2019-03-25 17:57:51
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-04 10:52:08
 * @Description: 力扣题库数据接口
 */
const router = require('koa-router')();
const leetCode = require('../model/leetCode');

router.get('/leetCode', async (ctx, next) => {
    const req = ctx.request.query;
    const examples = await leetCode.find(req, { _id: 0 });
  
    ctx.status = 200;
    ctx.body = {
        msg: 'get request!!',
        data: {
            query: req,
            total: examples.length,
            list: examples,
        }
    }
});

module.exports = router;
