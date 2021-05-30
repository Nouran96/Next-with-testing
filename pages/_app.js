import "../styles/globals.css";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (
      router.pathname.split("/")[1] === "login" &&
      typeof Storage !== "undefined" &&
      localStorage.getItem("user_testing")
    )
      router.push("/");
  }, [router.pathname]);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
