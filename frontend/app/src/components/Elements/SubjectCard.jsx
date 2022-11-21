import * as React from "react";
import { useEffect } from "react";

import styled from "styled-components";

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

    return (
        <div>
            <ul id="events">
                {subjectList.map((subject, i) => (
                    <CardList id={i} key={i}>
                        <Card variant="outlined" sx={{ maxWidth: 350, margin: "auto" }}>
                            <CardActionArea>
                                <CardContent sx={{ display: "flex" }}>
                                    {SubjectIcon[subject.classification]}
                                    <Typography variant="h5" component="div">
                                        {subject.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </CardList>
                ))}
            </ul>
        </div>
    );
};
