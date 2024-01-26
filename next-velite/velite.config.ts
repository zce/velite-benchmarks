import { defineConfig, s } from 'velite'

export default defineConfig({
  root: '../content',
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.md',
      schema: s
        .object({
          title: s.string().max(99),
          content: s.markdown()
        })
        .transform((data, { meta: { file } }) => ({ ...data, permalink: `/posts/${file.stem}` }))
    }
  }
})
