import React from "react";
import Project from "./Components/Pages/Project/Project";
import Wanted from "./Components/Pages/Wanted/Wanted";
import Password from "./Components/Pages/Forget/ChangePassword/Password";
import Forget from "./Components/Pages/Forget/Forget";
import Home from "./Components/Pages/Home/Home";
import Contuct_us from "./Components/Pages/Contact_us/Contuct_us";
import Signup from "./Components/Pages/Sign_up/Signup";
import Signin from "./Components/Pages/Sign_in/SignIn";
import Blog from "./Components/Pages/Blog/Blog";
import Buy from "./Components/Pages/Buy/Buy";
import Rent from "./Components/Pages/Rent/Rent";
import LSign from "./Components/Pages/Lawyer_signup/LSign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Story from "./Components/Pages/Story/Story";
import Sell from "./Components/Pages/Sell/Sell";
import SellAgreement from "./Components/Pages/Agreement/SellAgreement/SellAgreement";
import RentAgreement from "./Components/Pages/Agreement/RentAgreement/RentAgreement";
import SingleProject from "./Components/Pages/Single_project/SingleProject";
import SingleProperty from "./Components/Pages/Single_Property/SingleProperty";
import Email from "./Components/Pages/Verify/Email/Email";
import OTP from "./Components/Pages/Verify/OTP/OTP";
import Success from "./Components/Pages/Verify/Success/Success";
import RentSingleProperty from "./Components/Pages/Single_Property/ForRent/RentSingleProperty";
import DashHome from "./Dashboard/DashHome/DashHome";
import Active from "./Dashboard/DashMyadd/Active";
import InActive from "./Dashboard/DashMyadd/InActive";
import Expire from "./Dashboard/DashMyadd/Expire";
import Draft from "./Dashboard/DashMyadd/Draft";
import Delete from "./Dashboard/DashMyadd/Delete";
import DeleteAccount from "./Dashboard/DashMembership/DeleteAccount";
import Profile from "./Dashboard/DashMembership/Profile";
import ChangePassword from "./Dashboard/DashMembership/ChangePassword";
import Favorurite from "./Dashboard/DashFavourite/Favorurite";
import HairLawyer from "./Components/Pages/HairLawyer/HairLawyer";
import AuthorizedLawyer from "./Dashboard/DashAuthorizedLawyer/AuthorizedLawyer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wanted" element={<Wanted />} />
        <Route path="/contuctus" element={<Contuct_us />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/story" element={<Story />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sellagreement" element={<SellAgreement />} />
        <Route path="/rentagreement" element={<RentAgreement />} />
        <Route path="/singleproject" element={<SingleProject />} />
        <Route path="/singleproperty" element={<SingleProperty />} />
        <Route path="/rentsingleproperty" element={<RentSingleProperty />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lsign" element={<LSign />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/success" element={<Success />} />
        <Route path="/password" element={<Password />} />
        <Route path="/dashhome" element={<DashHome />} />
        <Route path="/activeads" element={<Active />} />
        <Route path="/inactiveads" element={<InActive />} />
        <Route path="/expireads" element={<Expire />} />
        <Route path="/draftads" element={<Draft />} />
        <Route path="/deleteads" element={<Delete />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/favourite" element={<Favorurite />} />
        <Route path="/lawyer" element={<HairLawyer />} />
        <Route path="/authorizedlawyer" element={<AuthorizedLawyer />} />
      </Routes>
    </Router>
  );
}

export default App;
