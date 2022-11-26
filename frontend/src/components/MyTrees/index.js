import React from "react";
import "./style.css"
import Header from "../Header";
const MyTrees = () => {
    return (
        
        <div className="mytrees">
            <Header/>
            <div className="tree1">
            <img src="https://khbvptr.vn/wp-content/uploads/2020/11/C%C3%A2y-%C4%91a-2-800x693.jpg" className="img" alt="Card img cap"></img>
            <div className="content">
                <div className="infor">
                    <h2 className="name">Bé Đa</h2>
                    <p className="age">Nay đã được <span className="a" >35</span> tuổi</p>
                    <p className="adress">Sống ở Phú Phong, Tây Sơn, Bình Định</p>
                </div>
                <div>
                    <div class="card flex-row px-3">
                        <img class="card-img-left example-card-img-responsive rounded-circle" src="./huda.jpg" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Nguyễn Hữu Đa</h4>
                            <p class="card-text">Tôi năm nay hơn 70 mà chưa thấy cây nào đẹp như này cã 💖</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card flex-row px-3">
                        <img class="card-img-left example-card-img-responsive rounded-circle" src="./3.jpg" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Nguyen Quang Tuyen</h4>
                            <p class="card-text">Check in cùng cụuuuu</p>
                            <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/316130938_920449249134195_1180884269268962495_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=bus32VNisEQAX8swwkn&_nc_ht=scontent.fsgn2-5.fna&oh=03_AdTeBkiWhh4x4Y1zXn-6U8R5dZRIxHCa-H63im3xCkL3Lg&oe=63A9A8E2" className="cmt-img"></img>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card flex-row px-3">
                        <img class="card-img-left example-card-img-responsive rounded-circle" src="./3.jpg" />
                        <input placeholder="Viet binh luan" type="text" className="input-cmt"></input>
                    </div>
                </div>
            </div>
            </div>
            <div className="tree2">
            
            <div className="content">
                <div className="infor">
                    <h2 className="name">Bé Xanh</h2>
                    <p className="age">Mới trồng được <span className="a" >5</span> tháng</p>
                    <p className="adress">Sống ở Phú Phong, Tây Sơn, Bình Định</p>
                </div>
                <div>
                    <div class="card flex-row px-3">
                        <img class="card-img-left example-card-img-responsive rounded-circle" src="./3.jpg" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Nguyen Quang Tuyen</h4>
                            <p class="card-text">Bé đẹp lắm</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card flex-row px-3">
                        <img class="card-img-left example-card-img-responsive rounded-circle" src="./3.jpg" />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm">Nguyen Quang Tuyen</h4>
                            <p class="card-text">Thật nhân văn</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card flex-row px-3">
                        <img class="card-img-left example-card-img-responsive rounded-circle" src="./3.jpg" />
                        <input placeholder="Viet binh luan" type="text" className="input-cmt"></input>
                    </div>
                </div>
            </div>
            <img src="https://file1.dangcongsan.vn/data/0/images/2021/04/30/buithuy/trongcayxanh.jpg" className="img" alt="Card img cap"></img>
            </div>
        </div>

        
    )
}

export default MyTrees;