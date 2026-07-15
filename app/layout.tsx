
import { DM_Sans  } from "next/font/google";
import ScrollProvider from "@/components/provider/ScrollProvider"; 
import "./globals.css";
import Loader from "@/components/loader";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={dmSans.variable}
    >
      <body className="min-h-full flex flex-col">
       <ScrollProvider>
         <Loader />
          {children}
        </ScrollProvider>
        </body>
    </html>
  );
}