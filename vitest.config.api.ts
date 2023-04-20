import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.test.api.ts'],

    deps: {
      inline: [/vite-test-utils/],
    },
  },
})
