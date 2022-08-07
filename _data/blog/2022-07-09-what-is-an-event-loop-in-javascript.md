---
template: BlogPost
path: /What-is-an-event-loop-in-javascript
date: 2022-07-09T14:59:36.571Z
title: What is an event loop in JavaScript?
thumbnail: /assets/image-5.jpg
---

# What is an event loop in JavaScript?

JavaScript is a single-threaded programming language which means that JavaScript can do only one thing at a time, i.e. JavaScript is a synchronous programming language.

But wait, everyone knows JavaScript has asynchronous capabilities. How? The answer is the **event loop.** JavaScript uses a few intelligent techniques that make it look like a multi-threaded language.

### Let's look into the following prerequisites to understand the event loop:

1. **Call Stack:** The JavaScript executes a script from the top and works its way down. In the execution phase, it pushes and pops functions onto and off a stack data structure called the call stack, which is responsible for keeping track of all the operations to be executed. Whenever a function is called, a new entry called execution context is pushed into the call stack, and it is poped out when the execution of the function is over.
2. **Callback Queue**: Besides the JavaScript engine, the web browser has many APIs that work asynchronously. Whenever an asynchronous function like setTimeout() or a fetch request is called, a new entry is created in the callback queue. The callback queue is responsible for sending new functions to the call stack for execution. Consider this queue as a pre-stage for the asynchronous functions to enter into the call stack.

To be continued...
