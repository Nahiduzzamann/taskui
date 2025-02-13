"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
//error handle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Header></Header>
        <div className="">{props.children}</div>
        <Footer></Footer>
      </ThemeProvider>
    </ChakraProvider>
  );
}
