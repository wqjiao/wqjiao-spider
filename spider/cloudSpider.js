/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-15 16:35:38
 * @Description: 腾讯云开发手册 爬取数据方法 
 */
const { get } = require('lodash');

const writeFile = require('@utils/writeFile');
const superAgent = require('@utils/superagent');
const config = require('@root/config');
const cloudSchema = require('@model/cloud');

const { cloudAside } = config.targets;

// 保存数据库
function onSave(item) {
    return new Promise(async (resolve, reject) => {
        await new cloudSchema(item)
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
        await cloudSchema.updateOne(query, item)
            .then((data) => {
                console.log(`更新数据库成功`);
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// 查找数据库
function getFetch(query, item) {
    return new Promise(async (resolve, reject) => {
        await cloudSchema.findOne(query)
            .then(async (res) => {
                if (res) {
                    await onUpdate(query, item);
                } else {
                    await onSave(item);
                }
            })
            .catch((err) => {
                reject(err);
            });
        resolve('查询');
    })
}

const cloudSpider = async (ctx) => {
    // POST
    const cloud = await superAgent(cloudAside.url, {
        method: cloudAside.method,
        options: cloudAside.options
    });
    // 数据 && url
    const cloudData = get(cloud, 'data', {});

    // 存入数据库
    getFetch({name: 'aside'}, {name: 'aside', data: cloudData});

    // 写入文件
    writeFile('cloud.json', { name: 'aside', data: cloudData });
}

module.exports = cloudSpider;
