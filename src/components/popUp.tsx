import { Dispatch, SetStateAction, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface Navprobs {
  setError: Dispatch<SetStateAction<string>>;
  errorValue: string;
}

export default function ErrorPopUp(probs: Navprobs) {
  const { setError, errorValue } = probs;
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".alert", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "bounce.out",
    });
    tl.from(
      ".er",
      {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: -0.25,
      },
      "error"
    );
    tl.from(
      ".ror",
      {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      },
      "error"
    );
    tl.from(
      ".pleaseEnter",
      {
        x: -50,
        opacity: 0,
        duration: 0.3,
      },
      "errors"
    );
    tl.from(
      ".errorMsg",
      {
        x: 50,
        opacity: 0,
        duration: 0.3,
      },
      "errors"
    );
  });

  return (
    <div
      ref={container}
      className="w-full h-lvh flex justify-center items-center fixed top-0 z-20"
    >
      <div className="bg-[#e0e0e0] rounded-2xl opacity h-fit w-[88%] flex flex-col justify-center items-center relative shadow-[_0px_4px_4px_0px_#00000040]">
        <div className="w-full h-9 bg-[#c3c3c3] absolute top-0 rounded-t-2xl items-center flex justify-end shadow[0px_3px_2px_#bcbcbc]">
          <button
            onClick={() => setError("")}
            className="cutBtn mr-3 scale-90 bg-black rounded-full overflow-hidden"
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M28.25 14.5C28.25 22.0938 22.0938 28.25 14.5 28.25C6.90608 28.25 0.75 22.0938 0.75 14.5C0.75 6.90608 6.90608 0.75 14.5 0.75C22.0938 0.75 28.25 6.90608 28.25 14.5ZM10.3332 10.3333C10.736 9.93055 11.3889 9.93055 11.7917 10.3333L14.5 13.0415L17.2082 10.3333C17.6109 9.93057 18.2639 9.93057 18.6667 10.3333C19.0694 10.736 19.0694 11.389 18.6667 11.7917L15.9583 14.5L18.6667 17.2082C19.0694 17.6109 19.0694 18.2639 18.6667 18.6667C18.2639 19.0694 17.6109 19.0694 17.2082 18.6667L14.5 15.9585L11.7917 18.6667C11.389 19.0694 10.736 19.0694 10.3333 18.6667C9.93055 18.2639 9.93055 17.6109 10.3333 17.2083L13.0415 14.5L10.3332 11.7917C9.9305 11.389 9.9305 10.736 10.3332 10.3333Z"
                fill="#e0e0e0"
              />
            </svg>
          </button>
        </div>
        <div className="alert w-[130px] h-[130px] flex justify-center items-center rounded-full scale-[0.55] relative top-4">
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
          <p className="text-2xl font-bold">
            {["E", "r"].map((alp: string, i: number) => (
              <span key={i} className="er inline-block">
                {alp}
              </span>
            ))}
            {["r", "o", "r"].map((alp: string, i: number) => (
              <span key={i} className="ror inline-block">
                {alp}
              </span>
            ))}
          </p>
          <p className="text-lg text-center">
            <span className="pleaseEnter inline-block">please enter</span>{" "}
            <span className="errorMsg font-semibold inline-block">
              {errorValue}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

interface Product {
  rate: string;
  rateUnit: string;
  name: string;
  quantity: string;
  unit: string;
  amount: string;
}

interface Navprob {
  setDlt: Dispatch<SetStateAction<string>>;
  productList: Product[];
  setProductList: Dispatch<SetStateAction<Product[]>>;
  index: number;
}

export function DeletePopUp(probs: Navprob) {
  const container = useRef<HTMLDivElement | null>(null);
  const { setDlt, productList, setProductList, index } = probs;

  useGSAP(() => {
    gsap.from(".yes", {
      x: -150,
      opacity: 0.5,
      duration: 0.8,
      ease: "bounce.out",
    });
    gsap.from(".no", {
      x: 150,
      opacity: 0.5,
      duration: 0.8,
      ease: "bounce.out",
    });
  },{scope:container});

  const handleDlt = () => {
    const newProductList = productList;
    const copyProductList1 = newProductList.filter((item, i) => {
      return i !== index;
    });
    setProductList(copyProductList1);
    setDlt("");
  };

  return (
    <div
      ref={container}
      className="w-full h-lvh flex justify-center items-center fixed top-0 z-20"
    >
      <div className="bg-[#e0e0e0] rounded-xl opacity h-fit w-[88%] flex flex-col justify-center items-center relative shadow-[_0px_4px_4px_0px_#00000040] overflow-hidden">
        <p className="py-2 font-bold text-[#4d4d4d]">
          Do you want delete this item
        </p>
        <div className="flex w-full justify-center gap-x-6 mb-3">
          <div className="yes w-fit">
            <button
              onClick={handleDlt}
              className="group flex h-fit w-20 flex-col items-center justify-center rounded-lg bg-[#F1ddcf] py-[4px] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]"
            >
              <p className="font-nunito text-[1em] font-semibold text-[#d19466] duration-200 group-active:translate-y-[5%]">
                Yes
              </p>
            </button>
          </div>
          <div className="no">
            <button
              onClick={() => setDlt("")}
              className="group flex h-fit w-20 flex-col items-center justify-center rounded-lg bg-[#F1ddcf] py-[4px] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]"
            >
              <p className="font-nunito text-[1em] font-semibold text-[#d19466] duration-200 group-active:translate-y-[5%]">
                No
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
