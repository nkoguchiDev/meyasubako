import * as React from "react";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";

export const ReplyModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const pushOK = () => {
        const message = document.getElementById("message").value;
        const apikey = document.getElementById("apikey").value;
        const isPublish = document.getElementById("isPublish").checked;
        console.log(message, apikey, isPublish);
        setOpen(false);
    };
    const pushCancel = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="reply bottun" onClick={handleOpen}>
                <ChatRoundedIcon />
            </IconButton>
            <Dialog open={open} onClose={pushCancel}>
                <DialogTitle>Message</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ポストするメッセージを入力してください
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="message"
                        margin="dense"
                        label="本文"
                        variant="outlined"
                        multiline
                        fullWidth
                        minRows={10}
                        maxRows={20}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={pushCancel}>Cancel</Button>
                    <Button onClick={pushOK}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
