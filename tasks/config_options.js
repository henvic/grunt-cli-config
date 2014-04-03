/*
 * grunt-cli-config
 * https://github.com/henvic/grunt-cli-config
 *
 * Copyright (c) 2014 Henrique Vicente
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function exports(grunt) {
    function parseBooleanParam(option) {
        return {
            key: option,
            value: grunt.option(option)
        };
    }

    function parseStringParam(option, equals) {
        return {
            key: option.substring(0, equals),
            value: option.substring(equals + 1)
        };
    }

    function parse(option) {
        var equals = option.lastIndexOf('=');

        if (equals === -1) {
            return parseBooleanParam(option);
        }

        return parseStringParam(option, equals);
    }

    /*
     * normalize flags which have a --no prefix so we can extract them like negative booleans
     */
    function normalize(option) {
        return option.replace(/^--(no-)?/, '');
    }

    /**
     * Apply the cli configs to the receiving task / subTask
     * e.g., grunt.applyCliConfig(callback, task, subTask,,);
     * @param callback
     * @param task
     */
    grunt.applyCliConfig = function apply(callback) {
        var options = grunt.option.flags(),
            params = [].slice.call(arguments);

        params.shift();

        options.forEach(function getOption(option) {
            var choice = parse(normalize(option)),
                key = params;

            key.push(choice.key);

            grunt.config(key, choice.value);
        });

        if (callback) {
            callback();
        }
    };

    exports.normalize = normalize;
    exports.parse = parse;

    return exports;
};
