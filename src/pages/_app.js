import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { ThemeProvider } from "util/theme";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <>
          <Navbar
            color="default"
            logo="/logo-dark.png"
            logoInverted="logo-dark.png"
          />

          <Component {...pageProps} />

          <Footer
            bgColor="light"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            description="The Web3 creator profile."
            copyright={`© ${new Date().getFullYear()} Pulse`}
            logo="/logo-dark.png"
            logoInverted="logo-dark.png"
            sticky={true}
          />
        </>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
