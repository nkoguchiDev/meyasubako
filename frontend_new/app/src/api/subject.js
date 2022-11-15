import { axios } from "../lib/axios";

export const createSubject = (name) => {
    return axios.post(
        "/subjects",
        { name },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

export const getSubjectList = (name) => {
    return axios.get("/subjects");
};
