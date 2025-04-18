import DecryptedText from "../components/DecryptedText/DecryptedText";

const Porto2 = () => {
  return (
    <>
      <div className="mx-auto mt-28 px-4 max-w-screen-lg">
        <div className="text-center mt-24">
          <DecryptedText
            text="Masih dalam tahap pengembangan :)"
            animateOn="view"
            speed={100}
            maxIterations={30}
            revealDirection="center"
          />
        </div>

        <div className="flex justify-center">
          <img src="Images/Thingking.jpg" alt="" className="w-30 rounded-lg" />
        </div>
      </div>
    </>
  );
};
export default Porto2;
