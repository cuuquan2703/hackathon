import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div class="footer">
        <div class="footer__content">
            <div class="footer__about">
                <h3><span className="web">Eco</span>Book - Another way to plant tree</h3>
                <p>Trang web của chúng tôi sẽ giúp bạn ...</p>
            </div>
            <div class="footer__list">
                <div class="footer__nav">
                    <h3>Đọc với chúng tôi</h3>
                    <li><a href="http://localhost:3000/">Tìm cảm hứng</a></li>


                </div>
                <div class="footer__nav">
                    <h3>Để tôi giúp bạn</h3>
                    <li><a href="#">Tài khoản</a></li>

                    <li><a href="#">Liên hệ</a></li>
                    <li><a href="#">Góp ý</a></li>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="footer__copyrights">
            <p>© 2022. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;