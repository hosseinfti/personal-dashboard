import React from "react";
import { Helmet } from "react-helmet";
import "./aboutThisProject.css";
function AboutThisProject() {
  return (
    <div className="right-side about-project-container">
      <h1 className="about-project-h1">درباره‌ی این پروژه</h1>
      <p className="about-project-p">
        <p>این پروژه با React زده شده .</p>
        یک داشبورد شخصی هست برای مدیریت روتین و بررسی مواردی مانند شرایط آب و
        هوایی ٬ شاخص آلودگی هوا ٬ ساعت و تاریخ و قابلیت های بیشتری که قطعا در
        آینده بهش اضافه میشه.
        <p>
          قالب این پروژه بصورت ساده و دور از شلوغی هست که کاربر در نگاه اولیه
          بصورت کلی طوری همه اطلاعات را در یک نظر داشته باشه که باعث خستگی چشم
          نشه.
          <p>
            {" "}
            ممنونم که با{" "}
            <form action="mailto:hosseinfti@yahoo.com">
              <button className="share-idea"> نظراتتون </button>
            </form>{" "}
            باعث ارتقاء داشبورد شخصی خودتون میشید :)
          </p>
        </p>
      </p>

      <Helmet>
        <title>مدیریت فعالیت‌ها | درباره‌ی این پروژه</title>
      </Helmet>
    </div>
  );
}
export default AboutThisProject;
