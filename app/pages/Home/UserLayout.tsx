"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { CardProvider } from "@/app/providers/CardContextProvider";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RootLayout(props: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  //error handle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <CardProvider>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Header></Header>
          <div className="">{props.children}</div>
          <Footer></Footer>
          <ToastContainer />
        </ThemeProvider>
      </ChakraProvider>
    </CardProvider>
  );
}
