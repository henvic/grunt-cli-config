# grunt-cli-config [![Build Status](https://secure.travis-ci.org/henvic/grunt-cli-config.png?branch=master)](https://travis-ci.org/henvic/grunt-cli-config) [![NPM version](https://badge.fury.io/js/grunt-cli-config.png)](http://badge.fury.io/js/grunt-cli-config) [![Dependency Status](https://david-dm.org/henvic/grunt-cli-config.png)](https://david-dm.org/henvic/grunt-cli-config) [![Coverage Status](https://coveralls.io/repos/henvic/grunt-cli-config/badge.png)](https://coveralls.io/r/henvic/grunt-cli-config)

# Install
This plugin extends grunt to allow you to overwrite your grunt config options by invoking parameters on the command-line interface (CLI).


## Usage example
After you add grunt-cli-config to your package.json or use `npm install grunt-cli-config`, require the plugin passing the grunt as a parameter before invoking its apply method
```
require('grunt-cli-config')(grunt);
```

Then, on a grunt task call
```
var callback = undefined,
    task = 'test';

grunt.applyCliConfig(callback, task, ...);

```
The callback takes no parameters and is called at the end of the method, if defined.

There's a arbitrary number of arguments you can pass to the applyCliConfig method and they should be interpreted as sub-levels of the config options.

On the CLI you can invoke commands like

```
$ grunt test --module calendar --no-coverage
Running "jshint:all" (jshint) task
>> 3 files lint free.
...
```

The module option will be set to calendar and the coverage option will be set to param.

Notice you can negate booleans by using `--no-<param>`.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## License
Licensed under the MIT license.
