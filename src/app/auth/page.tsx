"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";



const PasscodeInput = () => {
  const router = useRouter();
  const [passcode, setPasscode] = useState<string>("");

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
    date.setTime(date.getTime() + (seconds * 1000)); // Set expiration time
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

  const handleSubmit = () => {
    if (passcode.length === 4) {
      // localStorage.setItem("pass", JSON.stringify(passcode))
      setCookie('pass', passcode);
      setPasscode("");
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#e8e8e8] text-[#4d4d4d] shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff]">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Enter Passcode</h1>
        <p className="text-sm text-gray-400">Please enter your passcode</p>
      </div>
      <div className="flex space-x-2 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              passcode.length > index ? "bg-green-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 w-48">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
          <button
            key={digit}
            onClick={() => handleDigitClick(digit)}
            className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
          >
            {digit}
          </button>
        ))}
        <button
          onClick={handleDelete}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
        >
          ⌫
        </button>
        <button
          onClick={() => handleDigitClick("0")}
          className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] text-xl"
        >
          0
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-[inset_0px_2px_4px_0px_#22c55e,inset_0px_-2px_4px_0px_#1dce5e,0px_-2px_2px_0px_#1dce5e,0px_2px_16px_0px_#22c55e] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#22c55e,inset_0px_2px_4px_0px_#1dce5e,0px_2px_16px_0px_#1dce5e,0px_2px_16px_0px_#22c55e] text-xl"
        >
          ✓
        </button>
      </div>
    </div>
  );
};

export default PasscodeInput;
