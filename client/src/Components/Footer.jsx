import { AiOutlineFacebook, AiFillGithub, AiFillMail, AiOutlinePhone } from "react-icons/ai";


export default function Footer(props) {
    return (
      
            <div className="row col l12 m12 s12">
                <div className="redes col m6 s6 l6 grey">
                 
                    <a href="https://github.com/JairoPonti" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiFillGithub className="grey-text text-darken-3 icon" /> GitHub</a>
                </div>
                <div className="contacto col m6 s6 l6 grey">
                    {/* <a href="jairomponti@gmail.com" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiFillMail className="grey-text text-darken-3 icon" /> Gmail</a> */}
                    <a href="https://wa.me/5491131090584" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiOutlinePhone className="grey-text text-darken-3 icon" /> WhatsApp</a>
                </div>
            </div>
        
    )
}