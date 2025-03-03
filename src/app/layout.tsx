"use client";

import "./globals.css";
import { authRoutes } from "@/constants/routes";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NavbarMain from "@/components/navbar/NavbarMain";
import { Button } from "@/components/ui/button";
import {
  X,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  Coffee,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Providers from "./providers";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "@ai-sdk/react";
import { NavigationProvider } from "@/providers/navigation-provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
  const { messages, input, handleSubmit, handleInputChange, status } =
    useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Determine if scrolling down or up
      setIsScrollingDown(currentScrollPosition > lastScrollPosition);

      // Update state for current scroll position
      setScrollPosition(currentScrollPosition);
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`antialiased bg-primaryColor text-textPrimaryColor`}>
        <NavigationProvider>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <link
                href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
                rel="stylesheet"
              ></link>

              {!authRoutes.includes(pathname) && (
                <NavbarMain
                  scrollDown={isScrollingDown}
                  scrollPosition={scrollPosition}
                />
              )}

              <main className="flex-grow flex flex-col items-center w-full">
                <div className="w-full">{children}</div>
              </main>

              <footer className="relative w-full text-white py-16 h-auto md:h-[550px] flex flex-col justify-center items-center">
                <div className="bg-primaryColor absolute w-full h-full inset-0 opacity-15 -z-10">
                  <Image
                    src="https://demo.awaikenthemes.com/html-preview/roast/images/footer-bg-image.jpg"
                    alt="Background"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="container items-center mx-auto px-4 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Contact Us Section */}
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-coffeeBeanColor p-3 mb-4">
                        <PhoneIcon className="w-10 h-10 text-buttonColor" />
                      </div>
                      <h3 className="text-xl uppercase tracking-wider mb-4">
                        Contact Us
                      </h3>
                      <Button
                        variant="outline"
                        className="border-buttonColor text-primaryColor font-semibold text-lg hover:bg-buttonColor/80 rounded-full px-8 bg-buttonColor"
                      >
                        CONTACT US
                      </Button>
                    </div>
                    <div className="w-[2px] h-[200px] bg-slate-600 absolute left-1/3 md:block hidden"></div>
                    {/* Address Section */}
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-coffeeBeanColor p-3 mb-4">
                        <MapPinIcon className="w-10 h-10 text-buttonColor" />
                      </div>
                      <h3 className="text-xl uppercase tracking-wider mb-4">
                        Address
                      </h3>
                      <Button
                        variant="outline"
                        className="border-buttonColor text-primaryColor font-semibold text-lg hover:bg-buttonColor/80 rounded-full px-8 bg-buttonColor"
                      >
                        GET DIRECTION
                      </Button>
                    </div>
                    <div className="w-[2px] h-[200px] bg-slate-600 absolute right-1/3 md:block hidden"></div>
                    {/* Opening Hours Section */}
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-coffeeBeanColor p-3 mb-4">
                        <ClockIcon className="w-10 h-10 text-buttonColor" />
                      </div>
                      <h3 className="text-xl uppercase tracking-wider mb-4">
                        Opening Hours
                      </h3>
                      <Button
                        variant="outline"
                        className="border-buttonColor text-primaryColor font-semibold text-lg hover:bg-buttonColor/80 rounded-full px-8 bg-buttonColor"
                      >
                        RESERVE A TABLE
                      </Button>
                    </div>
                  </div>

                  {/* Logo and Copyright Section */}
                  <div className="flex flex-col md:flex-row items-center justify-center w-full border-t border-slate-600 pt-16 mt-16">
                    <div className="w-full text-xl text-gray-200 mb-4 md:mb-0">
                      Copyright © 2025 All Rights Reserved.
                    </div>

                    <div className="flex items-center gap-2 text-2xl w-full text-textPrimaryColor">
                      <Link href="/">
                        <span className="flex items-center gap-2">
                          <Coffee className="w-10 h-10 text-primaryColor bg-buttonColor rounded-full p-1" />
                          Cafe Corner
                        </span>
                      </Link>
                    </div>

                    <div className="flex mt-4 md:mt-0 gap-4">
                      <Link
                        href="#"
                        className="bg-buttonColor rounded-full p-2 flex items-center justify-center mr-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-black"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="bg-buttonColor rounded-full p-2 flex items-center justify-center mr-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-black"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="bg-buttonColor rounded-full p-2 flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-black"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <div className="fixed bottom-4 right-4  flex flex-col items-end z-[80]">
              {isOpen && (
                <Card className="w-[360px] shadow-xl bg-white">
                  <CardContent className="p-4 flex flex-col space-y-2 justify-center">
                    <div className="flex justify-between items-center cursor-default">
                      <h2 className="text-lg font-semibold">Chat Assistant</h2>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-primaryColor hover:text-black bg-buttonColor rounded-full p-2 hover:bg-buttonHoverColor"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div
                      ref={messagesContainerRef}
                      className="max-h-[280px] min-h-[280px] flex-1 overflow-y-auto p-4 space-y-4 cursor-default"
                    >
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-2 ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <div
                              className="whitespace-pre-wrap break-words text-md"
                              dangerouslySetInnerHTML={{
                                __html: message.content
                                  .replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong>$1</strong>"
                                  ) // **bold**
                                  .replace(/\*(.*?)\*/g, "<i>$1</i>")
                                  .replace(
                                    /`([^`]+)`/g,
                                    "<code class='bg-gray-200 text-red-600 px-1 py-0.5 rounded'>$1</code>"
                                  )
                                  .replace(
                                    /```([\s\S]+?)```/g,
                                    "<pre class='bg-gray-900 text-white p-2 rounded'><code>$1</code></pre>"
                                  )
                                  .replace(
                                    /\n- /g,
                                    "<br /><span class='font-bold'>•</span> "
                                  )
                                  .replace(/\n/g, "<br />"),
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef}></div>
                    </div>
                    <form onSubmit={handleSubmit} className="border-t">
                      <div className="flex gap-2">
                        <Input
                          value={input}
                          onChange={handleInputChange}
                          placeholder="Type your message..."
                          disabled={status !== "ready"}
                          className="flex-1"
                        />
                        <Button
                          type="submit"
                          disabled={status !== "ready" || !input.trim()}
                          className="w-fit bg-primaryColor text-white"
                        >
                          {status !== "ready" ? (
                            <Loader2 className="h-4 w-4 text-white animate-spin" />
                          ) : (
                            <>
                              <Send className="h-4 w-4 text-white" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
              <Button
                className={`rounded-full shadow-lg p-3 bg-buttonColor hover:bg-buttonHoverColor mt-4 w-14 h-14 ${
                  isOpen ? "animate-none" : "animate-bounce"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <MessageCircle className="text-white scale-150" />
              </Button>
            </div>
          </Providers>
        </NavigationProvider>
      </body>
    </html>
  );
}
