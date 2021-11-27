import React, { Component } from "react";
import axios from "axios";

class Pollution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.aqiCity,
      airQualityIndex: undefined,
      airQualityDescription: undefined,
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.waqi.info/feed/${this.state.city}/?token=ae82ff185e0d9aed5712e12cbe2706cc8519a9fc`
      )
      .then((response) => {
        let index = response.data.data.aqi;
        if (response.request.status === 200) {
          if (index <= 50) {
            this.setState({
              airQualityIndex: response.data.data.aqi,
              city: this.props.aqiCity,
              airQualityDescription: "هوا واقعا تمیزه",
            });
          } else if (index > 50 && index <= 100) {
            this.setState({
              airQualityIndex: response.data.data.aqi,
              city: this.props.aqiCity,
              airQualityDescription: "اونقدرام آلوده نیست",
            });
          } else if (index > 100 && index <= 150) {
            this.setState({
              airQualityIndex: response.data.data.aqi,
              city: this.props.aqiCity,
              airQualityDescription: "یکمی آلودست",
            });
          } else if (index > 150 && index <= 200) {
            this.setState({
              airQualityIndex: response.data.data.aqi,
              city: this.props.aqiCity,
              airQualityDescription: "افراد حساس بهتره که بیرون نرن",
            });
          } else if (index > 200 && index <= 300) {
            this.setState({
              airQualityIndex: response.data.data.aqi,
              city: this.props.aqiCity,
              airQualityDescription: "هوا بسیار آلودست اصلا بیرون نرید",
            });
          } else if (index > 300) {
            this.setState({
              airQualityIndex: response.data.data.aqi,
              city: this.props.aqiCity,
              airQualityDescription: "آلودگی وحشتناکه",
            });
          }
        }else {this.setState({
          airQualityIndex: "درحال بارگذاری",
          city: "درحال بارگذاری",
          airQualityDescription: "درحال بارگذاری"
        })}
      })
      .catch(Error("اطلاعات این شهر موجود نیست"));
  }

  componentDidUpdate() {
    axios
      .get(
        `https://api.waqi.info/feed/${this.state.city}/?token=ae82ff185e0d9aed5712e12cbe2706cc8519a9fc`
      )
      .then((response) => {
        if(response.request.status === 200){
        let index = response.data.data.aqi;
        if (index <= 50) {
          this.setState({
            airQualityIndex: response.data.data.aqi,
            city: this.props.aqiCity,
            airQualityDescription: "هوا واقعا تمیزه",
          });
        } else if (index > 50 && index <= 100) {
          this.setState({
            airQualityIndex: response.data.data.aqi,
            city: this.props.aqiCity,
            airQualityDescription: "اونقدرام هوا آلوده نیست",
          });
        } else if (index > 100 && index <= 150) {
          this.setState({
            airQualityIndex: response.data.data.aqi,
            city: this.props.aqiCity,
            airQualityDescription: "هوا یکمی آلودست",
          });
        } else if (index > 150 && index <= 200) {
          this.setState({
            airQualityIndex: response.data.data.aqi,
            city: this.props.aqiCity,
            airQualityDescription: "افراد حساس بهتره که بیرون نرن",
          });
        } else if (index > 200 && index <= 300) {
          this.setState({
            airQualityIndex: response.data.data.aqi,
            city: this.props.aqiCity,
            airQualityDescription: "هوا بسیار آلودست اصلا بیرون نرید",
          });
        } else if (index > 300) {
          this.setState({
            airQualityIndex: response.data.data.aqi,
            city: this.props.aqiCity,
            airQualityDescription: "آلودگی وحشتناکه",
          });
        }
      }else{this.setState({
        airQualityIndex: "درحال بارگذاری",
        city: "درحال بارگذاری",
        airQualityDescription: "درحال بارگذاری"
      })}
      })
      .catch(Error("اطلاعات این شهر موجود نیست"));

    // let aqi = this.state.airQualityIndex;
    // switch (aqi) {
    //   case aqi <= 50:
    //     this.setState({
    //       airQualityDescription: "Good",
    //     });
    //     break;
    //   case 101 > aqi > 50:
    //     this.setState({
    //       airQualityDescription: "Moderate",
    //     });
    //     break;
    //   case 150 > aqi > 101:
    //     this.setState({
    //       airQualityDescription: "Unhealthy for Sensitive Groups",
    //     });
    //     break;
    //   case 200 > aqi > 151:
    //     this.setState({
    //       airQualityDescription: "Unhealthy",
    //     });
    //     break;
    //   case 300 > aqi > 201:
    //     this.setState({
    //       airQualityDescription: "Very Unhealthy",
    //     });
    //     break;
    //   case aqi > 300:
    //     this.setState({
    //       airQualityDescription: "Hazardous",
    //     });
    //     break;
    //   default:
    //     this.setState({
    //       airQualityDescription: "Take care",
    //     });
    //     break;
    // }
  }
  render() {
    return (
      <>
        <span>شاخص آلودگی هوا: {this.state.airQualityIndex}</span>
        <div>{this.state.airQualityDescription}</div>
      </>
    );
  }
}
export default Pollution;
