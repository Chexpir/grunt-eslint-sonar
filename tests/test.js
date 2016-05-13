var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var ESLintReporter = require('./../esLintReporter');

//eslintPath = options.eslint.report || "reports/sonar/eslint-angular.json", 
    //eslintTask = options.eslint.task || "ci-eslint",
    //eslintbase = options.eslint.base || "src",
    
describe('sonarWebReporters', function() {
    it('n', function() {
        var esLintReporter = new ESLintReporter('./results.json','../');
        eslintReporter.openReporter('builder-client', './eslint-results.json');
        //esLintReporter.reporter(results);
    });
});