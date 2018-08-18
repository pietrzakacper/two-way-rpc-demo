#include    "rpcClient/rpcclient.h"
#include "rpcServer/rpcserver.h"

#include <iostream>
#include <jsonrpccpp/client/connectors/httpclient.h>
#include <jsonrpccpp/server/connectors/httpserver.h>

int main()
{
   jsonrpc::HttpServer httpServer(8383);
   RPCServer rpcServer(httpServer);

   rpcServer.StartListening();

   std::cout << "BACKEND: RPC server is running...\n";

   jsonrpc::HttpClient httpClient("http://localhost:8384");
   RPCClient rpcClient(httpClient);

   while(true)
   {
      if(rpcServer.didSayHello)
      {
         std::cout << "BACKEND: call sayGoodbye\n";
         rpcClient.sayGoodbye();
         break;
      }
   }

   return 0;
}