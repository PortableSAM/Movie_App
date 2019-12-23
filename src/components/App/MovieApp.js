import React from "react";
import { AppId, TargetDt, URL } from "../lib/index";

export default class MovieApp extends React.Component {
  state = {
    type: "",
    range: "",
    list: [],
    isLoading: true
  };

  getDailyList = async () => {
    fetch(
      `${URL}/searchDailyBoxOfficeList.json?key=${AppId}&targetDt=${TargetDt}`
    )
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        this.setState({
          type: json.boxOfficeResult.boxofficeType,
          range: json.boxOfficeResult.showRange,
          list: json.boxOfficeResult.dailyBoxOfficeList,
          isLoading: false
        });

        console.log(this.state);
      });
  };

  componentDidMount() {
    this.getDailyList();
  }

  render() {
    return <div>Movie App</div>;
  }
}
