import "./Home.css";
import { SubjectModal, SubjectCard } from "../components/Elements";
export const Home = () => {
    return (
        <div>
            <SubjectCard />
            <div id="SubjectModal">
                <SubjectModal />
            </div>
        </div>
    );
};
