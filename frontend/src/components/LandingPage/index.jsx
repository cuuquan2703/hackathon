import React from "react";
import Button from "../Button";
import Card from "../Card";
import Carousel from "../Carousel";
import Feature from "../Features";
import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect} from "react";

import axios from 'axios'
const LandingPage = () => {
  const [img,setImg] = useState([])
  const [imgArr,setImgArr] = useState([])
  // const imgArr = [
  //   {
  //     link: "http://localhost:3000/book",
  //     img: "/book1.jpg",
  //     detail: `Dac Nhan Tam`,
  //     branding: "Nếu bạn tìm hiểu về SEO thì sẽ thấy thẻ a đóng vai trò khá quan trọng khi bạn đi backlink. Chúng ta có hai loại link, đó là link nội bộ (internal link) và link out ra ngoài website khác (external link). Link nội bộ là link chỉ liên kết tới những trang nằm trong nội bộ của domain, còn link out ra ngoài là link trỏ tới những website không phải là domain hiện tại.",
  //     cost:"100.000 VND"
  //   },
  //   {
  //     link: "http://localhost:3000/book",
  //     img: "/book2.jpeg",
  //     detail: `Nha gia kim`,
  //     branding: "Cuon sach ban chay dung thu 2 chi sau kinh thanh",
  //     cost:"100.000 VND"
  //   },
  //   {
  //     link: "http://localhost:3000/book",
  //     img: "/book3.jpeg",
  //     detail: `Khi ban Mo, nguoi khac NO LUC`,
  //     branding: "Cuon sach danh cho nhung ban tre khat khao va bao hoai bao ",
  //     cost:"120.000 VND"
  //   },
  //   {
  //     link: "http://localhost:3000/book",
  //     img: "/book4.jpeg",
  //     detail: `EQ - Nghe thuat cam xuc`,
  //     branding: "PPhuong phap ren luyen tri tue xuc cam",
  //     cost:"150.000 VND"
  //   },
  //   {
  //     link: "http://localhost:3000/book",
  //     img: "/book5.jpeg",
  //     detail: `NFT`,
  //     branding: "Cuoc cach mang noi tiep cong nghe Blockchain",
  //     cost:"90.000 VND"
  //   },
  //   {
  //     link: "http://localhost:3000/book",
  //     img: "/book6.jpeg",
  //     detail: `So hai la ban nang, quuyet doan la ban linh, can dam la toi luyen`,
  //     branding: "Cuon sach day ban het so",
  //     cost:"50.000 VND"
  //   },
  // ];
  // const [imgArrs,setImgArr] = useState([{"_id":"638202586f6b0f0a58b91635",
  // "name":"Tai lieu chuyen tin 1",
  // "image":"https://drive.google.com/file/d/16NHXcFzQy7sOH5iHKAWooHnNy7REfIRM/view",
  // "postfix":"N0RCNTZCNjZBRUQreHBsd2twbmQxag==",
  // "author":"A"}]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/book").then((res) => {

      setImgArr(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  
  console.log(imgArr)


  const clickBt = async() =>{
    try {
      const a = await axios.get("");
      setImg(a)
    } catch (e) {
      console.log(e.stack)
    }
  }

  const buttonContent = ["Bbb", "Aaa", "Bcb", "Abc"];
  return (
    <div>
      <Header />
      <Carousel background="./carousel1.jpg" carousel1="./avt1.jpg" carousel2="./avt2.jpeg" carousel3="./avt3.jpeg"/>
      <div className="container py-5 text-center" id="readbook">
        <div className="projects__title">
          <h2 className="display-4 font-weight-bold">Một số cuốn sách được nhiều người đọc nhất hiện nay</h2>
          
        </div>
        <div className="projects__tabs">
          <div id="search"></div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade  show active"
              id="pills-projects"
              role="tabpanel"
              aria-labelledby="pills-projects-tab"
            >
              <div className="row">
                {imgArr.map((card) => {
                  return (
                    <div className="col-lg-6 col-xl-4">
                      <Card
                        link={card._id}
                        img={card.image}
                        detail={card.name}
                        branding={card.plot}
                        cost={card.cost}
                      />
                    </div>
                  );
                })}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
      <Footer/>
    </div>
  );
};

export default LandingPage;
