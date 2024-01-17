import React from 'react'
import Modal from '@mui/material/Modal';
import classes from './form-modal.module.css'


export default function FormModal({ open, handleClose }:
    { open: boolean, handleClose: any }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.container}>
                    <h3 className={classes.title}>Create a post</h3>
                    <div className={classes.user_infor}>
                        <img className={classes.avatar}
                            src='https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg' />
                        <p>Tài phiệt no name</p>
                    </div>
                    <div className={classes.textbox}>
                        <div
                            className={classes.content}
                            placeholder="Tell us what are you thinking... ^^"
                            role="textbox"
                            contentEditable="true"
                            aria-multiline="true"
                            aria-labelledby="txtboxMultilineLabel"
                            aria-required="true"></div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}
