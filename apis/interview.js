/*
 * @Author: wqjiao
 * @Date: 2019-03-25 17:57:51
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-18 15:10:57
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

// 保存数据库
function onSave(item) {
    return new Promise(async (resolve, reject) => {
        await new interviewList(item)
            .save()
            .then((data) => {
                console.log(`存入数据库成功`);
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    });
}

// 更新数据库
function onUpdate(query, item) {
    return new Promise(async (resolve, reject) => {
        await interviewList.updateOne(query, item)
            .then((data) => {
                console.log(`更新数据库成功`);
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
    const params = {type: req.type, id: req.id};

    await interviewList.findOne(params)
        .then(async (res) => {
            if (res) {
                res.data.push({name: '111', content: req.content});
                await onUpdate(params, res);
            }
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: '提交成功',
                data: {}
            }
        })
        .catch((err) => {
            console.log('err', err);
        });
});

// 新增题目
router.post('/interview/add', async (ctx, next) => {
    const req = ctx.request.body;
    const examples = await interviewList.find({type: req.type}, { _id: 0 });
    const params = {
        id: examples.length + 1,
        type: req.type,
        title: req.title,
        level: req.level.value,
        levelDesc: req.level.label,
        desc: req.desc,
        data: req.content ? [{
            id: 0,
            name: '',
            content: req.content
        }] : []
    };

    console.log('***', params)

    await onSave(params)
        .then(() => {
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: '新增成功',
                data: {}
            }
        })
        .catch((err) => {
            console.log('err', err);
        });
});

module.exports = router;
