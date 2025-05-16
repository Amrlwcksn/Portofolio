import Link from "next/link"
import FadeContent from "../components/FadeContent/FadeContent"
import ThemeToggle from "../components/ThemeToggleButton"
import PomodoroTimer from "./Pomodoro"


const pomodoro = ()=>{
    return(
        <>
        <FadeContent>
        <div className="w-full max-w-8xl mx-auto px-5 py-10">
            <div className="bg-white rounded-3xl dark:bg-neutral-900">
                <div className="p-5 flex justify-between ">
            <FadeContent>
                <a href="/" className="font-notojp font-medium text-2xl ">
                 Back
                </a>
            </FadeContent>
            <FadeContent>
                <ThemeToggle></ThemeToggle>
            </FadeContent>
            </div>
        </div>
        </div>
        
        <div className="w-full max-w-8xl mx-auto px-5 -mt-7">
            <div className="p-5 rounded-3xl text-center bg-white dark:bg-neutral-900">
                <div>
                    <PomodoroTimer/>
                </div>
            </div>
        </div>

        <div className="w-full max-w-8xl mx-auto px-5 py-10 -mt-7">
            <div className="p-5 rounded-3xl  bg-white dark:bg-neutral-900">
                <h1 className="font-notojp text-center">
                    Copyright © 2025 - Amrlwcksn All right reserved
                </h1>
            </div>
        </div>
        </FadeContent>


        </>
    )

}

export default pomodoro;