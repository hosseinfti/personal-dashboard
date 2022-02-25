import React from "react";
import "./style.css"
import {Helmet} from "react-helmet"

function NotFound() {
        return (
            <div className="right-side not-found-container">
            <h1 className="no-result" > 404 Not Found</h1>
            <Helmet>
                <title>مدیریت فعالیت‌ها | صفحه‌ی مورد نظر یافت نشد</title>
            </Helmet>
            </div>
        )
}
export default NotFound