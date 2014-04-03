'use strict';

var path;

if (process.env.GRUNT_CLI_CONFIG_CODE_COVERAGE) {
    path = __dirname + '/tasks-cov/config_options';
} else {
    path = __dirname + '/tasks/config_options';
}

require(path);
