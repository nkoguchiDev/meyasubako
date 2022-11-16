import { axios } from "../../lib/axios";

export const createSubject = (name, classification) => {
    return axios.post(
        "/subjects",
        { name, classification },
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
