import { defineConfig } from 'vitest/config'
import ConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [ConfigPaths()],
  test: {
    environmentMatchGlobs: [
      ['./src', 'test']
    ]
  }
})