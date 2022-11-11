import * as React from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import { createSubject } from "../../features/api/subject";

export const MessageModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const pushOK = () => {
        const subjectName = document.getElementById("subjectName").value;
        createSubject(subjectName);
        setOpen(false);
    };
    const pushCancel = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ "& > :not(style)": { m: 1 } }} onClick={handleOpen}>
                <Fab variant="extended" color="primary" aria-label="add">
                    <NoteAddIcon sx={{ mr: 1 }} />
                    Post
                </Fab>
            </Box>
            <Dialog open={open} onClose={pushCancel}>
                <DialogTitle>Subject</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ポストするお題を入力してください
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="subjectName"
                        margin="dense"
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        id="subjectDescription"
                        margin="dense"
                        label="Description"
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
