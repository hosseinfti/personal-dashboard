import React from "react";
import "./style.css"
import {Helmet} from "react-helmet"

function NotFound() {
        return (
            <>
            <h1 className="no-result" > 404 Not Found</h1>
            <Helmet>
                <title>مدیریت فعالیت‌ها | صفحه‌ی مورد نظر یافت نشد</title>
            </Helmet>
            </>
        )
}
export default NotFound