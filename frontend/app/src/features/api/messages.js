import { axios } from "/app/src/lib/axios";

export const createMessage = (content, secret, isPublish) => {
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
