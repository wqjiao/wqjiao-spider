/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by:   wqjiao 
 * @Last Modified time: 2019-07-11 18:45:37 
 * @Description: 将数据写入文件
 */
const fs = require('fs')
const path = require('path')
const debug = require('debug')('writeFile');
const base = require('app-root-dir');

// 默认都写入 data 文件夹下的对应文件
module.exports = (filename, data, filepath) => {
    const writeData = JSON.stringify(data, '', '\t')
    const lastPath = path.join(filepath || path.resolve(base.get(), 'data'), filename)
    if (!fs.existsSync(path.join(filepath || path.resolve(base.get(), 'data')))) {
        fs.mkdirSync(path.join(filepath || path.resolve(base.get(), 'data')))
    }
    fs.writeFileSync(lastPath, writeData, function (err) {
        if (err) {
            debug(`Error: some error occured, the status is ${err.status}`)
        }
    })
}
