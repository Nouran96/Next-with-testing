import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import MainBtn from "../Controls/MainBtn";
import { Router, useRouter } from "next/router";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  const {
    auth: { user },
  } = useSelector((state) => state);

  const router = useRouter();

  return (
    <Container>
      <div className={`d-flex justify-content-between align-items-center`}>
        <div className={`${styles.logoContainer}`}>
          <Image
            src="/assets/next.png"
            alt="Next logo"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {user?.email ? (
          <span>{user.email}</span>
        ) : (
          <MainBtn btnText="Login" onClick={() => router.push("/login")} />
        )}
      </div>
      {children}
    </Container>
  );
};

export default Layout;
