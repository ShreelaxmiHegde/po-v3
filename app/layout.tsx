import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreelaxmi Hegde • Full-Stack Developer",
  description:
    "Full Stack Developer specializing in MERN. Building scalable backend systems.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "JavaScript Developer",
    "Web Developer",
    "Node.js Developer",
    "Software Engineer"
  ],
  openGraph: {
    title: "Shreelaxmi Hegde • Full-Stack Developer",
    description:
      "Full Stack Developer building modern web applications with MERN.",
    url: "https://ShreelaxmiHegde.vercel.app",
    siteName: "Shreelaxmi Hegde Portfolio",
    images: [
      {
        url: "/dev-img.png",
        width: 277,
        height: 277
      }
    ],
    locale: "en_US",
    type: "website"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
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
