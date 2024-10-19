/** @type {import('next').NextConfig} */
import CopyPlugin from 'copy-webpack-plugin';

const nextConfig = {
    webpack: (config, {}) => {
        config.plugins.push(
          new CopyPlugin({
            patterns: [
              { 
                from: 'node_modules/govuk-frontend/dist/govuk/assets',
                to: '../public/assets'
              }
            ]
          })
        )
        return config
      }
};

export default nextConfig;
