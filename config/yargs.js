const opts = {
    base: {
        demand:true,
        alias:'b'
    },
    limit:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('list', 'print in console the multiply table', opts)
.command('create', 'Create a file with the multiply table', opts)
.argv

module.exports = {
    argv
}