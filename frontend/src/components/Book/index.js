import React,{useEffect,useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./style.css"
import Button from "../Button";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
const Book = () => {
    const history = useNavigate()
    const param = useParams();
    const [book,setBook] = useState({})

    useEffect(()=>{
        async function getBook(id){
            const res = await axios.get(`http://localhost:4000/api/book/${id}`)
            setBook(res.data)
        }
        getBook(param.id)
    },[])

    const a = () => {
        history(`/book/${book._id}/${book.postfix}`)
    }
    return (
        <div>
            <Header />
            <div className="book-caption d-none d-md-block" id="book-caption">
                <div className="book-caption-review">
                    <p>
                       {book.detail}
                    </p>
                    <h2 className="cost"x>{book.cost}</h2>
                    <div className="button-control">
                        <Button content="Đọc" className="bt_RM" click={a} ></Button>
                        <Button content="Mua" className="bt_PC"></Button>
                    </div>
                </div>
                    <img
                        className="animate__animated animate__fadeInUpBig"
                        src={book.image}
                        alt=""
                    />
                    
            </div>

            <Footer />
        </div>

    )
}

export default Book;