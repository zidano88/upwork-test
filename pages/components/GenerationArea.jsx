import Image from "next/image";
import { useState } from "react";
import refreshIcon from "../../public/icons/refresh.png";
import targetIcon from "../../public/icons/target.png";
import playIcon from "../../public/icons/play-button.png";
import pauseIcon from "../../public/icons/pause.png";
import forwardIcon from "../../public/icons/forward.png";
import backwardIcon from "../../public/icons/backward.png";
import downloadIcon from "../../public/icons/download.png";

const GenerationArea = () => {
  return (
    <div className="bg-white text-black ml-5 mr-16 rounded-md shadow-inner shadow-3xl p-4  mb-10">
      <GeneratedText />
      <ButtonsSection />
      <ControlsArea />
    </div>
  );
};

export default GenerationArea;

const GeneratedText = () => {
  return (
    <div>
      <div className="ml-1 text-md text-primary-dark">
        Reverse Turing: Imagine a future world where Chat GPT is sentient and...
      </div>
      {/* Generated Text Box */}
      <div className="border border-1 border-gray-500 border-opacity-20 rounded-md px-4 py-3 my-2 text-sm text-gray-600 overflow-y-scroll h-96">
        <style jsx>
          {`
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background-color: #f1f1f1;
              border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb {
              background-color: #d0d0d0;
              border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background-color: #555;
            }
          `}
        </style>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s.
        </p>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </p>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s
        </p>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </p>
      </div>
    </div>
  );
};

const ButtonsSection = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-md text px-1 text-gray-500 opacity-50">
        <p>~5.139 words left in your quota</p>
        <p>~23 minutes left in your quota</p>
      </div>
      <div className="flex flex-row justify-between items-center text-lg mt-3">
        <button className="text-primary-dark bg-secondary-lightest py-2.5 px-4 pb-1.5 rounded-md shadow-lg flex flex-row items-center justify-center hover:bg-secondary-light">
          <Image src={refreshIcon} alt="refresh icon" className="w-6 mr-2" />
          Regenerate Script
        </button>
        <button className="text-white bg-primary-light py-2.5 px-4 pb-1.5 rounded-md shadow-lg flex flex-row items-center justify-center hover:bg-primary">
          Generate Audio
          <Image src={targetIcon} alt="refresh icon" className="w-6 ml-2" />
        </button>
      </div>
    </div>
  );
};

const ControlsArea = () => {
  const [play, setPLay] = useState(false);

  const handlePlay = () => {
    setPLay(!play);
  };

  return (
    <div>
      <hr class="border-t-[1px] border-secondary opacity-20 mt-6 mb-4" />
      <div className="flex flex-row justify-between">
        <div className="px-3">
          <button onClick={handlePlay}>
            <Image
              src={play ? pauseIcon : playIcon}
              alt="play button"
              className="w-10"
            />
          </button>
        </div>
        <div className="ml-2 w-full">
          <div className="text-sm text-gray-600 mb-2">
            {"My Voices > John's storytime voice"}
          </div>
          <div className="flex flex-row items-center">
            <button>
              <Image
                src={backwardIcon}
                alt="backward icon"
                className="w-4 ml-1 mr-3"
              />
            </button>
            <button>
              <Image
                src={forwardIcon}
                alt="forward icon"
                className="w-4 mx-3"
              />
            </button>
            <ProgressBar progress={40} />
            <div className="flex flex-row text-gray-600 mx-4 mr-14">
              <div>
                <span>4:52</span>
                <span className="mx-2">/</span>
                <span>11:05</span>
              </div>
              <button>
                <Image
                  src={downloadIcon}
                  alt="forward icon"
                  className="w-6 mx-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-1 ml-5 w-full h-2 bg-gray-200 opacity-80 rounded-full flex items-center">
      <div
        className="h-full bg-primary-dark rounded-full relative "
        style={{ width: `${progress}%` }}
      >
        <button className="absolute right-0 top-[-50%] h-4 w-1 bg-primary-dark rounded-xl"></button>
      </div>
    </div>
  );
};
