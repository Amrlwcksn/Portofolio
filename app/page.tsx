'use client'

import Handleclick from "./components/handleclick";
import ThemeToggle from "./components/ThemeToggleButton";
import FadeContent from "./components/FadeContent/FadeContent";
import BlurText from "./components/BlurText/BlurText";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import Link from "next/link";
import Clock from "./components/clock";


const handlecv = () => {
  const link = document.createElement('a');
  link.href = '/cv'; // tombol cv
  link.click();
};

const handleabute = () => {
  const link = document.createElement('a');
  link.href = '/aboute'; //tombol aboute
  link.click();
};

const handlepomodoro = ()=>{
  const link = document.createElement('a');
  link.href ='/pomodoro';
  link.click();
}




export default function Home() {
  return (
    <>
     <div className="w-full max-w-6xl mx-auto px-5 py-10 ">
      {/* kotak 1*/}
      <div className="bg-white rounded-3xl dark:bg-neutral-900">
        <div className="p-5 flex justify-between ">
          <FadeContent>
          <h1 className="font-notojp font-bold mt-2 text-2xl">
            Portofolio
          </h1>
          </FadeContent>
          <FadeContent>
          <ThemeToggle></ThemeToggle>
          </FadeContent>
        </div>
      </div>

      {/* kotak 2 */}
      <div className="bg-white rounded-3xl mt-2 p-5 dark:bg-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-3">

          {/* Kiri - Sapaan */}
          <BlurText
            text="Hallo! 👋🏻"
            className="font-notojp font-bold text-3xl md:text-2xl text-center"
          />
          {/* desktop */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-x-6 border-2 border-zinc-300  hover:ansition-all duration-300 p-2 rounded-3xl w-full max-w-fit mx-auto hidden sm:block">
            <FadeContent>
              <Link href="/aboute">
                <button className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white w-full md:w-auto">
                  About Me 
                </button>
              </Link>

              <Link href="/cv">
                <button className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white w-full md:w-auto">
                  Curriculum Vitae
                </button>
              </Link>
              <Link href="/pomodoro">
                <button className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white w-full md:w-auto">
                  Pomodoro-App
                </button>
              </Link>
            </FadeContent>
          </div>

          {/* Kanan - Sosial Media */}
          {/* Desktop */}
          <FadeContent>
            <ul className="hidden sm:block space-y-2 text-left md:text-right">
              <li>
                <a href="https://www.instagram.com/amirulwicaksono_?igsh=MWtvNndhN29memxnbA==" className="underline font-notojp hover:-translate-x-1 md:hover:translate-x-1 transition duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/6287766422358" className="underline font-notojp hover:-translate-x-1 md:hover:translate-x-1 transition duration-200">
                WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:amrlwcksn@gmail.com" className="underline font-notojp hover:-translate-x-1 md:hover:translate-x-1 transition duration-200">
                  Email
                </a>
              </li>
            </ul>
          </FadeContent>
          

        </div>
        <div className="p-3 relative">
          <div className="flex flex-col">
        {/* Desktop */}
            <div className="hidden sm:block mt-48 ">
              <BlurText
                text="i'm"
                className="font-notojp font-bold text-3xl"
              />
              <BlurText
                text="Ahmad Amirul Wicaksono"
                className="font-notojp font-bold text-5sxl md:text-5xl"
              />
              <BlurText
                text="Frontend Web-Developer & Video/Foto Editor"
                className="font-notojp font-bold text-3xl"
              />
              <BlurText
                text="Mahasiswa di Universitas PGRI Semarang yang sedang menempuh"
                className="font-notojp font-medium text-1xl"
              />
              <BlurText
                text="pendidikan pada program studi Pendidikan Teknologi Informasi."
                className="font-notojp font-medium text-1xl"
              />
            </div>
        {/* mobile */}
            <div className=" sm:hidden -mt-10">
              <BlurText
                text="i'm"
                className="font-notojp font-bold text-2xl"
              />
              <BlurText
                text="Ahmad Amirul Wicaksono"
                className="font-notojp font-bold text-2xl"
              />
              <FadeContent>
              <hr className="border-t-2 border-gray-300 my-2" />
              </FadeContent>
              <BlurText
                text="Frontend Web-Developer & Video/Foto Editor"
                className="font-notojp font-bold "
              />
              <BlurText
                text="Mahasiswa di Universitas PGRI Semarang yang sedang menempuh"
                className="font-notojp font-medium text-1xl"
              />
              <BlurText
                text="pendidikan pada program studi Pendidikan Teknologi Informasi."
                className="font-notojp font-medium"
              />
            </div>

            {/* Jam muncul di bawah teks untuk mobile */}
            <FadeContent>
            <div className="block sm:hidden mt-5">
              <Clock />
            </div>
            </FadeContent>   
          </div>

          {/* Jam posisi kanan bawah di desktop */}
          <FadeContent>
          <div className="hidden sm:block absolute bottom-5 right-5">
            <Clock />
          </div>
          </FadeContent>
        </div>
      </div>
      {/* kotak-mobile */}
      <div className="bg-white rounded-3xl mt-2 p-5 block sm:hidden dark:bg-neutral-900">
      <FadeContent>
        <div className="gap">
          <Link href="">
            <button onClick={handleabute} className="mb-2 font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl bg-gray-100 dark:bg-neutral-950 hover:bg-blue-600 hover:text-white w-full md:w-auto">
              About Me 
            </button>
          </Link>

          <Link href="">
            <button onClick={handlecv} className="mb-2 font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl bg-gray-100 dark:bg-neutral-950 hover:bg-blue-600 hover:text-white w-full md:w-auto">
              Curriculum Vitae
            </button>
          </Link>
          <div className="text-center">
          
          </div>

        </div>
      </FadeContent>
      </div>
    {/* kotak 3 what i'm using*/}
      <div className="bg-white rounded-3xl mt-2 p-5 dark:bg-neutral-900">
        <div className="text-center">
          <h1 className="text-2xl font-notojp font-bold">What i'm using</h1>

          <h1 className="font-notojp font-bold mt-5">
          Make video and Foto
          </h1>
          <div className="flex justify-center gap-5 mt-2 ">
            <div className="">
              <h1 className="font-notojp text-center">Premiere Pro</h1>
            </div>
              <div className="w-px h-30 bg-gray-300"></div>
            <div>
              <h1 className="font-notojp">Photoshop</h1>
            </div>
          </div>

          <hr className="my-4 border-t border-gray-300"/>
          <h1 className="font-notojp font-bold mt-5 text-2xl   "> Tech Stack</h1>
          
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
            {/* Next.js */}
            <div className="flex flex-col items-center">
              <img src="Images/nextjsDark.png" alt="" className="mx-auto w-28 mt-2 block dark:hidden" />
              <img src="Images/nextjsLight.png" alt="" className="mx-auto w-28 mt-2 hidden dark:block" />
            </div>
            {/* React.js */}
            <div className="flex flex-col items-center">
              <img src="Images/react.png" alt="" className="mx-auto w-20 mt-2" />
            </div>
            {/* Tailwind */}
            <div className="flex flex-col items-center">
              <img src="Images/tailwindDark.png" alt="" className="mx-auto w-36 mt-2 block dark:hidden" />
              <img src="Images/tailwindLight.png" alt="" className="mx-auto w-36 mt-2 hidden dark:block" />
            </div>
            {/* HTML */}
            <div className="flex flex-col items-center">
              <img src="Images/html.png" alt="" className="mx-auto w-20 mt-2 block dark:hidden" />
              <img src="Images/htmlLight.png" alt="" className="mx-auto w-28 mt-2 hidden dark:block" />
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <img src="Images/ts.png" alt="" className="mx-auto w-20 mt-2" />
            </div>
          </div>
        </div>
      </div>

    {/* karya/kotak 4  */}
      <div className="bg-white dark:bg-neutral-900 rounded-3xl mt-2 p-5 flex  justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-52">
          {/* Kiri */}
          <div className="justify-center">
              <SpotlightCard
                className="dark:bg-neutral-950 custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <img
                  src="/Images/bg-desainvf.jpg"
                  alt=""
                  className="w-80 rounded-xl"
                />

                <h1 className="text-white font-bold text-3xl">Foto & Video</h1>

                <p className=" font-light text-gray-500">
                  Lihat Semua hasil karya saya di sini <br />
                </p>
                  <Link href="/porto1">
                    <button className="mt-3 bg-blue-600 text-white border-blue-600 shadow-xl p-3 rounded-2xl hover:text-white hover:bg-blue-700">
                      Lihat
                    </button>
                  </Link>
              </SpotlightCard>
            </div>
            

            {/* kanan */}
          <div className="justify-center">
              <SpotlightCard
                className="dark:bg-neutral-950 custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <img
                  src="/Images/bgweb.jpg"
                  alt=""
                  className="w-80 rounded-xl"
                />

                <h1 className="text-white font-bold text-3xl">Web-browser</h1>

                <p className=" font-light text-gray-500">
                  Lihat Semua hasil karya saya di sini <br />
                </p>
                  <Link href="/porto2">
                    <button className="mt-3 bg-blue-600 text-white border-blue-600 shadow-xl p-3 rounded-2xl hover:text-white hover:bg-blue-700">
                      Lihat
                    </button>
                  </Link>
              </SpotlightCard>
            </div>
          </div>
      </div>
      {/* Footer  */}
      <div className="bg-white dark:bg-neutral-900 rounded-3xl mt-2 p-5">
        <div className=" flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <h1 className="font-notojp font-bold text-3xl">
              Habis cuy 😔
            </h1>
            <p className="font-notojp font-medium mt-10 md:mt-20 ">
              Studying is a privilage &,<br />
              a power.
            </p>
            {/* <img src="/Images/Codex.png" alt="" className="w-20 rounded-xl mt-10"/> */}
          </div>

          {/* Handleclick pindah ke bawah saat mobile */}
          <div className="md:mt-64 mt-10 self-end md:self-auto">
            <Handleclick />
          </div>
        </div>

        <div>
          <hr className="my-4 border-t border-gray-300"/>
        </div>
        <div>
          <h1 className="font-notojp text-center">
          Copyright © 2025 - Amrlwcksn All right reserved
          </h1>
        </div>

      </div>
      


     </div>
    </>
  );
}
