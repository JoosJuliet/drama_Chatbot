



/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
const request = require('request');
exports.drama = function drama(req, res) {

    if( req.method == 'GET' ){
        if (req.query['hub.mode'] === 'subscribe' ){
            console.log("Webhook 승인");
            res.status(200).send(req.query['hub.challenge']);
        }else{
            res.status(403).send("잘못된 경로");
        }
    }else if( req.method == 'POST' ){
        var sender = req.body.entry[ 0 ].messaging[ 0 ].sender.id;
        console.log( "ID:"+ sender );

        if( req.body.entry[ 0 ].messaging[ 0 ].postback && req.body.entry[ 0 ].messaging[ 0 ].postback.payload ){
            console.log( req.body.entry[ 0 ].messaging[ 0 ].postback.payload );

            request({
                uri: 'https://graph.facebook.com/v2.6/me/messages',
                qs: { access_token: "" },
                method: 'POST',
                json: {
                    "recipient":{
                        "id":sender
                    },
                    "message":{
                        "attachment":{
                            "type":"template",
                            "payload":{
                                "template_type":"generic",
                                "elements":[{
                                    "title":"안녕하세요. 드라마봇입니다. 어떤 드라마정보를 원하세요.",
                                    "image_url":"https://storage.googleapis.com/temp-drama/flow01img.jpg",
                                }]
                            }
                        }
                    }
                }
            }, function (error, response, body) {
            });
        }else if( req.body.entry[ 0 ].messaging[ 0 ].message && req.body.entry[ 0 ].messaging[ 0 ].message.text ){
            var text = req.body.entry[ 0 ].messaging[ 0 ].message.text;
            console.log( req.body.entry[ 0 ].messaging[ 0 ].message.text );

            if( text.indexOf("도깨비") > -1 ){
                request({
                    uri: 'https://graph.facebook.com/v2.6/me/messages',
                    qs: { access_token: "" },
                    method: 'POST',
                    json: {
                        "recipient":{
                            "id":sender
                        },
                        "message":{
                            "text":"도깨비 15화 하이라이트 메이킹까지~ 지금 확인하세요."
                        }
                    }
                }, function (error, response, body) {
                    request({
                        uri: 'https://graph.facebook.com/v2.6/me/messages',
                        qs: { access_token: "" },
                        method: 'POST',
                        json: {
                            "recipient":{
                                "id":sender
                            },
                            "message":{
                                "attachment":{
                                    "type":"template",
                                    "payload":{
                                        "template_type":"generic",
                                        "elements":[{
                                            "title":"15화 #1",
                                            "subtitle":"김고은, 공유와 결국 재회",
                                            "image_url":"https://storage.googleapis.com/temp-drama/flow02slide01img.jpg",
                                            "buttons":[
                                                {
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"이전화 하이라이트"
                                                },{
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"주인공의 다른 영상"
                                                },{
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"15화 다시보기"
                                                }
                                            ]
                                        },{
                                            "title":"15화 #2",
                                            "subtitle":"기억 되찾은 김고은, 공유와 애틋한 재회 키스",
                                            "image_url":"https://storage.googleapis.com/temp-drama/flow02slide02img.jpg",
                                            "buttons":[
                                                {
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"이전화 하이라이트"
                                                },{
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"주인공의 다른 영상"
                                                },{
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"15화 다시보기"
                                                }
                                            ]
                                        },{
                                            "title":"15화 #3",
                                            "subtitle":"[메이킹] 김고은의 엉뚱하 애드립, 놀란 공유는 어떠한 대응을?",
                                            "image_url":"https://storage.googleapis.com/temp-drama/flow02slide03img.jpg",
                                            "buttons":[
                                                {
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"이전화 하이라이트"
                                                },{
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"주인공의 다른 영상"
                                                },{
                                                    "type":"web_url",
                                                    "url":"https://petersfancybrownhats.com",
                                                    "title":"15화 다시보기"
                                                }
                                            ]
                                        }]
                                    }
                                }
                            }
                        }
                    }, function (error, response, body) {
                    });
                });
            }else if( text.indexOf("16화") > -1 ){


                request({
                    uri: 'https://graph.facebook.com/v2.6/me/messages',
                    qs: { access_token: "" },
                    method: 'POST',
                    json: {
                        "recipient":{
                            "id":sender
                        },
                        "message":{
                            "attachment":{
                                "type":"template",
                                "payload":{
                                    "template_type":"generic",
                                    "elements":[{
                                        "title":"16화 예고",
                                        "subtitle":"공유-김고은의 천년사랑, 해피엔딩 같은 새드엔딩?",
                                        "image_url":"https://storage.googleapis.com/temp-drama/flow03img.jpg",
                                        "buttons":[
                                            {
                                                "type":"web_url",
                                                "url":"https://petersfancybrownhats.com",
                                                "title":"예고 보기"
                                            }
                                        ]
                                    }]
                                }
                            }
                        }
                    }
                }, function (error, response, body) {
                });
            }else if( text.indexOf("이동욱") > -1 ){

                request({
                    uri: 'https://graph.facebook.com/v2.6/me/messages',
                    qs: { access_token: "" },
                    method: 'POST',
                    json: {
                        "recipient":{
                            "id":sender
                        },
                        "message":{
                            "attachment":{
                                "type":"template",
                                "payload":{
                                    "template_type":"generic",
                                    "elements":[{
                                        "title":"음. 이것참 몹시 곤란하군.",
                                        "image_url":"https://storage.googleapis.com/temp-drama/flow04img.jpg",
                                    }]
                                }
                            }
                        }
                    }
                }, function (error, response, body) {
                });

            }



        }

        console.log( JSON.stringify( req.body ) );

        res.status(200).send('OK!');
    }










    return;
    if (req.body.message === undefined) {
        // This is an error case, as "message" is required.
        res.status(400).send('No message defined!');
    } else {
        // Everything is okay.
        console.log(req.body.message);
        res.status(200).send('Success: ' + req.body.message);
    }
};

/*

curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type":"call_to_actions",
  "thread_state":"new_thread",
  "call_to_actions":[
    {
      "payload":"START_MENU"
    }
  ]
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=EAAaUNcxILesBAMYq6p1fib7uAfYqgryXQ9iRNQQl1PG5mZCIJYEzZCbaWtRZB3XZCoV8zZAZBweV3fspuC5aTE1ZBzIpJaXBzqqmeHzQIalrbAY5PMFVIQ0OZCvSlrjrI3hVpeVutPPjNZBZCH9Oa2Qw0mEHSB5Op0ZB4E18IChevqnhwZDZD"

*/
