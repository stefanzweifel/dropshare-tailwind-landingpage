const { mix } = require('laravel-mix');

var tailwindcss = require('tailwindcss');

mix.postCss('src/main.css', 'dist/css', [
  tailwindcss('./tailwind.js'),
]);

mix.disableNotifications();


let purgeCss = require('purgecss-webpack-plugin');
let glob = require('glob-all');

if (mix.inProduction()) {

    mix.webpackConfig({
        plugins: [
            new purgeCss({
                paths: glob.sync(
                    [
                        path.join(__dirname, './dist/**/*.html'),
                    ]
                ),
                extractors: [
                    {
                        extractor: class {
                            static extract(content) {
                                return content.match(/[A-z0-9-:\/]+/g)
                            }
                        },
                        extensions: ['html'],
                    }
                ]
            })
        ]
    })
}
