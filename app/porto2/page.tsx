import DecryptedText from "../components/DecryptedText/DecryptedText";
import FadeContent from "../components/FadeContent/FadeContent";
import ThemeToggle from "../components/ThemeToggleButton";
import Popup from "../components/Popup";

const Porto2 = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-5 py-10 ">
        {/* kotak 1*/}
        <div className="bg-white rounded-3xl dark:bg-neutral-900">
          <div className="p-5 flex justify-between ">
            <FadeContent>
            <a href="/" className="font-notojp font-bold mt-2 text-2xl">
              Portofolio
            </a>
            </FadeContent>
            <FadeContent>
            <ThemeToggle></ThemeToggle>
            </FadeContent>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 -mt-8 ">
        {/* kotak 1*/}
        <div className="bg-white rounded-3xl dark:bg-neutral-900">
          <div className="p-5 flex justify-between gap-5 md:flex-col md:items-center">
            <div className="">
              <h1 className="font-notojp font-medium mb-2 md:-mb-2">Terbuka untuk mengerjakan Project web-pages</h1>
              <div className="md:hidden">
                <Popup></Popup>
              </div>
            </div>
            <div>
              <img src="Images/coding_cat.jpg" alt="" className="w-48 rounded-lg" />
              <div className="hidden md:block md:mt-2 ">
              <Popup></Popup>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 mt-2">
        {/* kotak 2*/}
        <div className="bg-white rounded-3xl dark:bg-neutral-900">
          <div className="text-center p-5">
            <h1 className="font-notojp font-medium">
              Web ini sepebuhnya dibuat oleh saya <br />
              "Ahmad Amirul wicaksono"
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 mt-2">
        <div className="bg-white rounded-3xl dark:bg-neutral-900 p-5">
          <h1 className="font-notojp text-center">
            Copyright © 2025 - Amrlwcksn All right reserved.
          </h1>
        </div>
      </div>
    </>
  );
};
export default Porto2;
