# Load Balancer 

- a load balancer distributes incoming user requests across multiple servers so that :
    1. no single server gets overload
    2. response time stays fast.
    3. system stays available even if one server crashes.
    4. application can scale to 100K+ users
- without load balancer :
   1. server overload
   2. slow response
   3. crash risk
   4. downtime
- with load balancer : 
  1. traffic distributed
  2. faster responses
  3. high availability
  4. scalable architecture






## types of load balancer 

1. Layer 4 load balancer (Transport layer)
- works using -> Ip address and tcp/udp ports
- advantages : very fast and low overhead
- used when the speed matters most.


2. Layer 7 load balancer (Application layer)
- works using -> url,headers,cookies,session info
- advantages : intelligent routing and smarter traffic handling
- most modern systems use layer 7.
- example tools nging, aws elastic load balancing,cloudfare






```
a load balancer distributes incoming traffic across multiple servers to improve performance , availability, and scalability. it prevents server overload , supports failover, if a server crashes , and enables horizontal scaling. common examples includes ngnix and aws elastic load balancer using algorithms like round robin and least connections.

```


