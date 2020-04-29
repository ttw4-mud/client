const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    theme: {
        container: {
          center: true,
        },
      },
    corePlugins: {
        margin: false,
        preflight: false,
      }
};
