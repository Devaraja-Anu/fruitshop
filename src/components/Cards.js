import oranges from "../images/oranges.jpg";
import strawberries from "../images/strawberries.jpg";
import grapes from "../images/grapes.jpg";
import lemons from "../images/lemons.jpg";
import appleGreen from "../images/greenApples.jpg";
import appleRed from "../images/RedApples.jpg";
import pears from "../images/pears.jpg";
import kiwis from "../images/kiwis.jpg";
import mangoes from "../images/mangoes.jpg";
import raspberries from "../images/raspberries.jpg";
import pineapples from "../images/pineapples.jpg";
import blueberries from "../images/blueberries.jpg";
import lychee from "../images/lychee.jpg";
import figs from "../images/figs.jpg";
import blackberries from "../images/blackberries.jpg";
import guava from "../images/guava.jpg";
import placeholder from "../images/productPlaceholder.jpg"
import { useState, useEffect } from "react";
import axios from "axios";

const fruitnames = [
  {
    fruit: "appleRed",
    image: appleRed,
  },
  {
    fruit: "appleGreen",
    image: appleGreen,
  },
  {
    fruit: "oranges",
    image: oranges,
  },
  {
    fruit: "strawberries",
    image: strawberries,
  },
  {
    fruit: "grapes",
    image: grapes,
  },
  {
    fruit: "lemons",
    image: lemons,
  },

  {
    fruit: "pears",
    image: pears,
  },
  {
    fruit: "kiwis",
    image: kiwis,
  },
  {
    fruit: "mangoes",
    image: mangoes,
  },
  {
    fruit: "raspberries",
    image: raspberries,
  },
  {
    fruit: "pineapples",
    image: pineapples,
  },
  {
    fruit: "blueberries",
    image: blueberries,
  },
  {
    fruit: "lychee",
    image: lychee,
  },
  {
    fruit: "guava",
    image: guava,
  },
  {
    fruit: "figs",
    image: figs,
  },
  {
    fruit: "blackberries",
    image: blackberries,
  },
];

const DB = [
  {
    fruit: "appleRed",
    image: appleRed,
    price: "120",
    Background: "bg-red-400",
  },
  {
    fruit: "appleGreen",
    image: appleGreen,
    price: "170",
    Background: "bg-green-400",
  },
];

const defaultBackground = 'bg-background'

const CardScroll = () => {

  // const [database, setdatabase] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/products").then((response) => {
  //     setdatabase(response.data)
  //   });
  // }, []);

  // const findImage = (fruitName) => {
  //   const selectedFruit = fruitnames.find((fruit) => fruit.fruit === fruitName);
  //   return selectedFruit?.image;
  // };

  return DB.map((details ) => {
    // const imageSrc = findImage(details.image);

    return (
      <div key={details.image} className="h-96 w-64 lg:my-4">
        <div className=" border-2 rounded-3xl ">
          <img
            className="rounded-t-3xl object-cover h-48 w-fit "
            src={details.image ?? placeholder}
            alt="A sample of the product is displayed "
          />
          <div className="flex flex-col justify-center items-center">
            <div className="w-full flex justify-between pr-4 py-2 bg-white">
              <h1 className="text-2xl pl-2">{details.fruit ?? 'Oops! fruit not loaded' }</h1>
              <p className="text-2xl">
                {details.price} {"\u20B9"}
              </p>
            </div>
            <div className="bg-white w-full flex flex-col items-center justify-center">
              <p>Lorem ipsum dolor sit amet</p>
              <p>Review: *****</p>
            </div>
          </div>
          <button
            className={` text-white ${details.Background ?? defaultBackground } w-full text-2xl h-16 rounded-b-3xl hover:text-3xl transition-all`}          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
};

export default CardScroll;
