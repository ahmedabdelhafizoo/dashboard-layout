let mix = require('laravel-mix');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
var CopyWebpackPlugin = require('copy-webpack-plugin');

mix.setPublicPath('public');

// handel images
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new CopyWebpackPlugin([{
                from: 'resources/images',
                to: 'images'
            }]),
            new ImageminPlugin({
                pngquant: ({
                    quality: 50
                }),
                plugins: [imageminMozjpeg({
                    quality: 50
                })]
            }),
        ]
    };
});

mix.js('resources/js/main.js', 'public/js').sourceMaps(true, 'source-map');
mix.sass('resources/sass/main.scss', 'public/css/main.css').sourceMaps(true, 'source-map').options({
    processCssUrls: false
});;
