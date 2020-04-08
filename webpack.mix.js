const path = require('path')
const fs = require('fs-extra')
const mix = require('laravel-mix')
require('laravel-mix-versionhash')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
require('laravel-mix-svg-vue')

mix.js('resources/js/app.js', 'public/dist/js')
    // .js('resources/js/app.js', 'public/dist/js', 'public/js')
    .sass('resources/sass/app.scss', 'public/dist/css')

    .disableNotifications()
    // .svgVue();
    .svgVue({
        svgPath: 'public/images/svg',
        svgoSettings: [
            { removeDimensions: false },
            { cleanupIDs: false },
            { removeHiddenElems: false },
            { removeEmptyContainers: false }
            // .svgVue({ svgPath: 'public/images/svg', svgoSettings: [
            //   { removeDimensions: false }, { cleanupIDs: false }, { removeHiddenElems: false }, { removeEmptyContainers: false }, { removeUnknownsAndDefaults: false }, { removeNonInheritableGroupAttrs: false }, { removeAttrs: false }, { removeNonInheritableGroupAttrs: false }
        ]
    })

if (mix.inProduction()) {
    mix
        // .extract() // Disabled until resolved: https://github.com/JeffreyWay/laravel-mix/issues/1889
        // .version() // Use `laravel-mix-versionhash` for the generating correct Laravel Mix manifest file.
        .versionHash()
} else {
    mix.sourceMaps()
}

mix.webpackConfig({
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '~': path.join(__dirname, './resources/js')
        }
    },
    output: {
        chunkFilename: 'dist/js/[chunkhash].js',
        path: mix.config.hmr ? '/' : path.resolve(__dirname, './public/build')
    }
})

mix.then(() => {
    if (!mix.config.hmr) {
        process.nextTick(() => publishAseets())
    }
})

function publishAseets() {
    const publicDir = path.resolve(__dirname, './public')

    if (mix.inProduction()) {
        fs.removeSync(path.join(publicDir, 'dist'))
    }

    fs.copySync(path.join(publicDir, 'build', 'dist'), path.join(publicDir, 'dist'))
    fs.removeSync(path.join(publicDir, 'build'))
}
