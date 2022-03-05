import React from "react";
import { Helmet } from "react-helmet";
import "./aboutThisProject.css";
function AboutThisProject() {
  return (
    <div className="right-side about-project-container">
      <h1 className="about-project-h1">درباره‌ی این پروژه</h1>
      <p className="about-project-p">
        یک داشبورد شخصی برای مدیریت روتین و بررسی مواردی مانند:
        <br /> شرایط آب و هوایی ، شاخص آلودگی هوا ، ساعت و تاریخ و قابلیت های
        بیشتری که در آینده بهش اضافه می‌شه.
        <p>
        این پروژه بر پایه‌ی کلاس کامپوننت با React زده شده،
          <br />
          از local storage برای ذخیره‌سازی اطلاعات واردشده توسط کاربر استفاده شده،
          <br />
          استایل کلی این پروژه به‌ صورت pure css هست و از هیچ‌گونه کتابخانه شخص ثالثی استفاده نشده،
          <br />
          جهت دریافت اطلاعات شرایط جوی و آلودگی هوا از Axios استفاده شده، <br />
          اطلاعات شرایط آب و هوایی از{" "}
          <a className="api-address" href="https://www.openweather.com"> openweather </a>و شاخص آلودگی
          هوا از <a className="api-address" href="https://waqi.info/"> waqi </a> گرفته می‌شه،
        </p>
        <p>همچنین در این پروژه جهت shareable بودن فیلتر های اعمال شده <br />یا سرچ انجام شده،از queryString استفاده شده .</p>
        <p>
          قالب این پروژه بصورت ساده و دور از شلوغی‌ست،
          <br />
          به‌صورتی‌که در نگاه اولیه کاربر همه‌ی اطلاعات را در یک نظر داشته باشه که باعث خستگی چشم هم نشه.
          <p>
            {" "}
            در انتها هم ممنونم که با{" "}
            <form action="mailto:hosseinfti@yahoo.com">
              <button className="share-idea"> نظراتتون </button>
            </form>{" "}
            باعث ارتقاء داشبورد شخصی خودتون میشید :)
          </p>
        </p>
      </p>

      <Helmet>
        <title>داشبورد شخصی | درباره‌ی این پروژه</title>
      </Helmet>
    </div>
  );
}
export default AboutThisProject;
