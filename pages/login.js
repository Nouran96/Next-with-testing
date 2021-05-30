import Head from "next/head";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login for next with testing" />
      </Head>

      <Login />
    </div>
  );
}
