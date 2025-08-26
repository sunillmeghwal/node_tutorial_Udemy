# HTTP Server task

### Desctiption

Build a simple HTTP server with following features.

1. GET: '/' : send simple hello from server message.\
2. GET: '/contact-us' : Send your email and conatct number to the user.
3. POST : '/tweet': do a fake DB operation and send the ack that it is done.
4. GET: '/tweet' : Send all the tweets from fake DB to the user.
   Also you need to log the incoming requests with timestamps in file named 'log.txt'.
