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
          <div>سلام حسین فتحی هستم و ۲۵ سالمه</div>
          <p>
            به حوزه‌ی کامپیوتر علاقه‌مندم، <br />
            اما از ۲۰ سالگی در حوزه‌ی حسابداری مشغول به کار شدم. ماجرا از
            اونجایی شروع شد که ۱۰ سال پیش قرار بود برای انتخاب رشته به هنرستان
            برم و کامپیوتر بخونم، اما متاسفانه ظرفیت تکمیل شد و روی اولویت دوم
            خودم یعنی حسابداری سرمایه‌گذاری کردم و مشغول به تحصیل شدم.
          </p>
          <p>
            از اون روزا که بگذریم، حدودا ۴ ماه پیش تصمیم بزرگی گرفتم که به سمت
            علاقه‌ی همیشگی‌ام یعنی حوزه کامپیوتر برگردم و شانسم رو دوباره امتحان
            کنم. شکرِ خدا با انگیزه و پشتکاری که در این مدت زمان کم داشتم،
            تونستم خودم رو ثابت قدم نشون بدم و با کمک دو دوست عزیزم محمد و عماد
            (که تا ابد ممنون الطافشون هستم) مسیر درست رو انتخاب کنم.
            <p>
              <p>
                در ابتدای مسیر از HTML و CSS شروع کردم و همین‌طور در ادامه
                مفاهیم اصلی javaScript رو خوندم و بعد از اون React رو شروع کردم.
                <br />
                هم‌چنین برای مطالعه‌ی هرکدوم از منابع زبان اصلی مربوط به خودشون
                استفاده کردم. <br />
              </p>
              در حال حاضر یک Front-End Developer هستم، با رزومه‌‌ای شامل این پروژه
              که یک داشبورد شخصیه و یک پروژه‌ی دیگه که مربوط به{" "}
              <a href="https://hosseinfti.github.io/crypto-currency/#/">
                {" "}
                crypto{" "}
              </a>{" "}
              هست!
              <p>
                {" "}
                خوشحال میشم این پروژه هارو ببینید و نظرتون رو بامن به{" "}
                <form action="mailto:hosseinfti@yahoo.com">
                  <button className="share-idea"> اشتراک </button>
                </form>{" "}
                بذارید
              </p>
            </p>
          </p>
        </p>
        <Helmet>
          <title>داشبورد شخصی | درباره‌ی من</title>
        </Helmet>
      </div>
    );
  }
}
export default AboutMe;
