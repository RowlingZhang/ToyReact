module.exports = {
    //指定入口，表示webpack要打包哪个文件
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presents: ['@babel/preset-env'],
                        plugins: [[
                            "@babel/plugin-transform-react-jsx",
                            {pragma:"ToyReact.createElement"}
                        ]]
                    }
                }
            }
        ]
    },

    mode: 'development',
    optimization: {
        minimize: false
    }
}