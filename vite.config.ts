import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        rollupOptions: {
            input: {
                popup: 'src/views/popup/index.html',
                options: 'src/views/options/index.html',
                devtools: 'src/views/devtools/index.html',
                devtoolsPanelMain: 'src/views/devtools/main/index.html'
            },
        },
    },
})
