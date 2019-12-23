import React from "react";
import { AppId, TargetDt, URL } from "../lib/index";
import Movies from "./Movies";

export default class MovieApp extends React.Component {
  state = {
    type: "",
    range: "",
    list: [],
    isLoading: true
  };

  getDailyList = async () => {
    try {
      fetch(
        `${URL}/searchDailyBoxOfficeList.json?key=${AppId}&targetDt=${TargetDt}`
      )
        .then(res => res.json())
        .then(json => {
          //console.log(json);
          this.setState({
            type: json.boxOfficeResult.boxofficeType,
            range: json.boxOfficeResult.showRang,
            list: json.boxOfficeResult.dailyBoxOfficeList,
            isLoading: false
          });

          console.log(this.state);
        });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getDailyList();
  }

  render() {
    const { type, range, list, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">
              <h2>Data Loading</h2>
            </span>
          </div>
        ) : (
          <div>
            <div className="type">
              <h3>{type}</h3>
            </div>
            <h5>Date: {range}</h5>
            <div className="movies">
              {list.map((list, index) => (
                <Movies
                  id={list.id}
                  key={index}
                  title={list.movieNm}
                  Open={list.openDt}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
