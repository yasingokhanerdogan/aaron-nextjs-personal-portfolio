import React from "react";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { SidebarContextProvider } from "../context";

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SidebarContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarContextProvider>
    </ThemeProvider>
  );
};

export default App;
