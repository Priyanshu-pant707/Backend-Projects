# How to handle many users (important interview topic)


- Production servers handle : 
    - 10,000+
    - 50,000+
    - 100,000+
    - requests


# 1. Use Clustering (multi-CPU usage)
- node runs on single cpu by default
- enable clustering 
- allows one process per cpu core
- example -> 8 core cpu ->  8 server running
- requests distribution automatically


# 2. Use Redis instead of NodeCache
- shared across servers
- persistent
- distributed caching
- faster


# 3. use load balancer
- example : 
    - ngnix
    - AWS ELB
    - CloudFlare

# 4. Add Rate limiting (protect from attacks)
```
const rateLimit = require("express-rate-limit");

app.use(rateLimit({
 windowMs: 1 * 60 * 1000,
 max: 100
}));
```
- meaning -> 1 user= 100 request per minute
- protects from :
   - DDos
   - spam requests
   - bots

# 5. use pagination (very important)
- instead of sending : 5000 photos send 50 photos

# 6. use async queue system 
- example tools : Bull queue , RabbitMQ , Kafka
- used for :
    -  background jobs
    - email sending
    - image processing
    - notifications
    - prevents blocking requests
    