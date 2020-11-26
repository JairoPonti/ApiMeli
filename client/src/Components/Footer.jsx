import { AiOutlineFacebook, AiFillGithub, AiFillMail, AiOutlinePhone } from "react-icons/ai";


// export default function Footer(props) {
//     return (
      
//             <div className="row col l12 m12 s12">
//                 <div className="redes col m6 s6 l6 grey">
                 
//                     <a href="https://github.com/JairoPonti" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiFillGithub className="grey-text text-darken-3 icon" /> GitHub</a>
//                 </div>
//                 <div className="contacto col m6 s6 l6 grey">
//                     {/* <a href="jairomponti@gmail.com" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiFillMail className="grey-text text-darken-3 icon" /> Gmail</a> */}
//                     <a href="https://wa.me/5491131090584" className="grey-text text-darken-3 center-align col m6 s6 l6"><AiOutlinePhone className="grey-text text-darken-3 icon" /> WhatsApp</a>
//                 </div>
//             </div>
        
//     )
// }
export default function Footer(props) {
        return (
<footer class="page-footer card-panel cyan darken-3">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Api Meli</h5>
      <p class="grey-text text-lighten-4">Esta página fue desarrollada por Jairo M. Ponti</p>
    </div>
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Contacto:</h5>
      <ul>
        <li><a class="grey-text text-lighten-3" href="https://github.com/JairoPonti"><AiFillGithub className="grey-text text-darken-3 icon" /> GitHub</a></li>
        <li><a class="grey-text text-lighten-3" href="https://wa.me/5491131090584"><AiOutlinePhone className="grey-text text-darken-3 icon" /> WhatsApp</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © 2020 Copyright 
  <h6 class="grey-text text-lighten-4 right" style={{paddingRight: "95px"}}><AiFillMail className="grey-text text-darken-3 icon" /> jairomponti@gmail.com</h6>
  </div>
</div>
</footer>
        )
} 