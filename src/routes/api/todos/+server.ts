import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
  const todos = [
    {
      id: 1,
      text: 'test a sveltekit api endpoint with vitest',
      done: true,
    },
  ]
  return json(todos)
}
