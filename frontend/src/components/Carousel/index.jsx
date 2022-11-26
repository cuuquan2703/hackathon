import React from "react";
import "./style.css";
const Carousel = (props) => {
  return (
    <div id="carousel">
      <div className="bd-example">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./opened-book-4.jpg" class="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <div className="carousel-caption-review">
                    <h4>"Vì lợi ích mười năm trồng cây. Vì lợi ích trăm năm trồng người."</h4>
                    <h5>
                      Chủ tịch Hồ Chí Minh
                    </h5>
                  </div>
                  <img
                    className="animate__animated animate__fadeInUpBig"
                    src={props.carousel1}
                    alt=""
                  />
              </div>
            </div>
            <div className="carousel-item">
              <img src="/mountains.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <div className="carousel-caption-review">
                  <h4>"Đọc sách hay cũng giống như trò chuyện với các bộ óc tuyệt vời nhất của những thế kỷ đã trôi qua.”
</h4>
                  <h5>René Descartes.</h5>
                </div>
                <img
                  className="animate__animated animate__fadeInUpBig"
                  src={props.carousel2}
                  alt=""
                />
                
              </div>
            </div>
            <div className="carousel-item">
              <img src="/mountains-1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <div className="carousel-caption-review">
                  <h4>"Việc đọc rất quan trọng. Nếu bạn biết cách đọc, cả thế giới sẽ mở ra cho bạn.” </h4>
                  <h5>Barack Obama.</h5>
                </div>
                <img
                  className="animate__animated animate__fadeInUpBig"
                  src={props.carousel3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
