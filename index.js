'use strict';

module.exports = function exports() {
    var path,
        params = [];

    if (process.env.GRUNT_CLI_CONFIG_CODE_COVERAGE) {
        path = __dirname + '/tasks-cov/config_options';
    } else {
        path = __dirname + '/tasks/config_options';
    }

    params.push(path);
    params.push(arguments);

    require.apply(this, params);
};
