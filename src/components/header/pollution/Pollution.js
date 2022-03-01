import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Pollution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airQualityIndex: "درحال بارگذاری...",
      airQualityDescription: "",
      airQualityIcon: "",
    };
  }

  setAirQualityDescription = () => {
    if (
      this.state.airQualityIndex <= 50 &&
      this.state.airQualityIndex !== undefined
    ) {
      this.setState({
        airQualityDescription: "هوا واقعا تمیزه",
        airQualityIcon: "green",
      });
    } else if (
      this.state.airQualityIndex > 50 &&
      this.state.airQualityIndex <= 100
    ) {
      this.setState({
        airQualityDescription: "اونقدرام آلوده نیست",
        airQualityIcon: "yellow",
      });
    } else if (
      this.state.airQualityIndex > 100 &&
      this.state.airQualityIndex <= 150
    ) {
      this.setState({
        airQualityDescription: "یکمی آلودست",
        airQualityIcon: "orange",
      });
    } else if (
      this.state.airQualityIndex > 150 &&
      this.state.airQualityIndex <= 200
    ) {
      this.setState({
        airQualityDescription: "افراد حساس بهتره که بیرون نرن",
        airQualityIcon: "red",
      });
    } else if (
      this.state.airQualityIndex > 200 &&
      this.state.airQualityIndex <= 300
    ) {
      this.setState({
        airQualityDescription: "هوا بسیار آلودست اصلا بیرون نرید",
        airQualityIcon: "red",
      });
    } else if (this.state.airQualityIndex > 300) {
      this.setState({
        airQualityDescription: "آلودگی وحشتناکه",
        airQualityIcon: "red",
      });
    } else {
      this.setState({
        airQualityDescription: undefined,
        airQualityIcon: undefined,
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
    const aqi =
      this.state.airQualityIcon === "green"
        ? require("../../../assets/images/aqi/green.svg").default
        : this.state.airQualityIcon === "yellow"
        ? require("../../../assets/images/aqi/yellow.svg").default
        : this.state.airQualityIcon === "orange"
        ? require("../../../assets/images/aqi/orange.svg").default
        : this.state.airQualityIcon === "red"
        ? require("../../../assets/images/aqi/red.svg").default
        : "";

    // const aqi = require(`../../../assets/images/aqi/${this.state.airQualityIcon}.svg`).default

    return (
      <>
        <div className="card aqi-container color-pallete-3 inset-shadow">
          <div className="aq-index">
            <div className="aqi-index-container">
              <span className="aqi-index">{this.state.airQualityIndex}</span>
              <span className="aqi-title">
                {this.state.airQualityIndex === "درحال بارگذاری..." ||
                this.state.airQualityIndex === undefined
                  ? ""
                  : "(شاخص آلودگی هوا)"}
              </span>
            </div>
            <span
              className={`${
                this.state.airQualityIndex === undefined
                  ? "display-none"
                  : "aqi-des"
              }`}
            >
              {this.state.airQualityDescription}
            </span>
            <span
              className={`${
                this.state.airQualityIndex === undefined
                  ? "undefined-aqi"
                  : "display-none"
              }`}
            >
              شاخص آلودگی این شهر موجود نیست
            </span>
          </div>
          <div className="aq-icon">
            <img
              className={`aq-icon-svg inset-shadow ${
                this.state.airQualityIcon === undefined
                  ? "display-none"
                  : this.state.airQualityIcon
              } `}
              src={aqi}
              alt={this.state.airQualityIcon}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Pollution;
