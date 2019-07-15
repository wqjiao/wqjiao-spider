/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-15 16:35:08
 * @Description: 腾讯云 开发手册 
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cloudSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    data: Object,
}, { collection: 'cloudAside', versionKey: false });

module.exports = mongoose.model('cloudAside', cloudSchema);
