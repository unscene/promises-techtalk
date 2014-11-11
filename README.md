promises-techtalk
=================

This is a quick primer on how to manage asynchronous opertations in nodejs/javascript. There are a bunch of different patterns/technologies to handle the complexity associated with asynchronous IO.  Here we will take a look at a few of them.

The goal is to highlight why promises seem to be the right abstraction for the job.

The use case for each example is:

  1. Get a list of users.
  2. Then for each of those users
    - Fetch a user object
  3. Show the results

####Example 1

Let's make some pyramids. See [Ex.1](pyramid.js)

**Pros**
  1. No real libraries invloved here (with the exception of `request`)
  2. Sticks to the node.js way, at least it is consistently sucky
  3. We can see the flow, diagonally!

**Cons**
  1. Brittle code.
  2. We didn't even try to catch exceptions.
  3. Pretty verbose.
  4. Have to be aware to call callback at all times, see #1.

####Example 2

Let's make it worse! See [Ex.2](cps.js)

**Pros**
  1. Good isolation.
  
  

**Cons**
  1. Lots of trampolines.
  2. We still didn't try to catch exceptions.
  3. Still pretty verbose

####Example 3

Let's make it worse! See [Ex.2](cps.js)

**Pros**

**Cons**

####Example 4

Let's make it worse! See [Ex.2](cps.js)

**Pros**

**Cons**




