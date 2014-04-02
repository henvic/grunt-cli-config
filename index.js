'use strict';

var path;

if (process.env.GRUNT_CLI_CONFIG_CODE_COVERAGE) {
    path = process.cwd() + '/tasks-cov/config_options';
} else {
    path = process.cwd() + '/tasks/config_options';
}

require(path);
