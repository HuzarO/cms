const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy([
        'node_modules/font-awesome/fonts',
        'node_modules/bootstrap/dist/fonts'
    ], 'public/fonts');

    mix.scripts([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/angular/angular.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        './node_modules/angular-animate/angular-animate.min.js',
        './node_modules/angular-touch/angular-touch.min.js',
        './node_modules/satellizer/dist/satellizer.min.js',
        './node_modules/angular-loading-bar/build/loading-bar.min.js',
        './bower_components/ngstorage/ngStorage.min.js',


        'app.module.js',
        'app.router.js',
        'app.run.js',

        '*/*.module.js',
        '*/*.controller.js',
        '*/*.factory.js',
        '*/*.service.js',
        '*/*.directive.js'
    ], './public/js/app.js');

    mix.styles([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/angular-loading-bar/build/loading-bar.min.css',

        'style.css'
    ], './public/css/app.css');

    mix.livereload();
});
