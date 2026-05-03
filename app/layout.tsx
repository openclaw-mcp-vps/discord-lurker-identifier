import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Lurker Identifier – Find Your High-Value Silent Members",
  description: "Identify valuable lurkers in your Discord community. Analyze member activity and engage silent members with high potential."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4545ac01-676e-43b2-bc33-968009b45e1d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
