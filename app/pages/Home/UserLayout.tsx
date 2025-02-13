'use client'

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Header></Header>

        <div>{props.children}</div>
        <Footer></Footer>
      </ThemeProvider>
    </ChakraProvider>
  );
}
