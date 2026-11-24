
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import UserHome from "./pages/prelogin/user/PreloginUserHome";
import OwnerHome from "./pages/prelogin/hotelowner/PreloginOwnerHome";

import OwnerDashboard from "./pages/postlogin/owner/OwnerDashboard";
import OwnerPersonalInformation from "./pages/postlogin/owner/registration/ownerpersonalinfo";
import PropertyInformation from "./pages/postlogin/owner/registration/propertyinformation";

function App() {
    return (
        <Routes>
            {/* Guest */}
            <Route path="/" element={<UserHome />} />

            {/* Hotel Owner */}
            <Route path="/hotelowner" element={<OwnerHome />} />

            <Route
                path="/owner/dashboard"
                element={<OwnerDashboard />}
            />

            {/* Owner Registration */}
            <Route
                path="/owner/personalinfoform"
                element={
                    <OwnerPersonalInformation
                        email="owner@example.com"
                        onNext={(data) => {
                            console.log("Owner Personal Information:", data);
                        }}
                    />
                }
            />

            <Route
                path="/owner/propertyinfoform"
                element={
                    <PropertyInformation
                        onBack={() => window.history.back()}
                        onNext={(data) => {
                            console.log("Property Information:", data);
                        }}
                    />
                }
            />

            {/* Unknown routes */}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
}

export default App;
