module.exports =  {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('css-mqpacker'),
        (process.env.NODE_ENV === 'production' ?  require('cssnano')  :  null),
    ]
}