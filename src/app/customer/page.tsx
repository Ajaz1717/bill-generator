"use client";
import ErrorPopUp from "@/components/popUp";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CustomerDetail() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [errorValue, setErrorValue] = useState<string>("");
  const invoiceElement = useRef<HTMLInputElement | null>(null);
  const sellerElement = useRef<HTMLInputElement | null>(null);
  const buyerElement = useRef<HTMLInputElement | null>(null);

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";")?.shift() || null;
    }
    return null;
  }

  const pass = getCookie("pass");

  useEffect(() => {
    if (pass !== "4590") {
      redirect("/auth");
    }
  }, [pass]);

  const redirectToPage = () => {
    const invoice = invoiceElement.current?.value;
    const seller = sellerElement.current?.value;
    const buyer = buyerElement.current?.value;
    const details = {
      invoice,
      seller,
      buyer,
    };
    if (seller && buyer) {
      if (typeof window !== "undefined") {
        localStorage.setItem("details", JSON.stringify(details));
      }
      // sellerElement.current?.value = ""
      // buyerElement.current?.value = ""
      router.push("/customer/print");
    } else if (!seller && !buyer) {
      setError("error");
      setErrorValue("seller & customer details");
    } else if (!seller) {
      setError("error");
      setErrorValue("seller details");
    } else if (!buyer) {
      setError("error");
      setErrorValue("customer details");
    }
  };
  return (
    <>
      {error == "error" && (
        <ErrorPopUp setError={setError} errorValue={errorValue} />
      )}
      <div className="flex flex-col items-center justify-center min-h-lvh px-1 pt-5 bg-[#e8e8e8] w-full text-center shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff]">
        {/* details  */}
        <div className="flex flex-col justify-center items-center w-[90%] py-5 rounded-3xl shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff] border-[2px] border-[#CECECE] mb-32">
          <div className="flex w-[90%] justify-center mb-2">
            <input
              ref={invoiceElement}
              type="number"
              name=""
              id="invoice"
              className="border-none px-2 py-3 rounded-[1rem] outline-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 text-[#4d4d4d] w-full appearance-none"
              placeholder="invoice no"
            />
          </div>
          <div className="flex w-[90%] justify-center">
            <input
              ref={sellerElement}
              type="text"
              name=""
              id="seller"
              className="border-none px-2 py-3 rounded-[1rem] outline-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 text-[#4d4d4d] w-full"
              placeholder="seller"
            />
          </div>
          <div className="flex justify-between gap-1 w-[90%] mt-2">
            <input
              ref={buyerElement}
              type="text"
              name=""
              id="customer"
              className="border-none px-2 py-3 rounded-[1rem] outline-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 text-[#4d4d4d] w-full"
              placeholder="customer"
            />
          </div>
        </div>
        {/* proceed  */}
        <div className="w-full flex justify-center items-center shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff] border-[2px] border-[#CECECE] h-16 fixed bottom-0">
          <button
            onClick={redirectToPage}
            className="group flex h-fit w-[90%] flex-col items-center justify-center rounded-full bg-[#F1ddcf] px-[15px] py-[6px] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]"
          >
            <p className="font-nunito text-[1.5em] font-semibold text-[#d19466] duration-200 group-active:translate-y-[5%]">
              Proceed
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
