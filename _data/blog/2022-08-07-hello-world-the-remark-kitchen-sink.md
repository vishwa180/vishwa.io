---
template: BlogPost
path: /when-should-you-use-a-message-queue
date: 2022-08-07T12:12:25.364Z
title: "When should you use a message queue like Kafka or RabbitMQ?"
thumbnail: /assets/queue.png
metaDescription: In this blog post, I want to discuss message queues and when to use them in your architecture.
---

## When should you use a message queue like Kafka or RabbitMQ?

In this blog post, I want to discuss message queues and when to use them in your architecture.

Any technology exists for a reason, and it exists to solve a problem. You should use a technology only when a problem it can solve exists in your system.

### What is the actual problem that a message queue can solve?

Let's look at the request-response architecture for a moment. When you request a server using any communication protocol (TCP, gRPC or REST), that request requires some resources at the server to be served. Your server needs a finite amount of time to process this request.

Sometimes, your server (either single-threaded or multi-threaded) could take a long and unpredictable time to process resource-hungry requests, and you could quickly overwhelm your server with these requests. In this scenario, further requests from the same client or other clients will be waiting or blocked, which means the system is unresponsive to the user. This harms the user experience.

### What should you do when a typical request-response architecture doesn't cut it?

If you think a request will always take a long or unpredictable time to process, here is where a message queue is helpful.
You can deploy a queue in your system, and if the server receives a resource-hungry request, you can put the request as a message or task in the queue, which is a speedy operation that takes a constant amount of time - O(1), and you can respond to the user with some identifier (task id). This way, you can acknowledge your user immediately that you have received their request and it is waiting in a queue and will be processed and served soon. This makes the user experience better.

Then, you need a separate service other than the web server to read the tasks or messages from the queue and process them asynchronously and store the result in the database. From here, you can implement a polling mechanism in the client, which can request the server using the task id periodically until the actual result is returned. Thus the client can get the result as soon as they are ready. This way, you can eliminate the blank waiting period. Still, technically the client didn't receive the result immediately, but you can unblock the user experience and improve it by showing a progress bar.

The main takeaway is that any flood of resource-hungry or long-running requests does not block your web server. There is this nice message queue where new tasks are put in, and you can have multiple services that can listen to this queue, start pulling jobs, execute them, and write the result to the database.

I hope this explains the primary use case of message queues and when to use them.
