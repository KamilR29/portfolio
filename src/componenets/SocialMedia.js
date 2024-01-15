import "./SocialMedia.scss"
import Github from "../image/github.png"
import Linkedin from "../image/linkedin.png"
import Gmail from "../image/gmail.png"

export function SocialMedia(){

    return(
        <div className="SocialMediaWindow">

            <div className="ImageGithub">
                <a href="https://github.com/KamilR29">
                    <img className="Image" src={Github}/>
                </a>
            </div>
            <div className="ImageLinkedin">
                <a href="https://www.linkedin.com/in/kamil-r%C4%85czkowski-056600192/">
                    <img className="Image" src={Linkedin}/>
                </a>
            </div>
            <div className="ImageGmail">
                <a href="https://github.com/KamilR29">
                    <img className="Image" src={Gmail}/>
                </a>
            </div>






        </div>
    )
}