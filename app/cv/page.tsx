'use client'
import ThemeToggle from "../components/ThemeToggleButton";
import FadeContent from "../components/FadeContent/FadeContent";
import Link from "next/link";
const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Cv/Cv_Ahmad_Amirul_Wicaksono.pdf'; // Ganti dengan path file kamu
    link.download = 'Cv_Ahmad_Amirul_Wicaksono.pdf'; // Nama file saat di-download
    link.click();
  };

const cv =()=>{
    return(
        <>
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-800 px-5">
            
            <FadeContent>
            <div className="shadow-xl rounded-3xl bg-white dark:bg-neutral-900 p-5">
                
                <img
                src="/Images/cv.png"
                alt="CV Preview"
                className="w-full max-w-4xl rounded-2xl shadow-md"
                />

                <div className="flex justify-center mt-5">
                <button
                    className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl bg-slate-400 hover:bg-blue-600 hover:text-white"
                    onClick={handleDownload}
                >
                    Download
                </button>
                </div>

            </div>
            </FadeContent>

        </div>



        </>
    )
}
export default cv;