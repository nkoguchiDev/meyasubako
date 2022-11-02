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

// import { getMessageList } from "./../../../features/messages/api/getMessageList";
// import { deleteMessage } from "../../../features/api/messages";
import { ReplyModal } from "./ReplyModal";

const CardList = styled.li`
    display: block;
    margin: 5px;
`;

export const SubjectCard = () => {
    // const navigate = useNavigate();
    // const [events, setEvents] = React.useState([]);

    // useEffect(() => {
    //     return () => {
    //         setMessagesToCards();
    //     };
    // }, []);

    // const setMessagesToCards = () => {
    //     return getMessageList().then(
    //         (result) => setEvents(result),
    //         (error) => navigate("/forbidden")
    //     );
    // };
    // const deleteEventCard = (id) => {
    //     deleteMessage(id);

    //     window.location.reload();
    // };
    const events = [{ name: "what your q ?", content: "description", date: "date" }];
    return (
        <div>
            <ul id="events">
                {events.map((e, i) => (
                    <CardList id={i} key={i}>
                        <Card variant="outlined" sx={{ maxWidth: 350, margin: "auto" }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        alt={e.name}
                                        src={`${process.env.PUBLIC_URL}/icon.png`}
                                    />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={e.name}
                                subheader={e.date}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {e.content}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <ReplyModal />
                            </CardActions>
                        </Card>
                    </CardList>
                ))}
            </ul>
        </div>
    );
};
