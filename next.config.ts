import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIFエンコードは大きな画像で著しく低速なためWebPのみ生成する
    formats: ["image/webp"],
  },
};

export default nextConfig;
