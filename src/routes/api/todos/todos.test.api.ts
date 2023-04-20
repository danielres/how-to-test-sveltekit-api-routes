import { $fetch, setup } from 'vite-test-utils'
import { describe, expect, test } from 'vitest'

import './+server' // Trick so vitest reruns this test +server.ts changes

await setup({
  server: true,
})

describe('GET /api/todos', () => {
  test('responds with the list of todos', async () => {
    const todos = await $fetch('/api/todos')

    expect(todos).toEqual([
      {
        id: 1,
        text: 'test a sveltekit api endpoint with vitest',
        done: true,
      },
    ])
  })
})
