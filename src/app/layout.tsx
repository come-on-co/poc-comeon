"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: "https://staging-graphql.come-on.co/v1/graphql",
//   }),
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ApolloProvider client={client}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    // </ApolloProvider>
  );
}
