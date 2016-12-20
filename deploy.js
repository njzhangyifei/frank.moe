// run deploy only when NODE_ENV is production
if (process.env.NODE_ENV === 'production') {
    console.log('deploy begin, running webpack with production config...')
    var child_process = require('child_process');
    child_process.exec("webpack -p --config webpack.production.config.js", function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            console.log('deploy done');
        }
    });
} else {
    console.log('not in production, skipped')
}
