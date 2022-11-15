import styles from "./App.module.css";

import { SubjectModal } from "./components/Elements";

function App() {
    return (
        <div>
            <div class={styles.Modal}>
                <SubjectModal />
            </div>
        </div>
    );
}

export default App;
