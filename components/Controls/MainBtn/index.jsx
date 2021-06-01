import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.scss";

const MainBtn = ({ btnText, ...props }) => {
  return (
    <Button classes={{ root: styles.mainBtn }} {...props}>
      {btnText}
    </Button>
  );
};

export default MainBtn;
