[![Codecov Coverage](https://img.shields.io/codecov/c/github/good-idea/unwind-edges/master.svg?style=flat-square)](https://codecov.io/gh/good-idea/unwind-edges/) ![](https://img.badgesize.io/https://unpkg.com/@good-idea/unwind-edges/lib/index.js.svg) ![](https://img.badgesize.io/https://unpkg.com/@good-idea/unwind-edges/lib/index.js.svg?compression=gzip)

# unwind-edges

`uwindEdges` is a simple utility for extracting nodes from GraphQL responses that are paginated with the [Relay Cursor Connection spec](https://facebook.github.io/relay/graphql/connections.htm). This structure is handy for handling pagination in your requests, but after that, you usually just want the nodes.

# usage

Takes a Cursor Connection and returns a tuple of (1) simple array of the nodes, with an additional `__cursor` property, and (2) the original page info.

Example:

```ts
import { unwindEdges } from '@good-idea/unwind-edges'

const response = {
  allUsers: {
    pageInfo: {
      hasNextPage: true,
      hasPreviousPage: false,
    },
    edges: [
      {
        cursor: 'x123',
        node: {
          id: 'abc',
          name: 'frank',
        },
      },
      {
        cursor: 'y234',
        node: {
          id: 'def',
          name: 'ursula',
        },
      },
      {
        cursor: 'z456',
        node: {
          id: 'ghi',
          name: 'ira',
        },
      },
    ],
  },
}

const [users, { pageInfo, firstCursor, lastCursor }] = unwindEdges(response.allUsers)

console.log(users)
/**
 *  [
 *    { id: 'abc', name: 'frank', __cursor: 'x123' },
 *    { id: 'def', name: 'ursula', __cursor: 'y234' },
 *    { id: 'ghi', name: 'ira', __cursor: 'z456' }
 *  ]
 */

console.log(pageInfo)
/**
 *  {
 *    hasPreviousPage: false,
 *    hasNextPage: true
 *  }
 */

console.log(firstCursor) // => 'x123'
console.log(lastCursor) // => 'x123'
```

## Typescript Usage

If you're working in Typescript, you can pass in an additional type argument to tell TS what you're going to get back:

```ts
interface User {
  id: string
  name: string
}

const [users] = unwindEdges<User>(sampleResponse)

console.log(users[0].id) // 👍
console.log(users[0].name) // 👍
console.log(users[0].__cursor) // 👍
console.log(users[0].birthday) // ❗️ Property 'birthday' does not exist on type 'NodeWithCursor<User>'.
```

The module also exports the `Paginated<T>` interface, which can be handy if you want to create an interface for a Relay Connection:

```
type UserConnection = Paginated<User>
```
