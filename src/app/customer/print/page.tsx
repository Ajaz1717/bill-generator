"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  rate: string;
  rateUnit: string;
  name: string;
  quantity: string;
  unit: string;
  amount: string;
}

interface Details {
  invoice: string;
  seller: string;
  buyer: string;
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";")?.shift() || null;
  }
  return null;
}

export default function Print() {
  const router = useRouter();
  const [goods, setGoods] = useState<Product[]>([]); // Adjust type as necessary
  const [details, setDetails] = useState<Details>(); // Adjust type as necessary

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this runs only on the client
      const product = localStorage.getItem("goods") || "";
      const info = localStorage.getItem("details") || "";

      try {
        setGoods(product ? JSON.parse(product) : null);
      } catch (error) {
        console.error("Error parsing 'goods' from localStorage", error);
        setGoods([]); // Set a default or handle error
      }

      try {
        setDetails(info ? JSON.parse(info) : null);
      } catch (error) {
        console.error("Error parsing 'details' from localStorage", error);
        // Set a default or handle error
      }
    }
  }, []);

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

  function getDate() {
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}-${month}-${year}`;
  }

  const priceCal = (arr: Product[]) => {
    let price = 0;
    for (let index = 0; index < arr.length; index++) {
      price += parseFloat(arr[index].amount);
    }
    return price;
  };

  const toWord = Math.round(priceCal(goods));

  function numberToWords(num: number): string {
    if (num === 0) return "zero";

    const belowTwenty: string[] = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    const tens: string[] = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    const thousands: string[] = ["", "thousand", "million", "billion"];

    function helper(n: number): string {
      if (n === 0) return "";
      else if (n < 20) return belowTwenty[n] + " ";
      else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
      else
        return belowTwenty[Math.floor(n / 100)] + " hundred " + helper(n % 100);
    }

    let word = "";
    let i = 0;

    while (num > 0) {
      if (num % 1000 !== 0) {
        word = helper(num % 1000) + thousands[i] + " " + word;
      }
      num = Math.floor(num / 1000);
      i++;
    }

    return word.trim();
  }

  return (
    <div className="w-full pt-3">
      <div className="w-full text-center">
        <p className="text-xl font-bold">Bill of Supply</p>
      </div>
      <div className="mx-3 border-[1px] shadow-black text-xs md:text-base">
        {/* 1st  */}
        <div className="w-full flex border-b-[1px] shadow-black">
          <div className="border-r-[1px] shadow-black w-1/2">
            {/* l  */}
            <div className="p-2 pb-20 border-b-[1px] shadow-black h-44">
              <p className="font-bold">Akhlaque Kirana Store</p>
              <p>
                <span className="font-bold">address :</span>
                <span>Saraiya Varanasi 221001</span>
              </p>
              <p>
                <span className="font-bold">Mo . :</span>
                <span>8299201035</span>
              </p>
            </div>
            <div className="p-2 pb-20 border-b-[1px] shadow-black h-44">
              <p>Consignee</p>
              <p className="font-bold capitalize">{`${details?.buyer} ${details?.invoice} Varanasi`}</p>
            </div>
            <div className="p-2 pb-20 h-44">
              <p className="">Buyer (if other than consignee)</p>
              <p className="font-bold capitalize">{`${details?.buyer} ${details?.invoice} Varanasi`}</p>
            </div>
          </div>
          <div className=" w-1/2">
            <div className="w-full flex border-b-[1px] shadow-black h-16">
              <div className="w-1/2 p-2 border-r-[1px] shadow-black">
                <p>Invoice No.</p>
                <p className="font-bold">{details?.invoice}</p>
              </div>
              <div className="w-1/2 p-2">
                <p>Dated</p>
                <p className="font-bold">{getDate()}</p>
              </div>
            </div>
            <div className="w-full flex border-b-[1px] shadow-black h-16">
              <div className="w-1/2 p-2 border-r-[1px] shadow-black">
                <p>Delivery Note</p>
              </div>
              <div className="w-1/2 p-2">
                <p>Mode/Terms of Payment</p>
              </div>
            </div>
            <div className="w-full flex border-b-[1px] shadow-black h-16">
              <div className="w-1/2 p-2 border-r-[1px] shadow-black">
                <p>Supplier&#39;s Ref.</p>
              </div>
              <div className="w-1/2 p-2">
                <p>Other Reference(s)</p>
              </div>
            </div>
            <div className="w-full flex border-b-[1px] shadow-black h-16">
              <div className="w-1/2 p-2 border-r-[1px] shadow-black">
                <p>Buyer&#39;s Order No.</p>
              </div>
              <div className="w-1/2 p-2">
                <p>Dated</p>
              </div>
            </div>
            <div className="w-full flex border-b-[1px] shadow-black h-16">
              <div className="w-1/2 p-2 border-r-[1px] shadow-black">
                <p>Despatch Document No.</p>
              </div>
              <div className="w-1/2 p-2">
                <p>Delivery Note Date</p>
              </div>
            </div>
            <div className="w-full flex border-b-[1px] shadow-black h-16">
              <div className="w-1/2 p-2 border-r-[1px] shadow-black">
                <p>Despatched through</p>
              </div>
              <div className="w-1/2 p-2">
                <p>Destination</p>
              </div>
            </div>
            <div className="w-full">
              <p>Terms of Delivery</p>
            </div>
          </div>
        </div>
        {/* 2nd  */}
        <div>
          <div className="w-full flex border-b-[1px] border-black">
            <div className="border-r-[1px] border-black text-center text-wrap w-[8%]">
              <p className="p-2 border-b-[1px] border-black h-[50px]">SI No.</p>
              {goods.map((item: Product, i: number) => (
                <p key={i} className="p-2">
                  {i + 1}
                </p>
              ))}
            </div>
            <div className="border-r-[1px] w-[50%] border-black">
              <p className="border-b-[1px] border-black p-2 text-center h-[50px]">
                Description of Goods
              </p>
              {goods.map((item: Product, i: number) => (
                <p key={i} className="p-2 font-bold">
                  {item.name}
                </p>
              ))}
            </div>
            <div className="border-r-[1px] border-black w-[28%]">
              <div className="w-full text-center p-2">
                <p>Quantity</p>
              </div>
              <div className="border-t-[1px] border-black flex w-full">
                <div className="border-r-[1px] border-black w-1/2 text-center">
                  <p className="border-b-[1px] border-black">Shipped</p>
                  {goods.map((item: Product, i: number) => (
                    <p key={i} className="p-2">
                      {item.quantity} {item.unit}
                    </p>
                  ))}
                </div>
                <div className="w-1/2 text-center">
                  <p className="border-b-[1px] border-black">Billed</p>
                  {goods.map((item: Product, i: number) => (
                    <p key={i} className="p-2 font-bold">
                      {item.quantity} {item.unit}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-r-[1px] border-black">
              <p className="border-b-[1px] border-black p-2 h-[50px]">Rate</p>
              {goods.map((item: Product, i: number) => (
                <p key={i} className="p-2">
                  {item.rate}
                </p>
              ))}
            </div>
            <div className="border-r-[1px] border-black">
              <p className="border-b-[1px] border-black p-2 h-[50px]">per</p>
              {goods.map((item: Product, i: number) => (
                <p key={i} className="p-2">
                  {item.rateUnit}
                </p>
              ))}
            </div>
            <div className="w-[17%] text-center">
              <p className="p-2 border-b-[1px] border-black h-[50px]">Amount</p>
              {goods.map((item: Product, i: number) => (
                <p key={i} className="p-2 text-end font-bold">
                  {item.amount}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex p-2">
          <div className="w-4/5 text-center">
            <p>Total</p>
          </div>
          <div className="w-1/5 text-end font-bold">
            <p>₹{priceCal(goods)}</p>
          </div>
        </div>
        {/* 3rd  */}
        <div className="w-full px-2 pt-2 flex flex-col border-[1px] border-black justify-between h-60">
          <div className="w-full">
            <div className="w-full flex justify-between">
              <p>Amount Chargeable (in word)</p>
              <p className="italic">E. & O.E</p>
            </div>
            <p className="font-bold capitalize">INR {numberToWords(toWord)}</p>
            <p className="font-bold">Only</p>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-1/2 flex flex-col justify-end pb-2">
              <p className="underline">Declaration</p>
              <p>
                We declare that this invoice shows the actual price of the goods
              </p>
              <p>described and that all particulars are ture and correct</p>
            </div>
            <div className="w-1/2 p-2 relative left-2 flex flex-col items-end border-l-[1px] border-t-[1px] border-black">
              <p className="font-bold mb-10 capitalize">For {details?.seller}</p>
              <p>Authorised Signatory</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-xs">
        <p>FSSAI NO- 22723633000085</p>
      </div>

      <div className="w-full flex justify-end relative bottom-6">
        <button
          className="group flex h-fit w-[100px] flex-col items-center justify-center rounded-full px-[15px] py-[6px] duration-200 hover:translate-y-[5%] active:translate-y-[7%] mx-3"
          onClick={() => window.print()}
        >
          <p className="font-nunito text-base font-semibold duration-200 group-active:translate-y-[5%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z" />
            </svg>
          </p>
        </button>
      </div>
    </div>
  );
}
