import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "@/context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
