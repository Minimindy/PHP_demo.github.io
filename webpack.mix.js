const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .scripts(['resources/js/milkmidi.CityArea.js'], ['public/js/milkmidi.CityArea.js'])
    .scripts(['resources/js/tw-city-selector.js'], ['public/js/tw-city-selector.js'])
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
