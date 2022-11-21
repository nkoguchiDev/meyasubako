import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";

import { getSubjectList } from "../../features/api/subject";

const CardList = styled.li`
    display: block;
    margin: 5px;
`;

export const SubjectCard = () => {
    const navigate = useNavigate();
    const [subjectList, setSubjectList] = React.useState([]);
    const [isLike, setIsLike] = React.useState(false);

    useEffect(() => {
        return () => {
            getSubjectList().then((response) => {
                setSubjectList(response);
            });
        };
    }, []);

    const pushLike = () => {
        setIsLike(isLike ? false : true);
    };

    return (
        <div>
            <ul id="events">
                {subjectList.map((subject, i) => (
                    <CardList id={i} key={i}>
                        <Card variant="outlined" sx={{ maxWidth: 350, margin: "auto" }}>
                            <CardActionArea>
                                <CardContent sx={{ display: "flex" }}>
                                    <BuildIcon sx={{ marginRight: "5px" }} />
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
