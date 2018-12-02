module.exports = {
    'entry': './src/components/index.tsx',
    'output' : {
        'filename': 'bundle.js'
    },
    resolve: {
        extensions: ['*','.ts','.tsx','.js']
    },
    module : {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    }
}