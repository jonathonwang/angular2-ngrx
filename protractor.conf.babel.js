// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
// require('babel-core/register')({ ignore: false });
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/ts/tests/e2e/**/*.e2e.spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch() {
    require('ts-node').register({
      project: './'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
