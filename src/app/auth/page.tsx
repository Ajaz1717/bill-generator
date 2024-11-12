"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const PasscodeInput = () => {
  const router = useRouter();
  const [passcode, setPasscode] = useState<string>("");
  const container = useRef<HTMLDivElement | null>(null);
  const topText = "Enter Passcode";
  const topTextAyyray = topText.split("");
  const pleaseEnter = "Please enter";
  const pleaseEnterArray = pleaseEnter.split("");
  const yourPasscode = "your passcode";
  const yourPasscodeArray = yourPasscode.split("");

  useGSAP(
    () => {
      const tl = gsap.timeline();
      // tl.from(".heading h1", {
      //   y: -50,
      //   duration: 0.5,
      //   delay: 0.5,
      //   opacity: 0,
      //   // scale: 0,
      // });
      tl.from(
        ".a",
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          stagger: 0.15,
        },
        "sol"
      );
      tl.from(
        ".b",
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          stagger: -0.1,
        },
        "sol"
      );
      tl.from(
        ".c",
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          stagger: 0.08,
        },
        "sol"
      );
      tl.from(
        ".d",
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          stagger: -0.07,
        },
        "sol"
      );
      tl.from(
        ".first",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          stagger: 0.3,
          ease: "bounce",
        },
        "ball -=1"
      );
      tl.from(
        ".second",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          stagger: -0.3,
          ease: "bounce",
        },
        "ball -=1"
      );
      tl.from(
        ".firstGroup",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "bounce",
        },
        "-=0.3"
      );
      tl.from(
        ".secondGroup",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          stagger: -0.2,
          ease: "bounce",
        },
        "-=0.3"
      );
      tl.from(
        ".thirdGroup",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "bounce",
        },
        "-=0.3"
      );
      tl.from(
        ".subBtn",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          ease: "bounce",
        },
        "-=0.3"
      );
      tl.from(
        ".zeroBtn",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          ease: "bounce",
        },
        "-=0.3"
      );
      tl.from(
        ".dltBtn",
        {
          y: -60,
          opacity: 0,
          duration: 0.5,
          ease: "bounce",
        },
        "-=0.3"
      );
      // tl.from(".heading p", {
      //   y: -50,
      //   duration: 0.5,
      //   opacity: 0,
      //   // scale: 0,
      // });
      // tl.from(".dots div", {
      //   y: -50,
      //   duration: 0.5,
      //   opacity: 0,
      //   stagger: 0.3,
      //   // scale: 0,
      // // });
      // tl.from(".buttons", {
      //   y: -50,
      //   duration: 0.5,
      //   opacity: 0,
      //   // stagger: 0.3,
      //   scale: 0,
      // },'-=1');
    },
    { scope: container }
  );

  const handleDigitClick = (digit: string) => {
    if (passcode.length < 4) {
      setPasscode((prev) => prev + digit);
    }
  };

  const handleDelete = () => {
    setPasscode((prev) => prev.slice(0, -1));
  };

  function setCookie(name: string, value: string): void {
    const seconds = 10 * 60; // Expiration time in seconds
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000); // Set expiration time
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  }

  const handleSubmit = () => {
    if (passcode.length === 4) {
      // localStorage.setItem("pass", JSON.stringify(passcode))
      setCookie("pass", passcode);
      setPasscode("");
      router.push("/");
    }
  };

  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-center h-screen bg-[#e8e8e8] text-[#4d4d4d] shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff]"
    >
      <div className="heading text-center mb-8">
        <h1 className="text-2xl font-semibold">
          {topTextAyyray.splice(0, 6).map((text: string, i: number) => (
            <span key={i} className="inline-block a">
              {text}
            </span>
          ))}
          <span> </span>
          {topTextAyyray.splice(0, 8).map((text: string, i: number) => (
            <span key={i} className="inline-block b">
              {text}
            </span>
          ))}
        </h1>
        <p className="text-sm text-gray-400">
          {pleaseEnterArray.splice(0, 6).map((t: string, i: number) => (
            <span key={i} className="inline-block c">
              {t}
            </span>
          ))}
          <span> </span>
          {pleaseEnterArray.splice(0, 6).map((t: string, i: number) => (
            <span key={i} className="inline-block c">
              {t}
            </span>
          ))}
          <span> </span>
          {yourPasscodeArray.splice(0, 5).map((t: string, i: number) => (
            <span key={i} className="inline-block d">
              {t}
            </span>
          ))}
          <span> </span>
          {yourPasscodeArray.splice(0, 8).map((t: string, i: number) => (
            <span key={i} className="inline-block d">
              {t}
            </span>
          ))}
        </p>
      </div>
      <div className="dots flex space-x-2 mb-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={`first w-4 h-4 rounded-full ${
              passcode.length > index ? "bg-green-500" : "bg-gray-600"
            }`}
          />
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={`second w-4 h-4 rounded-full ${
              passcode.length - 2 > index ? "bg-green-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
      <div className="buttons grid grid-cols-3 gap-4 w-48">
        {["1", "2", "3"].map((digit) => (
          <div key={digit} className="firstGroup w-fit h-fit rounded-full">
            <button
              onClick={() => handleDigitClick(digit)}
              className="number flex items-center justify-center w-12 h-12 font-bold rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
            >
              {digit}
            </button>
          </div>
        ))}
        {["4", "5", "6"].map((digit) => (
          <div key={digit} className="secondGroup w-fit h-fit rounded-full">
            <button
              onClick={() => handleDigitClick(digit)}
              className="number flex items-center justify-center w-12 h-12 font-bold rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
            >
              {digit}
            </button>
          </div>
        ))}
        {["7", "8", "9"].map((digit) => (
          <div key={digit} className="thirdGroup w-fit h-fit rounded-full">
            <button
              onClick={() => handleDigitClick(digit)}
              className="number flex items-center justify-center w-12 h-12 font-bold rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
            >
              {digit}
            </button>
          </div>
        ))}
        <div className="dltBtn h-fit w-fit rounded-full">
          <button
            onClick={handleDelete}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
          >
            ⌫
          </button>
        </div>
        <div className="zeroBtn h-fit w-fit rounded-full">
          <button
            onClick={() => handleDigitClick("0")}
            className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
          >
            0
          </button>
        </div>
        <div className="subBtn h-fit w-fit rounded-full">
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-[inset_0px_2px_4px_0px_#22c55e,inset_0px_-2px_4px_0px_#1dce5e,0px_-2px_2px_0px_#1dce5e,0px_2px_16px_0px_#22c55e] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#22c55e,inset_0px_2px_4px_0px_#1dce5e,0px_2px_16px_0px_#1dce5e,0px_2px_16px_0px_#22c55e] text-xl"
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasscodeInput;
