// import {configureStore, createSlice} from '@reduxjs/toolkit';

// const productSlice = createSlice({
//     name:'product',
//     initialState: {productList: [], details:[], pin: ""},
//     reducers: {
//         addProduct: (state:any, action) => {
//             state.productList.unshift(action.payload.productList);
//         },
//         addDetail: (state:any, action) => {
//             state.details.unshift(action.payload.details)
//         },
//         auth: (state:any, action) => {
//             state.pin = action.payload.passcode
//         },
//         dltProduct: (state:any, action) => {
//             state.productList = [...action.payload.filterFoodList]
//         }
//     }
// })

// const productStore = configureStore({reducer: {
//     product: productSlice.reducer
// }});

// export const productActions = productSlice.actions;

// export default productStore;

interface Product {
  rate: string;
  rateUnit: string;
  name: string;
  quantity: string;
  unit: string;
  amount: string;
}

export function getDate() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}-${month}-${year}`;
}

export const priceCal = (arr: Product[]) => {
  let price = 0;
  for (let index = 0; index < arr.length; index++) {
    price += parseFloat(arr[index].amount);
  }
  return price;
};

export function numberToWords(num: number): string {
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