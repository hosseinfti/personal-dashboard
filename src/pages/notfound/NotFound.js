import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import notFound from "../../assets/images/notFound/notFound.svg";

function NotFound() {
  return (
    <div className="right-side color-pallete-1 not-found-container">
      <div className="notFound">
        <img className="notFound-icon" src={notFound} alt="not-found" />
        <div className="notFoundFA"> صفحه مورد نظر یافت نشد! </div>
        <div className="notFoundEN">Error 404 - Page Not Found</div>
      </div>
      <Helmet>
        <title>مدیریت فعالیت‌ها | صفحه‌ی مورد نظر یافت نشد</title>
      </Helmet>
    </div>
  );
}
export default NotFound;
