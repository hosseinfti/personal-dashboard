import React from "react";
import { Helmet } from "react-helmet";
import "./aboutThisProject.css";
function AboutThisProject() {
  return (
    <div className="right-side about-project-container">
      <h1 className="about-project-h1">درباره‌ی این پروژه</h1>
      <p className="about-project-p">
        یک داشبورد شخصی برای مدیریت روتین و بررسی مواردی مانند:
        <br /> شرایط آب و هوایی ٬ شاخص آلودگی هوا ٬ ساعت و تاریخ و قابلیت های
        بیشتری که قطعا در آینده بهش اضافه میشه.
        <p>
          این پروژه با React زده شده ٬ بر پایه کلاس کامپوننت
          <br />
          از local storage برای ذخیره سازی اطلاعات وارد شده توسط کاربر استفاده
          شده.
          <br />
          کل استایل این پروژه بصورت pure css هست و از هیچگونه کتابخانه شخص ثالثی
          استفاده نشده.
          <br />
          جهت دریافت اطلاعات شرایط جوی و آلودگی هوا از Axios استفاده شده <br />
          اطلاعات شرایط آب و هوایی از{" "}
          <a className="api-address" href="https://www.openweather.com"> openweather </a>و شاخص آلودگی
          هوا از <a className="api-address" href="https://waqi.info/"> waqi </a> گرفته می شود.
        </p>
        <p>
          قالب این پروژه بصورت ساده و دور از شلوغی هست 
          <br />
           به‌صورتی‌که در نگاه اولیه
          کاربر طوری همه اطلاعات را در یک نظر داشته باشه که باعث خستگی چشم
          نشه.
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
