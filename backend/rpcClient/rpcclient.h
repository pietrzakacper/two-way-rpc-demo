/**
 * This file is generated by jsonrpcstub, DO NOT CHANGE IT MANUALLY!
 */

#ifndef JSONRPC_CPP_STUB_RPCCLIENT_H_
#define JSONRPC_CPP_STUB_RPCCLIENT_H_

#include <jsonrpccpp/client.h>

class RPCClient : public jsonrpc::Client
{
    public:
        RPCClient(jsonrpc::IClientConnector &conn, jsonrpc::clientVersion_t type = jsonrpc::JSONRPC_CLIENT_V2) : jsonrpc::Client(conn, type) {}

        void sayGoodbye() 
        {
            Json::Value p;
            p = Json::nullValue;
            this->CallNotification("sayGoodbye",p);
        }
};

#endif //JSONRPC_CPP_STUB_RPCCLIENT_H_
