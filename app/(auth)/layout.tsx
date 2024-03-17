import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b-2 p-2 border-slate-200">NextJs Starter</div>
        {children}
      </body>
    </html>
  );
}
