import dave from "../assets/img/customers/dave.jpg";
import ben from "../assets/img/customers/ben.jpg";
import steve from "../assets/img/customers/steve.jpg";
import hannah from "../assets/img/customers/hannah.jpg";

import cus1 from "../assets/img/customers/customer-1.jpg";
import cus2 from "../assets/img/customers/customer-2.jpg";
import cus3 from "../assets/img/customers/customer-3.jpg";
import cus4 from "../assets/img/customers/customer-4.jpg";
import cus5 from "../assets/img/customers/customer-5.jpg";
import cus6 from "../assets/img/customers/customer-6.jpg";

import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

export const customer_images = [cus1, cus2, cus3, cus4, cus5, cus6];

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "meals",
    url: "/meals",
  },
  {
    id: 3,
    text: "plan",
    url: "/pricing",
  },
];

export const social_links = [
  <IoLogoInstagram />,
  <IoLogoFacebook />,
  <IoLogoTwitter />,
];

export const account_links = [
  "Create account",
  "Sign in",
  "iOS app",
  "Android app",
];

export const company_links = [
  "About Omnifood",
  "For Business",
  "Cooking partners",
  "Careers",
];

export const resources_links = [
  "Recipe directory",
  "Help center",
  "Privacy & terms",
];

export const testimonials = [
  {
    image: dave,
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    name: "Dave Bryson",
  },
  {
    image: ben,
    text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: "Ben hadly",
  },
  {
    image: steve,
    text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: "Steve Miller",
  },
  {
    image: hannah,
    text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    name: "Hannah Smith",
  },
];

export const meals_url =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";
