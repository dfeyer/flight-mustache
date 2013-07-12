// Karma configuration file
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54


// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  'bower_components/es5-shim/es5-shim.js',
  'bower_components/es5-shim/es5-sham.js',

  // frameworks
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  // loaded without require
  'bower_components/jquery/jquery.js',
  'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
  'bower_components/jasmine-flight/lib/jasmine-flight.js',

  // loaded with require
  {pattern: 'bower_components/mustache/mustache.js', included: false},
  {pattern: 'bower_components/flight/**/*.js', included: false},
  {pattern: 'lib/**/*.js', included: false},
  {pattern: 'test/spec/**/*.spec.js', included: false},

  'test/test-main.js'
];

// list of files to exclude
exclude = [

];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
reporters = [
  'dots'
];

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = true;

// start these browsers
browsers = [
  'Chrome',
  'Firefox'
];

// auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;
