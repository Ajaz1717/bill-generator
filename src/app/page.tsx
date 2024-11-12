"use client";
import React, { useEffect, useRef, useState } from "react";
import ErrorPopUp, { DeletePopUp } from "@/components/popUp";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { priceCal } from "@/store/store";

interface Product {
  rate: string;
  rateUnit: string;
  name: string;
  quantity: string;
  unit: string;
  amount: string;
}

function getCookie(name: string): string | null {
  if (typeof document !== "undefined") {
    // Check if `document` is defined
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";")?.shift() || null;
    }
  }
  return null;
}

export default function Home() {
  const rateElement = useRef<HTMLInputElement | null>(null);
  const rateUnitElement = useRef<HTMLSelectElement | null>(null);
  const nameElement = useRef<HTMLInputElement | null>(null);
  const quantityElement = useRef<HTMLInputElement | null>(null);
  const unitElement = useRef<HTMLSelectElement | null>(null);
  const amountElement = useRef<HTMLInputElement | null>(null);
  const [productList, setProductList] = useState<Product[]>([]);
  // const [editProduct, setEditProduct] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [dlt, setDlt] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [errorValue, setErrorValue] = useState<string>("");
  const router = useRouter();
  // const [goods, setGoods] = useState<Product[]>([]);
  const container = useRef<HTMLDivElement | null>(null);
  const topText = "Bill Generator";
  const topTextAyyray = topText.split("");

  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.from(".bill", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.15,
      });
      gsap.from(".generator", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        stagger: -0.06,
      });
      tl.from(".first", {
        y: -100,
        duration: 0.5,
        opacity: 0,
        // scale: 0,
        // delay:1,
      });
      tl.from(".second", {
        y: -100,
        duration: 0.5,
        opacity: 0,
        // scale: 0,
        // delay:1,
      });
      tl.from(
        ".third1",
        {
          x: -200,
          duration: 0.5,
          opacity: 0,
          scale: 0,
          // delay:1,
        },
        "third"
      );
      tl.from(
        ".third2",
        {
          x: 200,
          duration: 0.5,
          opacity: 0,
          // scale: 0,
          // delay:1,
        },
        "third"
      );
      // tl.from(".nota", {
      //   // x: -100,
      //   duration: 0.5,
      //   opacity: 0,
      //   scale: 0,
      //   // delay:1,
      // });
      tl.from(
        ".no",
        {
          x: -80,
          duration: 0.5,
          opacity: 0,
          ease: "back.out",
          // scale: 0,
          // delay:1,
        },
        "noItem"
      );
      tl.from(
        ".item",
        {
          x: 80,
          duration: 0.5,
          opacity: 0,
          ease: "back.out",
          // scale: 0,
          // delay:1,
        },
        "noItem"
      );
      tl.from(".proceed", {
        y: -100,
        duration: 0.5,
        opacity: 0,
        ease:'bounce.out'
        // scale: 0,
        // delay:1,
      });
      // tl.current = gsap.timeline({paused:true}).from('.form',{
      //   x:200,
      //   duration: 2,
      //   delay: 1
      // })
    },
    { scope: container }
  );

  // const stringValue: string = localStorage.getItem("pass") || "";
  // const pass = JSON.parse(stringValue)

  // const pass = getCookie("pass");

  // useEffect(() => {
  //   if (pass !== "4590") {
  //     redirect("/auth");
  //   }
  // }, [pass]);
  useEffect(() => {
    const pass = getCookie("pass"); // Call getCookie inside useEffect
    if (pass !== "4590") {
      router.push("/auth");
    }
  }, [router]);

  const redirectToPage = () => {
    if (productList.length != 0) {
      if (typeof window !== "undefined") {
        localStorage.setItem("goods", JSON.stringify(productList));
      }
      router.push("/customer");
    } else {
      setError("error");
      setErrorValue("product list");
    }
  };

  const handleSubmit = () => {
    if (
      rateElement.current &&
      rateUnitElement.current &&
      nameElement.current &&
      quantityElement.current &&
      unitElement.current &&
      amountElement.current
    ) {
      const rate = rateElement.current.value;
      const rateUnit = rateUnitElement.current.value;
      const name = nameElement.current.value;
      const quantity = quantityElement.current?.value;
      const unit = unitElement.current.value;
      const amount = amountElement.current.value;
      const newItem = {
        rate,
        rateUnit,
        name,
        quantity,
        unit,
        amount,
      };
      if (name && amount) {
        setProductList((prevList) => [...prevList, newItem]);
        if (typeof window !== "undefined") {
          localStorage.setItem("goods", JSON.stringify(productList));
        }
        rateElement.current.value = "";
        rateUnitElement.current.value = "";
        nameElement.current.value = "";
        quantityElement.current.value = "";
        unitElement.current.value = "";
        amountElement.current.value = "";
      } else if (!name && !amount) {
        setError("error");
        setErrorValue("product name & amount");
      } else if (!name) {
        setError("error");
        setErrorValue("product name");
      } else if (!amount) {
        setError("error");
        setErrorValue("amount");
      }
    }
  };

  // const handleEdit = (index: number) => {
  //   let newProductList = productList;
  //   let copyProductList1 = newProductList.filter((item, i) => {
  //     return i === index;
  //   });
  //   setEditProduct(copyProductList1);
  // };

  const handleDlt = (index: number) => {
    setDlt("delete");
    setIndex(index);
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const product = localStorage.getItem("goods") || "";

  //     try {
  //       setGoods(product ? JSON.parse(product) : null);
  //     } catch (error) {
  //       console.error("Error parsing 'goods' from localStorage", error);
  //       setGoods([]); // Set a default or handle error
  //     }
  //   }
  // }, []);

  return (
    <>
      {dlt == "delete" && (
        <DeletePopUp
          setDlt={setDlt}
          productList={productList}
          setProductList={setProductList}
          index={index}
        />
      )}
      {error == "error" && (
        <ErrorPopUp setError={setError} errorValue={errorValue} />
      )}
      <div
        ref={container}
        className="flex flex-col items-center min-h-lvh px-1 pt-5 bg-[#e8e8e8] w-full text-center shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff] overflow-hidden"
      >
        {/* header  */}
        <div className="py-5 mb-3 bg-[#e0e0e0] rounded-3xl w-[85%] text-center shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff] text-[#4d4d4d] border-[2px] border-[#CECECE]">
          <h1 className="test text-3xl font-bold">
            {topTextAyyray.splice(0, 4).map((t: string, i: number) => (
              <span key={i} className="bill inline-block">{t}</span>
            ))}
            <span> </span>
            {topTextAyyray.splice(0, 10).map((t: string, i: number) => (
              <span key={i} className="generator inline-block">{t}</span>
            ))}
          </h1>
        </div>
        {/* form  */}
        <div className="form flex flex-col justify-center items-center w-[90%] py-5 rounded-3xl shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff] border-[2px] border-[#CECECE] mb-3">
          <div className="first flex w-[90%] justify-center mb-2">
            <div className="w-[80%]">
              <input
                ref={rateElement}
                type="number"
                name=""
                id="rate"
                className="border-none px-2 py-3 rounded-tl-[1rem] rounded-bl-[1rem] outline-none appearance-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 text-[#4d4d4d] w-full"
                placeholder="Rate"
              />
            </div>
            <div className="w-[20%]">
              <select
                ref={rateUnitElement}
                name="rateUnit"
                id=""
                className="border-none w-full py-3 rounded-tr-[1rem] rounded-br-[1rem] outline-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 appearance-none text-center text-[#4d4d4d] font-semibold"
              >
                <option value="kg" className="bg-[#e8e8e8]">
                  /kg
                </option>
                <option value="g" className="bg-[#e8e8e8]">
                  /g
                </option>
                <option value="pic" className="bg-[#e8e8e8]">
                  /pic
                </option>
                <option value="packet" className="bg-[#e8e8e8]">
                  /packet
                </option>
                <option value="tina" className="bg-[#e8e8e8]">
                  /tina
                </option>
              </select>
            </div>
          </div>
          <div className="second flex w-[90%] justify-center">
            <div className="w-[80%]">
              <input
                ref={nameElement}
                type="text"
                name=""
                id="product"
                className="border-none px-2 py-3 rounded-tl-[1rem] rounded-bl-[1rem] outline-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 text-[#4d4d4d] w-full"
                placeholder="type here"
              />
            </div>
            <div className="w-[20%]">
              <input
                ref={quantityElement}
                type="number"
                name=""
                id="quantity"
                className="border-none px-2 py-3 outline-none appearance-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 text-[#4d4d4d] w-full"
                placeholder="q"
              />
            </div>
            <div>
              <select
                ref={unitElement}
                name="unit"
                id=""
                className="border-none py-3 rounded-tr-[1rem] rounded-br-[1rem] outline-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 appearance-none text-center text-[#4d4d4d] font-semibold"
              >
                <option value="kg" className="bg-[#e8e8e8]">
                  kg
                </option>
                <option value="g" className="bg-[#e8e8e8]">
                  g
                </option>
                <option value="pic" className="bg-[#e8e8e8]">
                  pic
                </option>
                <option value="packet" className="bg-[#e8e8e8]">
                  packet
                </option>
                <option value="tina" className="bg-[#e8e8e8]">
                  tina
                </option>
              </select>
            </div>
          </div>
          <div className="third flex justify-between gap-1 w-[90%] mt-2">
            <div className="third1 w-[75%]">
              <input
                ref={amountElement}
                type="number"
                name=""
                id="amount"
                className="border-none px-2 py-3 rounded-[1rem] outline-none bg-[#e8e8e8] shadow-[20px_20px_60px_#c5c5c5,-20px_-20px_60px_#ffffff] focus:outline-[#e8e8e8] focus:bg-[#e8e8e8] focus:shadow-[_inset_20px_20px_60px_#c5c5c5,_inset_-20px_-20px_60px_#ffffff] focus:transition-all focus:duration-300 transition-all duration-300 text-[#4d4d4d] w-full"
                placeholder="₹"
              />
            </div>
            <div className="third2 w-1/4">
              <button
                onClick={handleSubmit}
                className="group flex h-fit w-full flex-col items-center justify-center rounded-full bg-[#F1ddcf] px-[15px] py-[6px] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]"
              >
                <p className="font-nunito text-[1.5em] font-semibold text-[#d19466] duration-200 group-active:translate-y-[5%]">
                  Add
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* products  */}
        {productList?.length == 0 && (
          <div className="nota font-bold italic lowercase text-[#4d4d4d] text-xl">
            <span className="no inline-block">NO</span>{" "}
            <span className="item inline-block">ITEMS</span>
          </div>
        )}
        {productList?.length != 0 && (
          <div className="list w-[90%] py-5 rounded-3xl mb-[76px] shadow-[rgba(50,_50,_93,_0.25)_0px_30px_50px_-12px_inset,_rgba(0,_0,_0,_0.3)_0px_18px_26px_-18px_inset] transition-all duration-300 bg-[linear-gradient(50deg,_#c7d3dc,_#d9e7f1)] [background-size:1px_25px] border-[1px] border-[#839db0]">
            {/* hover:bg-[10px] hover:scale-y-[1.2]  */}
            {productList.map((item: Product, i: number) => (
              <div
                key={i}
                className="w-full bg-white flex justify-between items-center px-2 py-2 opacity-50"
              >
                <div className="flex gap-1 w-3/4 text-[#4d4d4d] text-sm font-semibold">
                  <p className="w-[80%] flex justify-between">
                    <span className="capitalize">{item.name}</span>{" "}
                    <span>
                      {item.quantity} {item.unit}
                    </span>
                  </p>
                  <p className="w-[20%]">₹{item.amount}</p>
                </div>
                <div className="flex justify-end gap-2 w-1/4">
                  <button
                    // onClick={() => handleEdit(i)}
                    className="border-[1px] border-green-400 rounded-md px-[2px] hover:bg-green-400 transition-all duration-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4d4d4d"
                    >
                      <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDlt(i)}
                    className="border-[1px] border-red-400 rounded-md px-[2px] hover:bg-red-400 transition-all duration-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4d4d4d"
                    >
                      <path d="M600-240v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120-640H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440-200H200q-33 0-56.5-23.5T120-280v-360Zm80 0v360h240v-360H200Zm0 0v360-360Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {priceCal(productList) != 0 && (
          <div className="w-[90%] flex justify-between relative bottom-16 px-2">
            <p className="font-semibold text-xl text-[#4d4d4d] italic">Total:</p>
            <p className="font-bold text-xl text-[#4d4d4d] italic">
              {priceCal(productList)}
            </p>
          </div>
        )}

        {/* proceed  */}
        <div className="w-full flex justify-center items-center shadow-[_inset_20px_20px_60px_#bcbcbc,_inset_-20px_-20px_60px_#ffffff] border-[2px] border-[#CECECE] h-16 fixed bottom-0">
          <div className="proceed w-full flex justify-center">
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
      </div>
    </>
  );
}
