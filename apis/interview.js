/*
 * @Author: wqjiao
 * @Date: 2019-03-25 17:57:51
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-17 18:24:33
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

// 更新数据库
function onUpdate(query, item) {
    return new Promise(async (resolve, reject) => {
        await leetCodeSchema.updateOne(query, item)
            .then((data) => {
                console.log(`更新数据库成功 ${item.questionId}`);
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// 提交答案
router.post('/interview/answer', async (ctx, next) => {
    const req = ctx.request.body;
    let item;

    await interviewList.findOne(req)
        .then(async (res) => {
            if (res) {
                item = {
                    ...res,
                    data: [...res.data, {name: '111', content: req.content}]
                }
                await interviewList.updateOne(query, item)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });;
            }
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: '提交成功',
                data: {}
            }
        })
        .catch((err) => {
            reject(err);
        });
});

module.exports = router;
