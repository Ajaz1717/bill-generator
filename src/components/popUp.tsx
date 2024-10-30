import { Dispatch } from "react";

interface Navprobs {
  setError: any
  errorValue: any
}

export default function ErrorPopUp(probs: Navprobs) {
  const {setError, errorValue} = probs
  return (
    <div className="w-full h-lvh flex justify-center items-center fixed top-0 z-20">
      <div className="bg-[#e0e0e0] rounded-2xl opacity h-fit w-[88%] flex flex-col justify-center items-center relative">
        <div className="w-full h-9 bg-[#c3c3c3] absolute top-0 rounded-t-2xl items-center flex justify-end shadow[0px_3px_2px_#bcbcbc]">
          <button
            onClick={()=>setError('')}
            className="mr-3 bg-white h-[22px] w-[22px] pl-[3px] rounded-full relative"
          >
            <div className="w-[15px] h-[1.5px] bg-black rotate-45 absolute"></div>
            <div className="w-[15px] h-[1.5px] bg-black rotate-[135deg] absolute"></div>
          </button>
        </div>
        <div className="w-[130px] h-[130px] flex justify-center items-center rounded-full scale-[0.55] relative top-4">
          <svg
            width="187"
            height="187"
            viewBox="0 0 187 187"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_452_241)">
              <circle cx="91.5" cy="89.5" r="89.5" fill="#CE4040" />
            </g>
            <path
              d="M87.001 103.998H97.001V113.998H87.001V103.998ZM87.001 63.998H97.001V93.998H87.001V63.998ZM92.001 38.998C64.351 38.998 42.001 61.498 42.001 88.998C42.001 102.259 47.2688 114.977 56.6456 124.353C61.2886 128.996 66.8005 132.679 72.8668 135.192C78.9331 137.705 85.4349 138.998 92.001 138.998C105.262 138.998 117.979 133.73 127.356 124.353C136.733 114.977 142.001 102.259 142.001 88.998C142.001 82.432 140.708 75.9302 138.195 69.8639C135.682 63.7976 131.999 58.2856 127.356 53.6427C122.713 48.9998 117.201 45.3168 111.135 42.8041C105.069 40.2913 98.5671 38.998 92.001 38.998ZM92.001 128.998C81.3923 128.998 71.2182 124.784 63.7167 117.282C56.2153 109.781 52.001 99.6067 52.001 88.998C52.001 78.3894 56.2153 68.2152 63.7167 60.7138C71.2182 53.2123 81.3923 48.998 92.001 48.998C102.61 48.998 112.784 53.2123 120.285 60.7138C127.787 68.2152 132.001 78.3894 132.001 88.998C132.001 99.6067 127.787 109.781 120.285 117.282C112.784 124.784 102.61 128.998 92.001 128.998Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_di_452_241"
                x="0"
                y="0"
                width="187"
                height="187"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_452_241"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_452_241"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6" dy="4" />
                <feGaussianBlur stdDeviation="12.95" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_452_241"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col justify-end items-center relative bottom-3 text-[#4d4d4d]">
          <p className="text-2xl font-bold">Error</p>
          <p className="text-lg text-center">please enter <span className="font-semibold">{errorValue}</span></p>
        </div>
      </div>
    </div>
  );
}
