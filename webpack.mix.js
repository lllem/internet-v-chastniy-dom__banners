let mix = require('laravel-mix');

mix
  // .js('src/scripts/script.js', 'assets/scripts')
  .sass('src/assets/styles/main.scss', 'assets/styles')
  // .copy( 'src/assets/img', 'dist/assets/img', false )
  .setPublicPath('dist')
  // .browserSync()
  .disableSuccessNotifications()
  .version();
