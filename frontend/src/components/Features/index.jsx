import React from "react";
import "./style.css";
const Feature = () => {
  return (
    <div className="features">
      <div className="container features__container">
        <div className="feature__title">
          <h2>Gói hội viên</h2>
          <p>Sẽ xuất hiện sau</p>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="feature__item">
              <i className="fa fa-paint-brush"></i>
              <h3>3 Tháng</h3>
              <p>
                99.000 VND
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="feature__item">
              <i className="fa fa-paint-brush"></i>
              <h3>6 Tháng</h3>
              <p>
                159.000 VND
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="feature__item">
              <i className="fa fa-paint-brush"></i>
              <h3>12 Tháng</h3>
              <p>
                299.000 VND
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
