import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.mjs', '.vue', '.json', '.less', '.css']
    },
    css: {
        preprocessorOptions: {
            less: {
                // 开启 JavaScript 支持，这样可以在 Less 文件中使用 JavaScript 表达式
                javascriptEnabled: true,
                // 严格模式设置为 false，避免一些不必要的语法检查错误
                strictMath: false,
                // 启用源映射，方便调试
                sourceMap: {
                    inline: true
                }
            }
        }
    }
});
