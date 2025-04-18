import Handleclick from "./components/handleclick";
import ThemeToggle from "./components/ThemeToggleButton";
import FadeContent from "./components/FadeContent/FadeContent";
import BlurText from "./components/BlurText/BlurText";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import Popup from "./components/popup";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
const velocity = 50;
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import Link from "next/link";




export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="shadow-xl bg-white dark:bg-gray-900 sticky top-0 z-50">
        <FadeContent>
          <div className="flex max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 justify-between items-center py-3">
            <Handleclick />
            <ThemeToggle />
          </div>
        </FadeContent>
      </div>

      {/* Main Section */}
      <section className="w-full max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Teks Perkenalan */}
          <div className="w-full md:w-1/2">
            <FadeContent>
              <h1 className="font-bold text-xl">Halo semua! 👋🏻, saya</h1>
            </FadeContent>

            <BlurText
              text="Ahmad Amirul"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-6xl font-bold"
            />
            <BlurText
              text="Wicaksono."
              delay={200}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-6xl font-bold"
            />

            <FadeContent>
              <DecryptedText
                text="Frontend Web-Developer & "
                animateOn="view"
                revealDirection="center"
                speed={50}
                maxIterations={30}
                className="text-xl font-bold text-gray-700 dark:text-gray-400"
              />
              <DecryptedText
                text="Video/Foto Editor"
                animateOn="view"
                revealDirection="center"
                speed={50}
                maxIterations={30}
                className="text-xl font-bold text-black dark:text-white"
              />

              <div className="mt-1 space-y-0">
                <DecryptedText
                  text="Mahasiswa di Universitas PGRI Semarang yang sedang menempuh"
                  animateOn="view"
                  revealDirection="center"
                  speed={70}
                  maxIterations={35}
                  className="text-base text-gray-700 dark:text-gray-400"
                />
                <DecryptedText
                  text="pendidikan pada program studi Pendidikan Teknologi Informasi."
                  animateOn="view"
                  revealDirection="center"
                  speed={70}
                  maxIterations={40}
                  className="text-base text-gray-700 dark:text-gray-400"
                />
              </div>
            </FadeContent>

            <FadeContent>
              <div className="mt-4">
                <Popup />
              </div>
            </FadeContent>
          </div>

          {/* Foto Profil */}
          <div className="w-full md:w-1/2 flex justify-center">
            <FadeContent>
              <TiltedCard
                imageSrc="/Images/wicaksono.png"
                altText="Ahmad Amirul Wicaksono - Profile Cover"
                captionText="Amrlwcksn - profile"
                containerHeight="400px"
                containerWidth="350px"
                imageHeight="350px"
                imageWidth="350px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text bg-yellow-400 dark:bg-slate-700 p-2 rounded-lg">
                    Amrlwcksn - PROFIL
                  </p>
                }
              />
            </FadeContent>
          </div>

          
        </div>
      </section>

        {/* Mot */}
      <div className="mt-60 ">
            <ScrollVelocity
              texts={["Terbentur-terbentur", "Terbentuk"]}
              velocity={velocity}
              className="custom-scroll-text font-mono"
            />
          </div>

      <section className="w-full max-w-6xl mx-auto px-5 py-10">
        <div className="mt-56 font-bold">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Work Experience
        </ScrollFloat>
        </div>
        {/* skill */}
        <div className="flex items-center justify-between relative w-full py-8 px-4">
          {/* Garis horizontal */}
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gray-300 z-0"></div>

          {/* Timeline item */}
          <div className="relative z-10 text-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <h1 className="text-sm font-light">2019 - Sekarang</h1>

            <p className="text-xs text-gray-600">Toko Vistar</p>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <h1 className="text-sm font-light">2021 - Sekarang</h1>

            <p className="text-xs text-gray-600">
              Freelance Video & Foto Editor
            </p>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <h1 className="text-sm font-light">2025</h1>

            <p className="text-xs text-gray-600">Freelance Web-Dev</p>
          </div>
        </div>

        {/* skill */}
        <div className="font-bold">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Skill
        </ScrollFloat>
        </div>

        <div className="flex justify-center px-4">
          <div className="w-full max-w-5xl">
            <div className="overflow-x-auto sm:overflow-visible">
              <table className="hidden sm:table w-full text-sm text-gray-700 dark:text-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-900">
                    <th className="px-4 py-2 text-left font-medium"></th>
                    <th className="px-4 py-2 text-justify">A</th>
                    <th className="px-4 py-2 text-justify">B</th>
                    <th className="px-4 py-2 text-justify">C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:bg-gray-800">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-blue-600 text-left">Hard Skill</td>
                    <td className="px-4 py-3 text-justify">Computer Programming</td>
                    <td className="px-4 py-3 text-justify">Video & Foto Editor</td>
                    <td className="px-4 py-3 text-justify">Desain Produk Digital</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-green-600 text-left">Soft Skill</td>
                    <td className="px-4 py-3 text-justify">Team Work</td>
                    <td className="px-4 py-3 text-justify">Creativity</td>
                    <td className="px-4 py-3 text-justify">Time Management</td>
                  </tr>
                </tbody>
              </table>

              {/* Mobile view */}
              <div className="sm:hidden space-y-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
                  <h3 className="text-blue-600 font-semibold mb-2">Hard Skill</h3>
                  <ul className="text-gray-700 dark:text-gray-200 list-disc pl-5 space-y-1">
                    <li>Computer Programming</li>
                    <li>Video & Foto Editor</li>
                    <li>Desain Produk Digital</li>
                  </ul>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
                  <h3 className="text-green-600 font-semibold mb-2">Soft Skill</h3>
                  <ul className="text-gray-700 dark:text-gray-200 list-disc pl-5 space-y-1">
                    <li>Team Work</li>
                    <li>Creativity</li>
                    <li>Time Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Portofolio */}
        <div className="mt-60 mb-96 px-4">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-52">
            {/* Kiri */}
            <div className="justify-center">
              <SpotlightCard
                className="dark:bg-gray-900 custom-spotlight-card"
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

            {/* Kanan */}
            <div>
              <SpotlightCard
                className="dark:bg-gray-900 custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <img
                  src="/Images/bgweb.jpg"
                  alt=""
                  className="w-80 rounded-xl"
                />

                <h1 className="text-white font-bold text-3xl">Web-Browser</h1>

                <p className=" font-light text-gray-500">
                  Lihat Semua hasil karya saya di sini<br />
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
      </section>
      {/* Footer */}
      <div className="bg-black mt-10 p-5">
        <h1 className="text-gray-400 text-center">
          Copyright © 2025 - Amrlwcksn All right reserved
        </h1>
      </div>
      {/* Selesai */}
    </>
  );
}
