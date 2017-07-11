var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var links = [
        {
            title:'Blog',
            title_cn:'網誌',
            link: 'http://blog.frank.moe'
        },
        {
            title:'Twitter',
            title_cn:'推特',
            link: 'https://twitter.com/njzyf'
        },
        {
            title:'Garage',
            title_cn:'車庫',
            link: '#'
        },
        {
            title:'About',
            title_cn:'關於',
            link: 'https://about.me/njzyf'
        },
    ];

    var caption = {
        strings:[
            'Hello, I\'m Yifei',
            'Nice to meet you<br>很高興認識你',
            'Welcome<br>這只是一個歡迎頁'
        ]
    };

    var quotes = [
        '\'I cannot rest from travel, I will drink life to the lees\'',
        // '「我不能停止跋涉<span>，</span>我決心飲盡生命之杯」'
        // '「山里は<span> </span>冬ぞさびしき<span> </span>まさりける<span> </span>人目も草も<span> </span>かれぬと思へば」'
    ];
    
    var date = new Date();
    var month = date.getUTCMonth();
    var day = date.getUTCDate();

    if (month == 11 && (day >= 18 && day <=27)) {
        quotes.push('-- Merry Christmas<span> </span>聖誕快樂 --');
    } else if ((month == 11 && day > 27) || (month == 0 && day < 7)) {
        quotes.push('-- Happy New Year<span> </span>新年快樂 --');
    }

    res.render('index', {
        title: '歡迎 | Welcome | frank.moe',
        links: links,
        caption: caption,
        quotes: quotes
    });
});

module.exports = router;
