import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export function TemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <p>hi</p>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>{"right"}</Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list("right")}
            </Drawer>
        </div>
    );
}
