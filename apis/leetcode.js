/*
 * @Author: wqjiao
 * @Date: 2019-03-25 17:57:51
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-08-16 15:15:18
 * @Description: 力扣题库数据接口
 */
const router = require('koa-router')();
const leetCode = require('@model/leetCode');

router.get('/leetCode', async (ctx, next) => {
    const req = ctx.request.query;

    if (req.title) {
        req['title'] = new RegExp(req.title);
    }

    const examples = await leetCode.find(req, { _id: 0 });
    console.log(req, examples)
  
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

router.post('/leetCode/search', async (ctx, next) => {
    const query = ctx.request.body;

    if (query.title) {
        query['title'] = new RegExp(query.title);
    }

    await leetCode.find(query, { _id: 0 })
        .then(async (res) => {
            if (res) {
                console.log(query, res)
            }
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: '提交成功',
                data: {
                    total: res.length,
                    list: res,
                }
            }
        })
        .catch((err) => {
            console.log('err', err);
        });
});

module.exports = router;
