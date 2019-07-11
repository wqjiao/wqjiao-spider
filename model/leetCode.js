/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by:   wqjiao 
 * @Last Modified time: 2019-07-11 18:45:37 
 * @Description: 力扣题库 
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const leetCodeSchema = new Schema({
    questionId: {
        type: String,
        unique: true,
        require: true
    },
    title: {
        type: String,
        required: true
    },
    typename: {
        type: String,
        required: true
    },
    // 等级：0 - 困难; 1 - 中等; 2 - 简单
    level: {
        type: Number,
        required: true
    },
    question_id: {
        type: Number,
        required: true
    },
    question_href: {
        type: String,
        required: true
    },
}, { collection: 'leetCode', versionKey: false });

module.exports = mongoose.model('leetCode', leetCodeSchema);
