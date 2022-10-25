const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@resources': path.resolve(__dirname, 'src/resources'),
            '@images': path.resolve(__dirname, 'src/resources/images'),
            '@strings': path.resolve(__dirname, 'src/resources/strings'),
            '@data-access': path.resolve(__dirname, 'src/data-access'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@redux-store': path.resolve(__dirname, 'src/redux-store'),
            '@actions': path.resolve(__dirname, 'src/redux-store/actions'),
            '@user': path.resolve(__dirname, 'src/site/user'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
    };

    return config;
};