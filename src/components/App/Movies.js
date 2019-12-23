import React from "react";
import "./CSS/Movies.css";

export default function lilst({ title, Open }) {
  return (
    <div className="movie">
      <div className="data">
        <a
          href={`https://search.naver.com/search.naver?${encodeURI(
            `sm=top_hty&fbm=1&ie=utf8&query=${title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <h4>영화제목 : {title}</h4>
          <h4>개봉일자 : {Open}</h4>
        </a>
      </div>
    </div>
  );
}
