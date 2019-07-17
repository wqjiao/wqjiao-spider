/*
 * @Author: wqjiao
 * @Date: 2019-03-25 17:57:51
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-17 17:35:32
 * @Description: interview
 */
const router = require('koa-router')();
const interview = require('@model/interview');
const interviewList = require('@model/interviewList');

// 获取头部导航
router.get('/interview/nav', async (ctx, next) => {
    const req = ctx.request.query;
    const examples = await interview.find(req, { _id: 0 });
  
    ctx.status = 200;
    ctx.body = {
        code: 200,
        msg: 'success',
        data: {
            total: examples.length,
            type: 'nav',
            data: examples
        }
    }
});

// 获取列表数据
router.get('/interview/list', async (ctx, next) => {
    const req = ctx.request.query;
    const examples = await interviewList.find(req, { _id: 0 });
  
    ctx.status = 200;
    ctx.body = {
        code: 200,
        msg: 'success',
        data: {
          total: examples.length,
          type: 'list',
          data: examples
        }
    }
});

// 获取详情数据
router.post('/interview/detail', async (ctx, next) => {
    const req = ctx.request.body;
    console.log("**", req)
    const examples = await interviewList.find(req, { _id: 0 });
  
    ctx.status = 200;
    ctx.body = {
        code: 200,
        msg: 'success',
        data: {
          type: 'detail',
          data: examples[0],
          total: examples[0].data.length
        }
    }
});

module.exports = router;
