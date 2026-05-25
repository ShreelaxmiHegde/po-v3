import "./globals.css";
import { siteMetadata } from "@/lib/metadata";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <div className="
            fixed inset-0 
            -z-10 
            bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)]
            bg-[size:40px_40px]
            opacity-20
          ">
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
