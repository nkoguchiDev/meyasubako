import "./Home.css";
import { SubjectModal, SubjectCard, TemporaryDrawer } from "../components/Elements";
export const Home = () => {
    return (
        <div>
            <TemporaryDrawer />
            <SubjectCard />
            <div id="SubjectModal">
                <SubjectModal />
            </div>
        </div>
    );
};
