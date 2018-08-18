#include "abstractrpcserver.h"

#include <iostream>

class RPCServer : public AbstractRPCServer
{
public:
   RPCServer(jsonrpc::AbstractServerConnector &connector);
   void sayHello();

   bool didSayHello;
};

RPCServer::RPCServer(jsonrpc::AbstractServerConnector &connector)
   :AbstractRPCServer(connector),
    didSayHello(false)
{
}

void RPCServer::sayHello()
{
   std::cout << "BACKEND: Hello!\n";
   didSayHello = true;
}

