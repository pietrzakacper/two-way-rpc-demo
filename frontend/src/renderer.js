const { Client, Server } = require('node-json-rpc')
const { remote } = require('electron')

const DOM = {
    sayHelloBtn: document.querySelector('#say-hello-btn'),
    backendMsg: document.querySelector('#backend-msg')
}

/* RPC Client */

const rpcClient = new Client({port: 8383})

function callSayHello() {
    rpcClient.call({"jsonrpc": "2.0", "method": "sayHello"}, () => {})
}

DOM.sayHelloBtn.addEventListener('click', callSayHello)

/* RPC Server */

const rpcServer = new Server({ port: 8384 })

rpcServer.addMethod('sayGoodbye', (params, cb) => {
    DOM.sayHelloBtn.classList.add('hide')
    DOM.backendMsg.classList.remove('hide')

    cb()

    setTimeout(() => {
        const window = remote.getCurrentWindow()
        window.close()
    }, 3000)
})

rpcServer.start()

