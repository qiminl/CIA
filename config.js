/**
 *
 * Created by Feng on 14-11-14 11:43 AM
 *
 */


var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var templatePath = path.normalize(__dirname + '/../app/mailer/templates');
var notifier = {
    service: 'postmark',
    APN: false,
    email: false, // true
    actions: ['comment'],
    tplPath: templatePath,
    key: 'POSTMARK_KEY',
    parseAppId: 'PARSE_APP_ID',
    parseApiKey: 'PARSE_MASTER_KEY'
};

module.exports = {
    development: {
        db: 'mongodb://barn:barn123123@ds059661.mongolab.com:59661/mobarn',
        root: rootPath,
        notifier: notifier,
        tasksRemote: {url: 'https://foo:bar@adx-lighthouse2b.herokuapp.com/api/1.0/tasks', method: 'PATCH'}
    },
    production: {
        //db: 'mongodb://sarah:ss123@dogen.mongohq.com:10024/app31103031',
        db: 'mongodb://heroku_app37192256:qojaj8lvtq1626lth9i26d6ukl@ds037252.mongolab.com:37252/heroku_app37192256',
        root: rootPath,
        notifier: notifier,
        tasksRemote: {url: 'https://foo:bar@adx-lighthouse2.herokuapp.com/api/1.0/tasks', method: 'PATCH'}
    },
    local: {
        db: 'mongodb://test:test@localhost:27017/mobarn',
        root: rootPath,
        notifier: notifier,
        tasksRemote: {url: 'http://foo:bar@localhost:3000/api/1.0/tasks', method: 'PATCH'}
    },
    TIMEZONE:'America/Vancouver'
};

