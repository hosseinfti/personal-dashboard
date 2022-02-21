import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Pollution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airQualityIndex: "درحال بارگذاری...",
      airQualityDescription: "",
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
          },
          () => this.setAirQualityDescription()
        );
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
  }
  render() {
    // const airindex =
    //   this.state.airQualityIndex === undefined
    //     ? "شاخص آلودگی این شهر موجود نیست"
    //     : this.state.airQualityIndex;
    // const airdescription =
    //   this.state.airQualityIndex === undefined
    //     ? ""
    //     : this.state.airQualityDescription;
    return (
      <>
        <div className="card aqi-container color-pallete-1">
          <div>
            <div className="aqi-index-container">
              <span className="aqi-index">{this.state.airQualityIndex}</span>
              <span className="aqi-title"> { this.state.airQualityIndex === "درحال بارگذاری..." ? "" : "(شاخص آلودگی هوا)"} </span>
            </div>
            <span className="aqi-des">
              {this.state.airQualityIndex === undefined
                ? "شاخص آلودگی این شهر موجود نیست"
                : this.state.airQualityDescription}
            </span>
          </div>
          {/* <div>{airdescription}</div> */}
        </div>
      </>
    );
  }
}
export default Pollution;
