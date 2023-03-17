import React from "react";
import "../styles/Portfolio.scss";

export default function Portfolio({ children }) {
  return (
    <div className="portfolio-main" name="portfolio">
      <h1 className="p-h1">PORTOFLIO</h1>
      <div class="container">
        <div class="cards">
          <div class="card">1</div>
          <div class="card">2</div>
          <div class="card">3</div>
          <div class="card">4</div>
          <div class="card">5</div>
          <div class="card">6</div>
          <div class="card">7</div>
          <div class="card">8</div>
          <div class="card">9</div>
          <div class="card">10</div>
          <div class="card">11</div>
          <div class="card">12</div>
        </div>
      </div>
    </div>
  );
}
