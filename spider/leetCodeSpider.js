/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-12 09:35:00
 * @Description: 力扣爬取数据方法 
 */
const { get } = require('lodash');

const writeFile = require('@utils/writeFile');
const superAgent = require('@utils/superagent');
const config = require('@root/config');
const leetCodeSchema = require('@model/leetCode');

const { leetCode, leetProblems, leetDesc } = config.targets;

// 保存数据库
function onSave(item) {
    return new Promise(async (resolve, reject) => {
        await new leetCodeSchema(item)
            .save()
            .then((data) => {
                console.log(`存入数据库成功 ${item.questionId}`);
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

// 查找数据库
function getFetch(query, item) {
    return new Promise(async (resolve, reject) => {
        await leetCodeSchema.findOne(query)
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

// 爬取 LeetCode 方法
const leetCodeSpider = async (ctx) => {
    // POST
    const graphql = await superAgent(leetCode.url, {
        method: leetCode.method,
        options: leetCode.options
    });
    // GET
    const problems = await superAgent(leetProblems.url, leetProblems);
    // 数据 && url
    const graphqlData = get(graphql, 'data.translations', {});
    const problemsData = get(problems, 'stat_status_pairs', {});
    // 合并后的数据
    let data = [];

    graphqlData.forEach((item) => {
        problemsData.forEach((i) => {
            if (item.questionId === (i.stat.question_id + '')) {
                item = {
                    questionId: item.questionId,
                    title: item.title,
                    typename: item.__typename,
                    level: i.difficulty.level,
                    question_id: i.stat.question_id,
                    question_href: i.stat.question__title_slug,
                }
                
                data.push(item); // 写入文件做准备
                getFetch({questionId: item.questionId}, item); // 存入数据库
            }
        });
    });

    // 写入文件
    writeFile('leetCode.json', { total: data.length, data });
}

module.exports = leetCodeSpider;
