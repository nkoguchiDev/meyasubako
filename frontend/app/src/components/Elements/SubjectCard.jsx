import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";
import { pink } from "@mui/material/colors";

import { ReplyModal } from "./ReplyModal";

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
                            <CardHeader
                                avatar={
                                    <Avatar
                                        alt={subject.name}
                                        src={`${process.env.PUBLIC_URL}/icon.png`}
                                    />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={subject.name}
                                subheader={subject.date}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {subject.classification}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    aria-label="add to favorites"
                                    sx={{ color: pink[isLike ? 500 : 0] }}
                                    onClick={pushLike}
                                >
                                    <FavoriteIcon />
                                </IconButton>
                                <Typography variant="body2" color="text.secondary">
                                    {subject.name}
                                </Typography>
                                <ReplyModal />
                            </CardActions>
                        </Card>
                    </CardList>
                ))}
            </ul>
        </div>
    );
};
