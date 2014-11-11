promises-techtalk
=================

This is a quick primer on how to manage asynchronous opertations in nodejs/javascript. There are a bunch of different patterns/technologies to handle the complexity associated with asynchronous IO.  Here we will take a look at a few of them.

The goal is to highlight why promises seem to be the right abstraction for the job.

The use case for each example is:

  1. Get a list of users.
  2. Then for each of those users
    - Fetch a user object
  3. Show the results

####Pyramid of Doom

Let's make some pyramids. See [Ex.1](pyramid.js)

**Pros**

  1. Consistent with how node handles IO.
  2. We can follow the flow of code, diagonally.

**Cons**

  1. Brittle.
  2. No exception handling.
  3. Verbose.
  4. It won't stop going right.
  2. Managing callbacks.

####Continuation Passing

Let's make it better?. See [Ex.2](cps.js)

**Pros**

  1. We can stop it from going right.

**Cons**

  1. Still brittle.
  2. Still no exception handling.
  3. Still verbose.
  4. Have to now jump around the code a lot.
  2. Still have to manage some sort of callback.

####Async

Let's make it betterer?. See [Ex.3](async.js)

**Pros**

  1. We can stop it from going right.
  2. Async has a lot of combinators/iterators to handles different scenarios os async IO.
  3. Less verbose.

**Cons**

  1. Exception handling but poor.
  2. Still have to manage some sort of callback.
  3. ...and probably still brittle.

And just before we move on the way to handle exceptions in all of the above cases would be to use [domains](http://nodejs.org/docs/latest/api/domain.html).  Not my favorite but it works.

####Promises

Let's make it most best. See [Ex.4](promises.js)

**Pros**

  1. We can stop it from going right.
  2. Handles exceptions.
  3. Way less verbose.
  4. No managing of callbacks.
  5. Exceptions and node-style errors are handled in a unified way.
  6. A promises "resolves" a value which makes it much easier to compose with other promises.

**Cons**

  1. Requires some mental overhead.
  2. Sometimes the `bluebird` or `q` API can be non obvious.
