import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import BuildIcon from "@mui/icons-material/Build";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import { blue, cyan, yellow } from "@mui/material/colors";

export const Develop = () => {
    return (
        <div>
            <AutoFixHighIcon sx={{ color: blue[500], marginRight: "13px" }} />
        </div>
    );
};

export const Operation = () => {
    return (
        <div>
            <BuildIcon sx={{ color: cyan[500], marginRight: "13px" }} />
        </div>
    );
};

export const Other = () => {
    return (
        <div>
            <SentimentSatisfiedAltIcon sx={{ color: yellow[500], marginRight: "13px" }} />
        </div>
    );
};
