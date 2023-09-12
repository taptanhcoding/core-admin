import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        api: path.resolve(__dirname, './src/api'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        'app:constants': path.resolve(__dirname, './src/constants'),
        hooks: path.resolve(__dirname, './src/hooks'),
        icons: path.resolve(__dirname, './src/icons'),
        interfaces: path.resolve(__dirname, './src/interfaces'),
        layouts: path.resolve(__dirname, './src/layouts'),
        modules: path.resolve(__dirname, './src/modules'),
        pages: path.resolve(__dirname, './src/pages'),
        routes: path.resolve(__dirname, './src/routes'),
        services: path.resolve(__dirname, './src/services'),
        utils: path.resolve(__dirname, './src/utils'),
        styles: path.resolve(__dirname, './src/styles'),
      },
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/styles/variable.scss";',
        },
      },
    },
    server: {
      port: Number(env.PORT),
      proxy: {
        [env.VITE_CLOUD_STORAGE_URL]: {
          target: env.VITE_STORAGE_TARGET,
          changeOrigin: true,
        },
      },
    },
  };
})
