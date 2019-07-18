/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-18 10:37:53
 * @Description: interview 
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const interviewSchema = new Schema({
    id: String,
    type: String,
    level: Number,
    levelDesc: String,
    title: String,
    desc: String,
    data: Array
}, { collection: 'interviewList', versionKey: false });

module.exports = mongoose.model('interviewList', interviewSchema);
