import React, { Component } from "react";
import axios from "axios";

class Pollution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airQualityIndex: "درحال بارگذاری...",
      airQualityDescription: "درحال بارگذاری...",
    };
  }

  setAirQualityDescription = () => {
    if (
      this.state.airQualityIndex <= 50 &&
      this.state.airQualityIndex !== undefined
    ) {
      this.setState({
        airQualityDescription: "هوا واقعا تمیزه",
      });
    } else if (
      this.state.airQualityIndex > 50 &&
      this.state.airQualityIndex <= 100
    ) {
      this.setState({
        airQualityDescription: "اونقدرام آلوده نیست",
      });
    } else if (
      this.state.airQualityIndex > 100 &&
      this.state.airQualityIndex <= 150
    ) {
      this.setState({
        airQualityDescription: "یکمی آلودست",
      });
    } else if (
      this.state.airQualityIndex > 150 &&
      this.state.airQualityIndex <= 200
    ) {
      this.setState({
        airQualityDescription: "افراد حساس بهتره که بیرون نرن",
      });
    } else if (
      this.state.airQualityIndex > 200 &&
      this.state.airQualityIndex <= 300
    ) {
      this.setState({
        airQualityDescription: "هوا بسیار آلودست اصلا بیرون نرید",
      });
    } else if (this.state.airQualityIndex > 300) {
      this.setState({
        airQualityDescription: "آلودگی وحشتناکه",
      });
    }
  };

  getPollutionData = () => {
    axios
      .get(
        `https://api.waqi.info/feed/${this.props.aqiCity}/?token=ae82ff185e0d9aed5712e12cbe2706cc8519a9fc`
      )
      .then((response) => response.data)
      .then((data) => data.data)
      .then((newData) => newData.aqi)
      .then((aqi) => {
        // if (aqi <= 50) {
        this.setState(
          {
            airQualityIndex: aqi,
            // airQualityDescription: "هوا واقعا تمیزه",
          },
          () => this.setAirQualityDescription()
        );
        // } else if (aqi > 50 && aqi <= 100) {
        //   this.setState({
        //     airQualityIndex: aqi,
        //     // airQualityDescription: "اونقدرام آلوده نیست",
        //   });
        // } else if (aqi > 100 && aqi <= 150) {
        //   this.setState({
        //     airQualityIndex: aqi,
        //     // airQualityDescription: "یکمی آلودست",
        //   });
        // } else if (aqi > 150 && aqi <= 200) {
        //   this.setState({
        //     airQualityIndex: aqi,
        //     // airQualityDescription: "افراد حساس بهتره که بیرون نرن",
        //   });
        // } else if (aqi > 200 && aqi <= 300) {
        //   this.setState({
        //     airQualityIndex: aqi,
        //     // airQualityDescription: "هوا بسیار آلودست اصلا بیرون نرید",
        //   });
        // } else if (aqi > 300) {
        //   this.setState({
        //     airQualityIndex: aqi,
        //     // airQualityDescription: "آلودگی وحشتناکه",
        //   });
        // }
      })
      .catch(Error("اطلاعات این شهر موجود نیست"));
  };
  componentDidMount() {
    this.getPollutionData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getPollutionData();
    }
    // this.getPollutionData()
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
    const airindex =
      this.state.airQualityIndex === undefined
        ? "شاخص آلودگی این شهر موجود نیست"
        : `شاخص آلودگی هوا :${this.state.airQualityIndex}`;
    const airdescription =
      this.state.airQualityIndex === undefined
        ? ""
        : this.state.airQualityDescription;
    return (
      <>
        <span>{airindex}</span>
        <div>{airdescription}</div>
      </>
    );
  }
}
export default Pollution;
