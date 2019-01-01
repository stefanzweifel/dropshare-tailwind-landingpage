const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const purgeCss = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

mix.disableNotifications();

/**
 * Build CSS with Tailwind
 */
mix.postCss('src/main.css', 'dist/css', [
  tailwindcss('./tailwind.js'),
]);


/**
 * Additional Webpack Configuration
 * 
 * - Remove not used CSS with purgecss
 * - Inline CSS with HtmlWebpackPlugin
 */
mix.webpackConfig({
    plugins: [
        new purgeCss({
            paths: glob.sync(
                [
                    path.join(__dirname, './dist/**/*.html'),
                ]
            ),
            whitelist: ['img', 'video'],
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
        }),
        new HtmlWebpackPlugin({
            template: 'dist/template-index.html',
            filename: 'dist/index.html',
        }),
        new StyleExtHtmlWebpackPlugin({
            minify: true
        }),
    ]
})
