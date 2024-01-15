import avatar from '../image/hmmm.png'
import cloud_image from '../image/sticker.png'
import './HomePage.scss';
import '../componenets/HeaderButton'
import {HeaderButton} from "../componenets/HeaderButton";
import {Prompter} from "../componenets/Prompter";
import {Link} from "react-router-dom";
import {SocialMedia} from "../componenets/SocialMedia";


function HomePage() {
    return (
        <div className="App">
            <div className="App-header">
                <div className="Avatar">
                    <img className="Avatar-icon" src={avatar} alt="It is avtar icon" />
                </div>
                <Link to={"/about_me"}>
                    <HeaderButton name="About Me"/>
                </Link>
                <Link to={"/skills"}>
                    <HeaderButton name="Skills"/>
                </Link>
                <Link to={"/projects"}>
                    <HeaderButton name="Projects"/>
                </Link>

            </div>
            <div className="Section">
                <div className="Content-area-one"><SocialMedia/></div>

            </div>
            <div className="Section">
                <div className="Content-area-two"><Prompter/></div>
                <img className="Cloud-image" src={cloud_image} alt=" It is pepple ont the cloud"/>

            </div>

        </div>
    );
}

export default HomePage;
