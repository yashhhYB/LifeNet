
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nevaweb.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.hdqwalls.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'anthonyawaken.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firstaidsuppliesonline.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd36tnp772eyphs.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'reliancehomecomfort.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'data1.ibtimes.co.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
