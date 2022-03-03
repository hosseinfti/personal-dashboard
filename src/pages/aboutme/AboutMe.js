import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./aboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="right-side about-me-container">
        <h1 className="about-me-h1">درباره‌ی حسین</h1>
        <p className="about-me-p">
          <span className="article-date">نوشته شده درتاریخ (1400/12/12)</span>
          <div>سلام حسین فتحی هستم ۲۵ سالمه</div>
          <p>
            از ۲۰ سالگی مشغول کار حسابداری شدم. تقریبا ۱۰ سال پیش قرار بود برای
            انتخاب رشته به هنرستان برم و کامپیوتر بخونم٬ ولی ظرفیت تکمیل شده بود
            و کشیده شدم توی مسیر حسابداری (که اولویت دوم من بود).
          </p>
          <p>
            حدود ۴ ماه پیش تصمیم گرفتم که برگردم به سمت علاقه اصلیم و دوباره
            شانسمو امتحان کنم که خداروشکر با انگیزه و پشت کاری که داشتم تونستم
            خودم رو ثابت قدم نشون بدم و با کمک دو دوست عزیزم محمد و عماد (که تا
            ابد ممنون الطافشون هستم) مسیر درست رو پیش بگیرم.
            <p>
              الان تقریبا یه جونیور هستم با یه رزومه ی کوچیک که شامل این پروژه
              که یک داشبورد شخصی هست و یک پروژه دیگه میشه که مربوط به{" "}
              <a href="https://hosseinfti.github.io/crypto-currency/#/">
                {" "}
                crypto{" "}
              </a>{" "}
              هست
              <p>
                {" "}
                خوشحال میشم ملاحظه کنید و نظرتون رو باهام به{" "}
                <form action="mailto:hosseinfti@yahoo.com">
                  <button> اشتراک </button>
                </form>{" "}
                بگذارید
              </p>
            </p>
          </p>
        </p>
        <Helmet>
          <title>مدیریت فعالیت‌ها | درباره‌ی من</title>
          <link rel="icon" type="image/x-icon" href="./checklist-icon.png" />
        </Helmet>
      </div>
    );
  }
}
export default AboutMe;
