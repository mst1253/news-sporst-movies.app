"use client"
import "./globals.css"
import Menu from "../compons/Menu";
import { QueryClient,QueryClientProvider } from "react-query";

export default function RootLayout({ children }) {
  const queryClient=new QueryClient()

  return (
     <html lang="ar">
      <head>
      <title>news app</title>
      <meta property="og:description" content="app for diffrent news" />
      </head>
       <body>
        <div className='relative w-full h-full dark:bg-slate-800'>
        <QueryClientProvider client={queryClient}>
           <Menu />
           {children}
        </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
