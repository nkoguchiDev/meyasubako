import "./Home.css";
import { MessageModal, SubjectCard } from "../components/Elements";
export const Home = () => {
    return (
        <div>
            <SubjectCard />
            <div id="messageModal">
                <MessageModal />
            </div>
        </div>
    );
};
