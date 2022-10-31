import { Route, Routes } from "react-router-dom";

import { Home } from "../pages";

// import { Header } from "../components/layouts/Header";

export const Router = () => {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <>
                        <Home />
                    </>
                }
            />
        </Routes>
    );
};
