import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import DeleteAccount from "./pages/DeleteAccount";

export const SiteRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/DeleteAccount" element={<DeleteAccount />} />
                <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}
export default SiteRoutes;