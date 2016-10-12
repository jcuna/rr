// See http://brunch.io for documentation.
module.exports = {
  paths: {
    watched: ['app/assets'],
    public: 'vendor/assets'
  },

  modules: {
    wrapper: false
  },

    plugins: {
        babel: {
            presets: ['es2015', 'es2016', 'react'], // es2015, es2016 are defaults
            pattern: /\.(es6|jsx)$/ // js and jsx are defaults.
        }
    },

  files: {
    javascripts: {joinTo: 'app/assets/javascripts/application.js'},
    stylesheets: {joinTo: 'app/assets/stylesheets/application.css'}
  }
};
