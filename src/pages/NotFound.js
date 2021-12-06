import React from "react";
import {Helmet} from "react-helmet"

function NotFound() {
        return (
            <>
            <h1 className="warning" > 404 Not Found</h1>
            <Helmet>
                <title>مدیریت فعالیت‌ها | صفحه‌ی مورد نظر یافت نشد</title>
            </Helmet>
            </>
        )
}
export default NotFound