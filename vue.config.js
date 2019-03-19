const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'TweenMax': path.resolve('node_modules', 'gsap/TweenMax.js'),
                'TimelineMax': path.resolve('node_modules', 'gsap/umd/TimelineMax.js'),
                'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
                'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'),
                'EasePack': path.resolve('node_modules', 'gsap/EasePack.js'),
            }
        },
    },
};