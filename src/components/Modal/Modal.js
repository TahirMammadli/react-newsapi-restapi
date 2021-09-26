import React, {useContext} from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import NewsContext from "../../store/news-context";
const ModalOverlay = (props) => {
  const ctx = useContext(NewsContext);
  console.log(ctx.isLoading)
  return (
    <div className={ctx.isLoading ? styles["modal-overlay"] : styles["modal-overlay2"]}>{props.children}</div>
  )
};
const Backdrop = (props) => {
  return (
    <div onClick={props.onCloseModal} className={styles["backdrop"]}></div>
  );
};
const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default Modal;
