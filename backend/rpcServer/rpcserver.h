#include "abstractrpcserver.h"

#include <iostream>

class RPCServer : public AbstractRPCServer
{
public:
   RPCServer(jsonrpc::AbstractServerConnector &connector)
        :AbstractRPCServer(connector),
        didSayHello(false)
    {
    }

    void sayHello()
    {
        std::cout << "BACKEND: Hello!\n";
        didSayHello = true;
    }

   bool didSayHello;
};



