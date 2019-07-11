// 所有抓取目标
const targets = {
    leetCode: {
        url: 'https://leetcode-cn.com/graphql',
        method: 'POST',
        options: {
            headers: {
                "origin":"https://leetcode-cn.com",
                "accept-encoding":"gzip, deflate, br",
                "accept-language":"zh-CN,zh;q=0.9",
                "cookie":"gr_user_id=2487c4bb-f84a-4c1b-ac55-2fb552b3da5b; grwng_uid=f37e7d14-41c1-4bed-bcad-2586570e03db; a2873925c34ecbd2_gr_last_sent_cs1=wqjiao; _ga=GA1.2.1355125338.1555895556; __atuvc=6%7C17; _uab_collina=155748055547826437746595; O5LM_2132_nofavfid=1; O5LM_2132_ulastactivity=0df7WhTKeyuq%2BL5hjS57zd7LEI3mvuDhbqzkHpzyBwtgj0moiSDA; __auc=55206e6316abaa35b9548f83259; O5LM_2132_smile=1D1; _gid=GA1.2.786757552.1562571311; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1562571311; a2873925c34ecbd2_gr_session_id=92a1c76a-b92d-4947-8a9e-a7344552f1bf; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=92a1c76a-b92d-4947-8a9e-a7344552f1bf; a2873925c34ecbd2_gr_session_id_92a1c76a-b92d-4947-8a9e-a7344552f1bf=true; csrftoken=6gRnh55M48wuo0RrbexyBW6dfiksoNITXAyIgUfIBCxKgTUKnahAmPJ48U3wdoUT; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMzMxMTMzIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlYzhkZjYyZWNmYmE3YjY4MjM4ZWVjMTZjOTYzY2U5MDk0NWY4YWVlIiwiaWQiOjMzMTEzMywiZW1haWwiOiIiLCJ1c2VybmFtZSI6IndxamlhbyIsInVzZXJfc2x1ZyI6IndxamlhbyIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLWNuLmNvbS9hbGl5dW4tbGMtdXBsb2FkL2RlZmF1bHRfYXZhdGFyLnBuZyIsInBob25lX3ZlcmlmaWVkIjp0cnVlLCJ0aW1lc3RhbXAiOiIyMDE5LTA3LTA4IDA3OjMzOjU4LjQ0NTUwMiswMDowMCIsIlJFTU9URV9BRERSIjoiMTcyLjIxLjkuMTU1IiwiSURFTlRJVFkiOiJjNjk1ZGZhYzBhMzNmNDgzMjRkMzQwZmQ5ZWUyMGYyYSIsIl9zZXNzaW9uX2V4cGlyeSI6MTIwOTYwMH0.kUAYFk5aT_c4nBN6jVHvAR--GVNjEYGe-tV9HSuungc; Hm_lpvt_fa218a3ff7179639febdb15e372f411c=1562573674; a2873925c34ecbd2_gr_cs1=wqjiao",
                "x-csrftoken":"6gRnh55M48wuo0RrbexyBW6dfiksoNITXAyIgUfIBCxKgTUKnahAmPJ48U3wdoUT",
                "pragma":"no-cache",
                "user-agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36",
                "content-type":"application/json",
                "accept":"*/*",
                "cache-control":"no-cache",
                "authority":"leetcode-cn.com",
                "referer":"https://leetcode-cn.com/problemset/all/"
            },
            json: {
                "operationName": "getQuestionTranslation",
                "variables": {},
                "query": "query getQuestionTranslation($lang: String) {\n  translations: allAppliedQuestionTranslations(lang: $lang) {\n    title\n    questionId\n    __typename\n  }\n}\n"
            }
        }
    },
    leetProblems: {
        url: 'https://leetcode-cn.com/api/problems/all/', // 全部
        // url: 'https://leetcode-cn.com/api/problems/algorithms/', // 算法
        // url: 'https://leetcode-cn.com/api/problems/database/', // 数据库
        // url: 'https://leetcode-cn.com/api/problems/shell/', // Shell
        method: 'GET',
        options: {
            headers: {
                'method': 'GET',
                "pragma":"no-cache",
                "cookie":"gr_user_id=2487c4bb-f84a-4c1b-ac55-2fb552b3da5b; grwng_uid=f37e7d14-41c1-4bed-bcad-2586570e03db; a2873925c34ecbd2_gr_last_sent_cs1=wqjiao; _ga=GA1.2.1355125338.1555895556; __atuvc=6%7C17; _uab_collina=155748055547826437746595; O5LM_2132_nofavfid=1; O5LM_2132_ulastactivity=0df7WhTKeyuq%2BL5hjS57zd7LEI3mvuDhbqzkHpzyBwtgj0moiSDA; __auc=55206e6316abaa35b9548f83259; O5LM_2132_smile=1D1; _gid=GA1.2.786757552.1562571311; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1562571311; a2873925c34ecbd2_gr_session_id=92a1c76a-b92d-4947-8a9e-a7344552f1bf; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=92a1c76a-b92d-4947-8a9e-a7344552f1bf; a2873925c34ecbd2_gr_session_id_92a1c76a-b92d-4947-8a9e-a7344552f1bf=true; csrftoken=6gRnh55M48wuo0RrbexyBW6dfiksoNITXAyIgUfIBCxKgTUKnahAmPJ48U3wdoUT; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMzMxMTMzIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlYzhkZjYyZWNmYmE3YjY4MjM4ZWVjMTZjOTYzY2U5MDk0NWY4YWVlIiwiaWQiOjMzMTEzMywiZW1haWwiOiIiLCJ1c2VybmFtZSI6IndxamlhbyIsInVzZXJfc2x1ZyI6IndxamlhbyIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLWNuLmNvbS9hbGl5dW4tbGMtdXBsb2FkL2RlZmF1bHRfYXZhdGFyLnBuZyIsInBob25lX3ZlcmlmaWVkIjp0cnVlLCJ0aW1lc3RhbXAiOiIyMDE5LTA3LTA4IDA3OjMzOjU4LjQ0NTUwMiswMDowMCIsIlJFTU9URV9BRERSIjoiMTcyLjIxLjkuMTU1IiwiSURFTlRJVFkiOiJjNjk1ZGZhYzBhMzNmNDgzMjRkMzQwZmQ5ZWUyMGYyYSIsIl9zZXNzaW9uX2V4cGlyeSI6MTIwOTYwMH0.kUAYFk5aT_c4nBN6jVHvAR--GVNjEYGe-tV9HSuungc; Hm_lpvt_fa218a3ff7179639febdb15e372f411c=1562573674; a2873925c34ecbd2_gr_cs1=wqjiao",
                "accept-encoding":"gzip, deflate, br",
                "accept-language":"zh-CN,zh;q=0.9",
                "user-agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36",
                "content-type":"application/json",
                "accept":"application/json, text/javascript, */*; q=0.01",
                "cache-control":"no-cache",
                "authority":"leetcode-cn.com",
                "x-requested-with":"XMLHttpRequest",
                "referer":"https://leetcode-cn.com/problemset/all/"
            }
        }
    },
    leetDesc: {
        url: 'https://leetcode-cn.com/graphql',
        method: 'POST',
        options: {
            headers: {
                "origin":"https://leetcode-cn.com",
                "accept-encoding":"gzip, deflate, br",
                "accept-language":"zh-CN,zh;q=0.9",
                "cookie":"gr_user_id=2487c4bb-f84a-4c1b-ac55-2fb552b3da5b; grwng_uid=f37e7d14-41c1-4bed-bcad-2586570e03db; a2873925c34ecbd2_gr_last_sent_cs1=wqjiao; _ga=GA1.2.1355125338.1555895556; __atuvc=6%7C17; _uab_collina=155748055547826437746595; O5LM_2132_nofavfid=1; O5LM_2132_ulastactivity=0df7WhTKeyuq%2BL5hjS57zd7LEI3mvuDhbqzkHpzyBwtgj0moiSDA; __auc=55206e6316abaa35b9548f83259; O5LM_2132_smile=1D1; csrftoken=6gRnh55M48wuo0RrbexyBW6dfiksoNITXAyIgUfIBCxKgTUKnahAmPJ48U3wdoUT; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMzMxMTMzIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlYzhkZjYyZWNmYmE3YjY4MjM4ZWVjMTZjOTYzY2U5MDk0NWY4YWVlIiwiaWQiOjMzMTEzMywiZW1haWwiOiIiLCJ1c2VybmFtZSI6IndxamlhbyIsInVzZXJfc2x1ZyI6IndxamlhbyIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLWNuLmNvbS9hbGl5dW4tbGMtdXBsb2FkL2RlZmF1bHRfYXZhdGFyLnBuZyIsInBob25lX3ZlcmlmaWVkIjp0cnVlLCJ0aW1lc3RhbXAiOiIyMDE5LTA3LTA4IDA3OjMzOjU4LjQ0NTUwMiswMDowMCIsIlJFTU9URV9BRERSIjoiMTcyLjIxLjkuMTU1IiwiSURFTlRJVFkiOiJjNjk1ZGZhYzBhMzNmNDgzMjRkMzQwZmQ5ZWUyMGYyYSIsIl9zZXNzaW9uX2V4cGlyeSI6MTIwOTYwMH0.kUAYFk5aT_c4nBN6jVHvAR--GVNjEYGe-tV9HSuungc; _gid=GA1.2.406317540.1562827564; a2873925c34ecbd2_gr_session_id=87cb510b-bf5e-4a89-be39-55826cc331e1; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=87cb510b-bf5e-4a89-be39-55826cc331e1; a2873925c34ecbd2_gr_session_id_87cb510b-bf5e-4a89-be39-55826cc331e1=true; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1562571311,1562827564,1562827583; a2873925c34ecbd2_gr_cs1=wqjiao; Hm_lpvt_fa218a3ff7179639febdb15e372f411c=1562828726; _gat_gtag_UA_131851415_1=1",
                "x-csrftoken":"6gRnh55M48wuo0RrbexyBW6dfiksoNITXAyIgUfIBCxKgTUKnahAmPJ48U3wdoUT",
                "pragma":"no-cache",
                "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                "content-type":"application/json",
                "accept":"*/*",
                "cache-control":"no-cache",
                "authority":"leetcode-cn.com",
                "referer":"https://leetcode-cn.com/classic/problems/valid-phone-numbers/description/"
            },
            json: {
                "operationName": "getQuestionDetail",
                "query": "query getQuestionDetail($titleSlug: String!) {↵  isCurrentUserAuthenticated↵  userStatus {↵    isPremium↵    __typename↵  }↵  question(titleSlug: $titleSlug) {↵    questionId↵    questionFrontendId↵    questionTitle↵    translatedTitle↵    questionTitleSlug↵    content↵    translatedContent↵    difficulty↵    stats↵    allowDiscuss↵    contributors {↵      username↵      profileUrl↵      __typename↵    }↵    similarQuestions↵    mysqlSchemas↵    randomQuestionUrl↵    sessionId↵    categoryTitle↵    submitUrl↵    interpretUrl↵    codeDefinition↵    sampleTestCase↵    enableTestMode↵    metaData↵    langToValidPlayground↵    enableRunCode↵    enableSubmit↵    judgerAvailable↵    infoVerified↵    envInfo↵    urlManager↵    article↵    questionDetailUrl↵    libraryUrl↵    topicTags {↵      name↵      slug↵      translatedName↵      __typename↵    }↵    __typename↵  }↵  subscribeUrl↵  loginUrl↵}↵",
                "variables": {
                    "titleSlug": "transpose-file"
                },
            }
        }
    },
};

module.exports = {
    targets,
    port: 3000,
    db: 'mongodb://localhost:27017/node-spider',
}
