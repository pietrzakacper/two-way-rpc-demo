const assert = require('assert')
const { spawn } = require('child_process')
const { Client, Server } = require('node-json-rpc')


const {BACKEND_BIN_PATH} = process.env

assert(
    BACKEND_BIN_PATH !== undefined,
    'P2PSIM_BIN_PATH env var is not defined'
)

const backend = spawn(BACKEND_BIN_PATH, [], {
    detached: true,
    stdio: [ 'ignore', 0, 0 ],
    shell: true
})
// Let backend process exit by itself.
backend.unref()

/* RPC Server */

const rpcServer = new Server({port: 8384})

rpcServer.addMethod('sayGoodbye', (params, cb) => {
    console.log('FRONTEND: Goodbye!')
    cb()
    process.exit(0)
})

rpcServer.start(
    () => console.log('FRONTEND: RPC server is running...')
)

/* RPC Client */

const rpcClient = new Client({port: 8383})

function callSayHello() {
    console.log('FRONTEND: call sayHello')
    rpcClient.call({"jsonrpc": "2.0", "method": "sayHello"}, () => {})
}

// Wait for backend to start.
setTimeout(callSayHello, 100)