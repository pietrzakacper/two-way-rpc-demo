cmake_minimum_required(VERSION 3.10)
project(rpc_demo)

set(CMAKE_CXX_STANDARD 11)

find_package(jsonrpccpp)
link_libraries(jsoncpp)
link_libraries(microhttpd)
link_libraries(jsonrpccpp-common)
link_libraries(jsonrpccpp-server)
link_libraries(curl)
link_libraries(jsonrpccpp-client)

add_executable(rpc_demo
        main.cpp
        rpcServer/rpcserver.h
        rpcClient/rpcclient.h
)