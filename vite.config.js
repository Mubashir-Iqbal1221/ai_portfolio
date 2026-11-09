import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';

// Every .html file in these folders becomes a page in the build.
// Add a case study or a blog post by dropping an .html file into case/ or writing/.
const pages = { index: resolve(import.meta.dirname, 'index.html') };
for (const dir of ['case', 'writing']) {
  for (const file of readdirSync(resolve(import.meta.dirname, dir))) {
    if (file.endsWith('.html')) {
      pages[`${dir}/${file.replace(/\.html$/, '')}`] = resolve(import.meta.dirname, dir, file);
    }
  }
}

export default defineConfig({
  // Relative paths, so the build works at a domain root and under /repo-name/ on GitHub Pages.
  base: './',
  server: { port: 8080, strictPort: true, open: false },
  preview: { port: 8080, strictPort: true },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: { input: pages },
  },
});
