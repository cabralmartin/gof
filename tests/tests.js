require.config({
    baseUrl: "../js/ext/",

    paths: {
        app: '../app',
        underscore: 'underscore/underscore',
        jasmine: '../../tests/lib/jasmine/jasmine',
        'jasmine-html': '../../tests/lib/jasmine/jasmine-html',
        spec: '../../tests/spec'
    },

    shim: {
        underscore: {
            exports: "_"
        },

        jasmine: {
            exports: 'jasmine'
        },

        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});

require(['jquery', 'jasmine-html'], function ($, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('spec/gameBoardSpec');
    specs.push('spec/gameRenderSpec');

    $(function () {
        require(specs, function () {
            jasmineEnv.execute();
        });
    });

});