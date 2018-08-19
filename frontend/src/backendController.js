const assert = require('assert')
const { spawn } = require('child_process')

const { BACKEND_BIN_PATH } = process.env

assert(
    BACKEND_BIN_PATH !== undefined,
    'BACKEND_BIN_PATH env var is not defined'
)

let backend

exports.startBackend = () => {
    backend = spawn(BACKEND_BIN_PATH, [], {
        shell: true,
        stdio: [ 'ignore', 0, 0 ]
    })
}

exports.killBackend = () => {
    backend.kill('SIGINT')
}