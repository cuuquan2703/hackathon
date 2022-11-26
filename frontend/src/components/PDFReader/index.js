import {useParams} from "react-router-dom"
import useWindowSize from "../../utils/useWindowSize"
const PDFReader = () => {
    const param = useParams()
    const {width, height} = useWindowSize()
    return (
        <iframe src={`https://player.flipsnack.com?hash=${param.postfix}`} width="100%" height={height} seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
    )
}

export default PDFReader