import { defineConfig } from 'vite'

export default defineConfig({
  // 这里的 './' 代表相对路径
  // 这样打包后的 index.html 就能在任何环境下正确找到 JS 和 CSS 了
  base: './', 
})