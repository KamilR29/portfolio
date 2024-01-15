import React, {useEffect, useRef, useState} from "react";
import "./Prompter.scss"




export function Prompter(){

    const [texts, setTexts] = useState(["//Play to know something about me"]);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (isStarted) {
            const aboutMe = ['',
                'Im a young programmer specializing in Java, with additional knowledge of Python, C#, and web technologies.',
                'Currently, I am working at Ingersoll Rand, developing websites using OCM. ',
                'I have also gained experience through international internships and projects carried out for local companies.',
                'I am a full-time student at the Polish-Japanese Academy of Computer Technology,' ,
                'continuously enhancing my skills.',
                'I am open to new challenges and professional growth opportunities.',
                'I always try to do my best at work.'];
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
        if (isStarted === false){
            setTexts([])
        }

            setIsStarted(true);


    };
    const clearPrompter = () => {
        setTexts(['Process finished with exit code 0'])
        setIsStarted(false)
    }




    return(
        <div className="PrompterWindow">
            <div className="TopBar">

                <button className="PlayButton" onClick={startAddingTexts}></button>
                <button className="StopButton" onClick={clearPrompter}></button>
            </div>

            <div className="PrompterCode">
                {texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>


        </div>);

}