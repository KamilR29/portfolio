import React, {useEffect, useRef, useState} from "react";
import "./Prompter.scss"
import buttonImage from '../image/play-button.png'


export function Prompter(){

    const [texts, setTexts] = useState([]);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (isStarted) {
            const aboutMe = [
                'Hello there! Im [Your Name], a passionate [Your Occupation/Interest]. ',
                'I thrive on [Specific Passion/Interest], constantly seeking new ways ',
                'to [Goal or Achievement]. With a background in [Your Background/Skills],',
                'I bring a unique perspective to everything I do. Outside of [Work/Passion], ',
                'youll often find me [Hobbies/Activities], embracing [Adjectives that ',
                'describe your personality, like adventurous, creative, analytical, etc.]. ',
                'I believe in [Core Belief/Philosophy], and Im dedicated to [Goal/Mission]. ',
                'Lets connect and explore the world together!'];

            let index = 0;
            const interval = setInterval(() => {
                if (index < aboutMe.length) {
                    setTexts(prevTexts => [...prevTexts, aboutMe[index]]);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 200);

            return () => {

                clearInterval(interval);
            };
        }
    }, [isStarted]);
    const startAddingTexts = () => {
        setIsStarted(true);
    };




    return(
        <div className="PrompterWindow">
            <div className="TopBar"><button className="PlayButton" onClick={startAddingTexts}></button></div>

            {texts.map((text, index) => (
                <p key={index}>{text}</p>
            ))}

        </div>);

}