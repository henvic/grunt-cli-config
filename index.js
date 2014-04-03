'use strict';

module.exports = function exports() {
    var path,
        params = [].slice.call(arguments);

    if (process.env.GRUNT_CLI_CONFIG_CODE_COVERAGE) {
        path = __dirname + '/tasks-cov/config_options';
    } else {
        path = __dirname + '/tasks/config_options';
    }

    params.unshift(path);

    return require.apply(this, params);
};
