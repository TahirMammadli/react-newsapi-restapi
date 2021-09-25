import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
const ModalOverlay = (props) => {
    return(
        <div className={styles['modal-overlay']}>
            {props.children}
        </div>
        )
}
const Backdrop = (props) => {
    return(
        <div onClick={props.onCloseModal} className={styles['backdrop']}>            
        </div>
    )
}
const Modal = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modal'))}
            {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, document.getElementById('modal'))}
        </div>
    )
}

export default Modal
