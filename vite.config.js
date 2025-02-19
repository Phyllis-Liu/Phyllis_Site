import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        target: 'es2020', // 或 'esnext'
        minify: 'terser',
        terserOptions: {
            ecma: 2020,
        },
    },
});