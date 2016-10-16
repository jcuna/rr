module.exports = {

    paths: {
        watched: ['app/assets/javascripts', 'app/assets/stylesheets'],
        public: 'public/assets'
    },

    files: {
        javascripts: {
            joinTo: 'javascripts/app.js'
            // joinTo: {
            //     'javascripts/app.js': /^app/,
            //     'javascripts/vendor.js': /^vendor/
            // }
        },
        stylesheets: {joinTo: 'stylesheets/app.css'}
    },

    modules: {
        wrapper: false
    },

    plugins: {
        babel: {presets: ['es2015', 'es2016', 'react']},
        postcss: {processors: [require('autoprefixer')]}
    },

    conventions: {
        assets: /^app\/assets\/images\//
    }
};
