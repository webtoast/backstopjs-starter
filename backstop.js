var fs = require('fs');
var allScenarios = [];

function loadScenarios (dirname, onError) {
    var files = fs.readdirSync(dirname);
    files.forEach (function (file) {
        content = fs.readFileSync(dirname + file, 'utf-8');
        allScenarios.push(JSON.parse(content));
    })
}

loadScenarios ('scenarios/',
    function (err) {
        throw err;
    }
)

module.exports = {
    "viewports": [
        {
            "name": "phone",
            "width": 320,
            "height": 480
        },
        {
            "name": "tablet_v",
            "width": 568,
            "height": 1024
        },
        {
            "name": "tablet_h",
            "width": 1024,
            "height": 768
        }
    ],
    "scenarios": allScenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "casper_scripts": "backstop_data/casper_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "casperFlags": [
        "--local-storage-path=./localstorage"
    ],
    "engine": "phantomjs",
    "report": [
        "browser"
    ],
    "debug": false
}
