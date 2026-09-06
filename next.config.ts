import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIFエンコードは大きな画像で著しく低速なためWebPのみ生成する
    formats: ["image/webp"],
  },
  // 開発中にスマートフォン実機からLAN経由で確認できるようにする。
  // 本番ビルドには影響しない（next dev のみで使われる設定）。
  allowedDevOrigins: ["192.168.11.4"],
};

export default nextConfig;
