import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import MainBtn from "../Controls/MainBtn";
import { Router, useRouter } from "next/router";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Auth/actions";

const Layout = ({ children }) => {
  const {
    auth: { user },
  } = useSelector((state) => state);

  const router = useRouter();

  const dispatch = useDispatch();

  return (
    <Container>
      <div className={`d-flex justify-content-between align-items-center mb-3`}>
        <div className={`${styles.logoContainer}`}>
          <Image
            src="/assets/next.png"
            alt="Next logo"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {user?.email ? (
          <div className="d-flex">
            <span>{user.email}</span>
            <span
              className={`${styles.logout} mx-2`}
              onClick={() => dispatch(logout())}
            >
              Logout
            </span>
          </div>
        ) : (
          <MainBtn btnText="Login" onClick={() => router.push("/login")} />
        )}
      </div>
      {children}
    </Container>
  );
};

export default Layout;
