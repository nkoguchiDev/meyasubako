import { axios } from "/app/src/lib/axios";

export const createMessage = (secret, isPublish, content) => {
    return axios.post(
        "/messages",
        { content },
        {
            params: {
                secret: secret,
                isPublish: isPublish,
            },
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        }
    );
};

export const getMessageList = () => {
    return axios.get("/messages", {
        withCredentials: true,
    });
};
