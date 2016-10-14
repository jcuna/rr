module.exports = {

    paths: {
        watched: ['app/assets/javascripts', 'app/assets/stylesheets', 'test', 'vendor'],
        public: 'public/assets'
    },

    files: {
        javascripts: {
            joinTo: 'javascripts/app.js'
            // joinTo: {
            //     'javascripts/app.js': /app\/assets\/javascripts/,
            //     'javascripts/vendor.js': /^vendor/
            // }
        },
        stylesheets: {joinTo: 'stylesheets/app.css'}
    },

    plugins: {
        babel: {presets: ['es2015', 'es2016', 'react']},
        postcss: {processors: [require('autoprefixer')]}
    },

    conventions: {
        assets: /^app\/assets\/images\//
    }
};








