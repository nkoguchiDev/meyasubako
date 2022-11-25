import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export function TemporaryDrawer() {
    return (
        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
            <Box
                sx={{ width: 400 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <Card
                    variant="outlined"
                    onClick={toggleDrawer(true)}
                    sx={{ maxWidth: 350, margin: "auto" }}
                >
                    <CardActionArea>
                        <CardContent sx={{ display: "flex" }}>
                            <Typography
                                variant="body1"
                                sx={{ width: "320px", wordWrap: "break-word" }}
                            >
                                nfoemfioamdpwdkopa,mfoegreagregsrthrtshthregresahshberth
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Drawer>
    );
}
