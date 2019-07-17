/*
 * @Author: wqjiao 
 * @Date: 2019-07-11 18:45:37 
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-16 18:08:44
 * @Description: interview 
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const interviewSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    type: String,
}, { collection: 'interviewNav', versionKey: false });

module.exports = mongoose.model('interviewNav', interviewSchema);
