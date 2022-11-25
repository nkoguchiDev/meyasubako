import * as React from "react";
import { useEffect } from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { getSubjectList } from "../../features/api/subject";
import { Develop, Operation, Other } from "./Icons";

const CardList = styled.li`
    display: block;
    margin: 5px;
`;

export const SubjectCard = () => {
    const [subjectList, setSubjectList] = React.useState([]);
    const SubjectIcon = {
        develop: <Develop />,
        operation: <Operation />,
        other: <Other />,
    };

    useEffect(() => {
        return () => {
            getSubjectList().then((response) => {
                setSubjectList(response);
            });
        };
    }, []);

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState(open);
    };

    return (
        <div>
            <ul id="subjects">
                {subjectList.map((subject, i) => (
                    <CardList id={i} key={i}>
                        <Card
                            variant="outlined"
                            onClick={toggleDrawer(true)}
                            sx={{ maxWidth: 350, margin: "auto" }}
                        >
                            <CardActionArea>
                                <CardContent sx={{ display: "flex" }}>
                                    {SubjectIcon[subject.classification]}
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{ width: "250px", wordWrap: "break-word" }}
                                    >
                                        {subject.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </CardList>
                ))}
            </ul>
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
        </div>
    );
};
