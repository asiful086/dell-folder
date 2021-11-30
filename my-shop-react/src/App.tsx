import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecursiveComponent from "./components/RecursiveComponent";
import RecComTwo from "./components/RecComTwo";
import Checkout from "./views/Checkout";
// import "./App.css";

function App() {
  const [state, setState] = useState({
    categories: [
      {
        id: 6,
        slug: "Cooking-Necessities",
        name: {
          en: "Cooking Necessities",
          bn: "\u09b0\u09a8\u09cd\u09a7\u09a8 \u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u099c\u09a8\u09c0\u09af\u09bc\u09a4\u09be",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316695Cooking-Necessities.png",
        sub_cat: [
          {
            id: 85,
            slug: "Chal-and-Dal",
            name: {
              en: "Chal & Dal",
              bn: "\u099a\u09be\u09b2 \u0993 \u09a1\u09be\u09b2",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 86,
            slug: "Sugar-and-Salt",
            name: {
              en: "Sugar & Salt",
              bn: "\u099a\u09bf\u09a8\u09bf \u098f\u09ac\u0982 \u09b2\u09ac\u09a3",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 87,
            slug: "Atta-Flour-and-Shuji",
            name: {
              en: "Atta,Flour& Shuji",
              bn: "\u0986\u099f\u09be ,\u09ae\u09af\u09bc\u09a6\u09be \u098f\u09ac\u0982 \u09b8\u09c1\u099c\u09bf",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 89,
            slug: "Cooking-Oil",
            name: {
              en: "Cooking Oil",
              bn: "\u09b0\u09be\u09a8\u09cd\u09a8\u09be\u09b0 \u09a4\u09c7\u09b2",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 91,
            slug: "Ready-Mix",
            name: {
              en: "Ready Mix",
              bn: "\u09aa\u09cd\u09b0\u09b8\u09cd\u09a4\u09c1\u09a4 \u09ae\u09bf\u09b6\u09cd\u09b0\u09a3",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 92,
            slug: "Sauces-and-Pickles",
            name: {
              en: "Sauces & Pickles",
              bn: "\u09b8\u09b8 \u098f\u09ac\u0982 \u0986\u099a\u09be\u09b0",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 93,
            slug: "Spices-and-Ingredients",
            name: {
              en: "Spices & Ingredients",
              bn: "\u09ae\u09b6\u09b2\u09be \u098f\u09ac\u0982 \u0989\u09aa\u0995\u09b0\u09a3",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 94,
            slug: "Vinegar-and-Salad-Dressing",
            name: {
              en: "Vinegar & Salad Dressing",
              bn: "\u09ad\u09bf\u09a8\u09c7\u0997\u09be\u09b0 \u098f\u09ac\u0982 \u09b8\u09be\u09b2\u09be\u09a6 \u09a1\u09cd\u09b0\u09c7\u09b8\u09bf\u0982",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 105,
            slug: "Baking-Needs",
            name: {
              en: "Baking Needs",
              bn: "\u09ac\u09c7\u0995\u09bf\u0982 \u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u099c\u09a8",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 106,
            slug: "Matchs-and-Other-Special-Ingredients",
            name: {
              en: "Matchs & Other Special Ingredients",
              bn: "\u09ae\u09cd\u09af\u09be\u099a \u098f\u09ac\u0982 \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af \u09ac\u09bf\u09b6\u09c7\u09b7 \u0989\u09aa\u09be\u09a6\u09be\u09a8",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 3,
        slug: "Fish-and-Meat",
        name: {
          en: "Fish & Meat",
          bn: "\u09ae\u09be\u099b \u0993 \u09ae\u09be\u0982\u09b8",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316624Fish-&-Meat.png",
        sub_cat: [
          {
            id: 15,
            slug: "Fish",
            name: {
              en: "Fish",
              bn: "\u09ae\u09be\u099b",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 16,
            slug: "Meat",
            name: {
              en: "Meat",
              bn: "\u09ae\u09be\u0982\u09b8",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 88,
            slug: "Egg",
            name: {
              en: "Egg",
              bn: "\u09a1\u09bf\u09ae",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 2,
        slug: "Fruits-and-Vegetables",
        name: {
          en: "Fruits & Vegetables",
          bn: "\u09ab\u09b2\u09ae\u09c2\u09b2 \u0993 \u09b6\u09be\u0995\u09b8\u09ac\u099c\u09bf",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316533Fruits-&-Vegetables.png",
        sub_cat: [
          {
            id: 13,
            slug: "Fresh-Fruits",
            name: {
              en: "Fresh Fruits",
              bn: "\u09ab\u09b2\u09ae\u09c2\u09b2",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 14,
            slug: "Fresh-Vegetables",
            name: {
              en: "Fresh Vegetables",
              bn: "\u099f\u09be\u099f\u0995\u09be \u09b6\u09be\u0995\u09b8\u09ac\u099c\u09bf",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 1,
        slug: "Snacks-and-Meals",
        name: {
          en: "Snacks & Meals",
          bn: "\u09b8\u09cd\u09a8\u09cd\u09af\u09be\u0995\u09b8 \u0993 \u0996\u09be\u09ac\u09be\u09b0",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316572Snacks-&-Meals.png",
        sub_cat: [
          {
            id: 19,
            slug: "Local-Breakfast",
            name: {
              en: "Local Breakfast",
              bn: "\u09a6\u09c7\u09b6\u09c0\u09af\u09bc \u09a8\u09be\u09b8\u09cd\u09a4\u09be",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 20,
            slug: "Energy-Boosters",
            name: {
              en: "Energy Boosters",
              bn: "\u09b6\u0995\u09cd\u09a4\u09bf \u09b8\u09b9\u09be\u09af\u09bc\u0995",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 21,
            slug: "Cereals",
            name: {
              en: "Cereals",
              bn: "\u09ad\u0995\u09cd\u09b7\u09cd\u09af \u09b6\u09b8\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 22,
            slug: "Jam-and-Others",
            name: {
              en: "Jam & Others",
              bn: "\u099c\u09be\u09ae \u0993 \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 24,
            slug: "Breads-and-Honey",
            name: {
              en: "Breads & Honey",
              bn: "\u09aa\u09be\u0989\u09b0\u09c1\u099f\u09bf \u0993 \u09ae\u09a7\u09c1",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 25,
            slug: "Cookies-and-Biscuits",
            name: {
              en: "Cookies & Biscuits",
              bn: "\u0995\u09c1\u0995\u09bf\u099c \u098f\u09ac\u0982 \u09ac\u09bf\u09b8\u09cd\u0995\u09c1\u099f",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 26,
            slug: "Cakes",
            name: {
              en: "Cakes",
              bn: "\u0995\u09c7\u0995",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 29,
            slug: "Frozen-Food",
            name: {
              en: "Frozen Food",
              bn: "\u09b9\u09bf\u09ae\u09be\u09af\u09bc\u09bf\u09a4 \u0996\u09be\u09a6\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 30,
            slug: "Soups",
            name: {
              en: "Soups",
              bn: "\u09b8\u09c2\u09aa",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 31,
            slug: "Noodles-Pasta-and-Shemai",
            name: {
              en: "Noodles, Pasta & Shemai",
              bn: "\u09a8\u09c1\u09a1\u09b2\u09b8, \u09aa\u09be\u09b8\u09cd\u09a4\u09be \u098f\u09ac\u0982 \u09b8\u09c7\u09ae\u09be\u0987",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 32,
            slug: "Chips-Nuts-and-Others",
            name: {
              en: "Chips, Nuts and Others",
              bn: "\u099a\u09bf\u09aa\u09b8, \u09ac\u09be\u09a6\u09be\u09ae \u098f\u09ac\u0982 \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 33,
            slug: "Chocolate-and-Sweets",
            name: {
              en: "Chocolate & Sweets",
              bn: "\u099a\u0995\u09cb\u09b2\u09c7\u099f \u098f\u09ac\u0982 \u09ae\u09bf\u09b7\u09cd\u099f\u09bf",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 5,
        slug: "Milk-and-Dairy-Products",
        name: {
          en: "Milk & Dairy Products",
          bn: "\u09a6\u09c1\u09a7 \u0993 \u09a6\u09c1\u0997\u09cd\u09a7\u099c\u09be\u09a4 \u09aa\u09a3\u09cd\u09af",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316790Milk-&-Dairy-Products.png",
        sub_cat: [
          {
            id: 40,
            slug: "Liquid-and-UHT-Milk",
            name: {
              en: "Liquid & UHT Milk",
              bn: "\u09a4\u09b0\u09b2 \u0993 \u0987\u0989\u098f\u0987\u099a\u099f\u09bf \u09a6\u09c1\u09a7",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 41,
            slug: "Butter-Cheese-and-Yoghurt",
            name: {
              en: "Butter,Cheese & Yoghurt",
              bn: "\u09ae\u09be\u0996\u09a8 ,\u09aa\u09a8\u09bf\u09b0 \u098f\u09ac\u0982 \u09a6\u0987",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 42,
            slug: "Flavored-Drinks",
            name: {
              en: "Flavored Drinks",
              bn: "\u09b8\u09cd\u09ac\u09be\u09a6\u09af\u09c1\u0995\u09cd\u09a4 \u09aa\u09be\u09a8\u09c0\u09af\u09bc",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 43,
            slug: "Powder-Milk",
            name: {
              en: "Powder Milk",
              bn: "\u0997\u09c1\u0981\u09a1\u09bc\u09be \u09a6\u09c1\u09a7",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 90,
            slug: "Ghee-and-Cream",
            name: {
              en: "Ghee & Cream",
              bn: "\u0998\u09bf \u098f\u09ac\u0982 \u0995\u09cd\u09b0\u09bf\u09ae",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 48,
        slug: "Office-Stationery",
        name: {
          en: "Office Stationeries",
          bn: "\u0985\u09ab\u09bf\u09b8 \u09b8\u09cd\u099f\u09c7\u09b6\u09a8\u09be\u09b0\u09bf",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1616068950Stationery-&-Others.png",
        sub_cat: [
          {
            id: 117,
            slug: "Sports-Items",
            name: {
              en: "Sports Items",
              bn: "\u0995\u09cd\u09b0\u09c0\u09a1\u09bc\u09be \u0986\u0987\u099f\u09c7\u09ae",
            },
            icon: "assets/images/icons/1616069695Sports items.png",
            sub_cat: [],
          },
          {
            id: 119,
            slug: "Writing -&- Drawing-Products",
            name: {
              en: "Writing  & Drawing Products",
              bn: "\u09b0\u09be\u0987\u099f\u09bf\u0982 \u09a1\u09cd\u09b0\u09df\u09bf\u0982 \u09aa\u09cd\u09b0\u09cb\u09a1\u09be\u0995\u09cd\u099f\u09b8",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 120,
            slug: "Papers",
            name: {
              en: "Papers",
              bn: "\u0995\u09be\u0997\u099c\u09aa\u09a4\u09cd\u09b0",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 121,
            slug: "Batteries",
            name: {
              en: "Batteries",
              bn: "\u09ac\u09cd\u09af\u09be\u099f\u09be\u09b0\u09bf",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 123,
            slug: "Organizing-&-Others",
            name: {
              en: "Organizing & Others",
              bn: "\u09b8\u0982\u0997\u09a0\u09a8 \u0993 \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 4,
        slug: "Drinks-and-Beverages",
        name: {
          en: "Drinks & Beverages",
          bn: "\u09aa\u09be\u09a8\u09c0\u09af\u09bc",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316725Drinks-&-Beverages.png",
        sub_cat: [
          {
            id: 35,
            slug: "Soft-and-Energy-Drinks",
            name: {
              en: "Soft & Energy Drinks",
              bn: "\u09a8\u09b0\u09ae \u098f\u09ac\u0982 \u09b6\u0995\u09cd\u09a4\u09bf \u09aa\u09be\u09a8\u09c0\u09af\u09bc",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 37,
            slug: "Juice-and-Water",
            name: {
              en: "Juice & Water",
              bn: "\u09b0\u09b8 \u098f\u09ac\u0982 \u09aa\u09be\u09a8\u09bf",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 38,
            slug: "Tea-and-Coffee",
            name: {
              en: "Tea & Coffee",
              bn: "\u099a\u09be \u0993 \u0995\u09ab\u09bf",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 39,
            slug: "Powder-Drinks",
            name: {
              en: "Powder Drinks",
              bn: "\u0997\u09c1\u0981\u09a1\u09bc\u09be \u09aa\u09be\u09a8\u09c0\u09af\u09bc",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 7,
        slug: "Health-and-Beauty",
        name: {
          en: "Health & Beauty",
          bn: "\u09b8\u09cd\u09ac\u09be\u09b8\u09cd\u09a5\u09cd\u09af \u098f\u09ac\u0982 \u09b8\u09cc\u09a8\u09cd\u09a6\u09b0\u09cd\u09af",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316821Health-&-Beauty.png",
        sub_cat: [
          {
            id: 51,
            slug: "Health-Care",
            name: {
              en: "Health Care",
              bn: "\u09b8\u09cd\u09ac\u09be\u09b8\u09cd\u09a5\u09cd\u09af\u09b8\u09c7\u09ac\u09be",
            },
            icon: null,
            sub_cat: [
              {
                id: 74,
                slug: "First-Aid",
                name: {
                  en: "First Aid",
                  bn: "\u09aa\u09cd\u09b0\u09be\u09a5\u09ae\u09bf\u0995 \u099a\u09bf\u0995\u09bf\u09ce\u09b8\u09be",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 75,
                slug: "Antiseptics",
                name: {
                  en: "Antiseptics",
                  bn: "\u099c\u09c0\u09ac\u09be\u09a3\u09c1\u09a8\u09be\u09b6\u0995",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 76,
                slug: "Herbal-and-Digestive",
                name: {
                  en: "Herbal & Digestive",
                  bn: "\u09ad\u09c7\u09b7\u099c \u0993 \u09aa\u09b0\u09bf\u09aa\u09be\u0995",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 79,
                slug: "Toothpaste-and-Oral",
                name: {
                  en: "Toothpaste & Oral",
                  bn: "\u099f\u09c1\u09a5\u09aa\u09c7\u09b8\u09cd\u099f \u098f\u09ac\u0982 \u0993\u09b0\u09be\u09b2",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 103,
                slug: "Handwash",
                name: {
                  en: "Handwash",
                  bn: "\u09b9\u09be\u09a4 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09b0\u09a3",
                },
                icon: null,
                sub_cat: [],
              },
            ],
          },
          {
            id: 52,
            slug: "Personal-Care",
            name: {
              en: "Personal Care",
              bn: "\u09ac\u09cd\u09af\u0995\u09cd\u09a4\u09bf\u0997\u09a4 \u09af\u09a4\u09cd\u09a8",
            },
            icon: null,
            sub_cat: [
              {
                id: 44,
                slug: "Family-Planning",
                name: {
                  en: "Family Planning",
                  bn: "\u09aa\u09b0\u09bf\u09ac\u09be\u09b0 \u09aa\u09b0\u09bf\u0995\u09b2\u09cd\u09aa\u09a8\u09be",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 45,
                slug: "Sanitary-Napkins",
                name: {
                  en: "Sanitary Napkins",
                  bn: "\u09b8\u09cd\u09af\u09be\u09a8\u09bf\u099f\u09be\u09b0\u09bf \u09a8\u09cd\u09af\u09be\u09aa\u0995\u09bf\u09a8",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 77,
                slug: "Bath-&-Body -Care",
                name: {
                  en: "Bath & Body Care",
                  bn: "\u09b6\u09be\u09b0\u09c0\u09b0\u09bf\u0995 \u09af\u09a4\u09cd\u09a8",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 78,
                slug: "Hair-Care",
                name: {
                  en: "Hair Care",
                  bn: "\u099a\u09c1\u09b2\u09c7\u09b0 \u09af\u09a4\u09cd\u09a8",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 80,
                slug: "Facial-Care",
                name: {
                  en: "Facial Care",
                  bn: "\u09ae\u09c1\u0996\u09ae\u09a3\u09cd\u09a1\u09b2\u09c7\u09b0 \u09aa\u09b0\u09bf\u099a\u09b0\u09cd\u09af\u09be",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 81,
                slug: "Perfume-Body-Sprays",
                name: {
                  en: "Perfume & Body Sprays",
                  bn: "\u09b8\u09c1\u0997\u09a8\u09cd\u09a7\u09bf \u0993 \u09b6\u09b0\u09c0\u09b0\u09c7\u09b0 \u09b8\u09cd\u09aa\u09cd\u09b0\u09c7",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 83,
                slug: "Body-Lotion-and-Powder",
                name: {
                  en: "Body Lotion & Powder",
                  bn: "\u09ac\u09a1\u09bf \u09b2\u09cb\u09b6\u09a8 \u098f\u09ac\u0982 \u09aa\u09be\u0989\u09a1\u09be\u09b0",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 112,
                slug: "Men's-Care",
                name: {
                  en: "Men's Care",
                  bn: "\u09aa\u09c1\u09b0\u09c1\u09b7\u09a6\u09c7\u09b0 \u09af\u09a4\u09cd\u09a8",
                },
                icon: null,
                sub_cat: [],
              },
              {
                id: 113,
                slug: "Woman-Care",
                name: {
                  en: "Women's Care",
                  bn: "\u09ae\u09b9\u09bf\u09b2\u09be\u09a6\u09c7\u09b0 \u09af\u09a4\u09cd\u09a8",
                },
                icon: null,
                sub_cat: [],
              },
            ],
          },
        ],
      },
      {
        id: 96,
        slug: "Baby-Foods-and-Care",
        name: {
          en: "Baby Foods & Care",
          bn: "\u09b6\u09bf\u09b6\u09c1\u09b0 \u0996\u09be\u09ac\u09be\u09b0 \u0993 \u09af\u09a4\u09cd\u09a8",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316485Baby-Foods-&-Care.png",
        sub_cat: [
          {
            id: 100,
            slug: "Baby-Foods-and-Others",
            name: {
              en: "Baby Foods & Others",
              bn: "\u09b6\u09bf\u09b6\u09c1\u09b0 \u0996\u09be\u09ac\u09be\u09b0 \u0993 \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 101,
            slug: "Baby-Wipes-and-Diapers",
            name: {
              en: "Baby Wipes & Diapers",
              bn: "\u09b6\u09bf\u09b6\u09c1\u09b0 \u099f\u09bf\u09b8\u09cd\u09af\u09c1 \u098f\u09ac\u0982 \u09a1\u09be\u09af\u09bc\u09be\u09aa\u09be\u09b0",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 115,
            slug: "Baby-Skin-Care-&-Other",
            name: {
              en: "Baby Skin Care & Others",
              bn: "\u09b6\u09bf\u09b6\u09c1\u09b0 \u09a4\u09cd\u09ac\u0995\u09c7\u09b0 \u09af\u09a4\u09cd\u09a8 \u098f\u09ac\u0982 \u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 9,
        slug: "Home-Care-and-Cleaning",
        name: {
          en: "Home Care & Cleaning",
          bn: "\u09b9\u09cb\u09ae \u0995\u09c7\u09af\u09bc\u09be\u09b0 \u098f\u09ac\u0982 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09b0\u09a3",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316901Home-Care-&-Cleaning.png",
        sub_cat: [
          {
            id: 67,
            slug: "Air-Fresheners",
            name: {
              en: "Air Fresheners",
              bn: "\u09ac\u09be\u09af\u09bc\u09c1 \u09ac\u09bf\u09b6\u09c1\u09a6\u09cd\u09a7\u09bf\u0995\u09be\u09b0\u0995",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 68,
            slug: "Dish-Washing",
            name: {
              en: "Dish Washing",
              bn: "\u09a5\u09be\u09b2\u09be \u09a7\u09c7\u09d7\u09a4\u0995\u09b0\u09a3",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 69,
            slug: "Cleaning-Supplies",
            name: {
              en: "Cleaning Supplies",
              bn: "\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09b0\u09a3",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 70,
            slug: "Detergents-and-Laundry",
            name: {
              en: "Detergents & Laundry",
              bn: "\u09a1\u09bf\u099f\u09be\u09b0\u099c\u09c7\u09a8\u09cd\u099f\u09b8 \u098f\u09ac\u0982 \u09b2\u09a8\u09cd\u09a1\u09cd\u09b0\u09bf",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 71,
            slug: "Pest-Control",
            name: {
              en: "Pest Control",
              bn: "\u0995\u09c0\u099f\u09aa\u09a4\u0999\u09cd\u0997 \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 72,
            slug: "Kitchen-Accessories",
            name: {
              en: "Kitchen Accessories",
              bn: "\u09b0\u09be\u09a8\u09cd\u09a8\u09be\u0998\u09b0 \u0986\u09a8\u09c1\u09b7\u09be\u0999\u09cd\u0997\u09bf\u0995",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 73,
            slug: "Plastic-Products",
            name: {
              en: "Plastic Products",
              bn: "\u09aa\u09cd\u09b2\u09be\u09b8\u09cd\u099f\u09bf\u0995 \u09aa\u09a3\u09cd\u09af",
            },
            icon: null,
            sub_cat: [],
          },
          {
            id: 107,
            slug: "Paper-and-Napkins",
            name: {
              en: "Paper & Napkins",
              bn: "\u09aa\u09c7\u09aa\u09be\u09b0  \u098f\u09ac\u0982 \u09a8\u09cd\u09af\u09be\u09aa\u0995\u09bf\u09a8\u09b8",
            },
            icon: null,
            sub_cat: [],
          },
        ],
      },
      {
        id: 118,
        slug: "covid-19-protection",
        name: {
          en: "Covid-19 Protection",
          bn: "\u0995\u09cb\u09ad\u09bf\u09a1 -19 \u09b8\u09c1\u09b0\u0995\u09cd\u09b7\u09be",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1616832871C-19-protection.png",
        sub_cat: [],
      },
      {
        id: 98,
        slug: "Diabetic-Foods",
        name: {
          en: "Diabetic Foods",
          bn: "\u09a1\u09be\u09af\u09bc\u09be\u09ac\u09c7\u099f\u09bf\u0995 \u0996\u09be\u09ac\u09be\u09b0",
        },
        icon: "https://www.api.ekhonidorkar.com/assets/images/icons/1599316951Diabetic-Foods.png",
        sub_cat: [],
      },
    ],
  });
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <Arrow type="next" />,
    // prevArrow: <Arrow type="prev" />,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    // cssEase: "easeOutElastic",
    // cssEase: "ease-out",
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    // useTransform: true,
    pauseOnHover: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // const data = {
  //   name: "Level 1",
  //   items: [
  //     {
  //       name: "Level 2",
  //       items: [
  //         {
  //           name: "Level 3",
  //         },
  //       ],
  //     },
  //   ],
  // };

  const data = ["mridul", "haque"];
  const testJson = {
    _id: "5bc32f3f5fbd8ad01f8265fd",
    index: 0,
    guid: "87cfbb5d-71fb-45a7-b268-1df181da901c",
    isActive: true,
    balance: "$3,583.12",
    picture: "http://placehold.it/32x32",
    age: 31,
    eyeColor: "brown",
    nullTestValue: null,
    arrayWithNulls: [null, null, null],
    objectWithNulls: {
      firstNullValue: null,
      secondNullValue: null,
    },
    name: "Becky Vega",
    gender: "female",
    company: "ZOID",
    email: "beckyvega@zoid.com",
    phone: "+1 (957) 480-3973",
    address: "426 Hamilton Avenue, Holtville, New Hampshire, 3431",
    about:
      "Duis do occaecat commodo velit exercitation aliquip mollit ad reprehenderit non cupidatat dolore ea nulla. Adipisicing ea voluptate qui sunt non culpa labore reprehenderit qui non. Eiusmod ad do in quis cillum sint pariatur. Non laboris ullamco ea voluptate et anim qui quis id exercitation mollit ullamco dolor incididunt. Ad consequat anim velit culpa. Culpa Lorem eiusmod cupidatat dolore aute quis sint ipsum. Proident voluptate occaecat nostrud officia.\r\n",
    registered: "2016-11-19T01:14:28 -01:00",
    latitude: -80.66618,
    longitude: 65.090852,
    tags: ["ea", "officia", "fugiat", "anim", "consequat", "incididunt", "est"],
    friends: [
      {
        id: 0,
        name: "Genevieve Cooke",
        ownFriends: {
          "1": "Rebbeca",
          "2": "Julia",
          "3": "Chopper only",
        },
      },
      {
        id: 1,
        name: "Eaton Buck",
      },
      {
        id: 2,
        name: "Darla Cash",
      },
    ],
    greeting: "Hello, Becky Vega! You have 8 unread messages.",
    favoriteFruit: "strawberry",
  };

  return (
    <div className="App">
      {/* <div className="App-intro bg-red-5009">
        <RecComTwo
          property={state.categories}
          propertyName="Root Property"
          excludeBottomBorder={false}
          rootProperty={true}
        />
      </div> */}
      {/* <div className="bg-yellow-500 overflow-hidden transform translate-x-20"> */}
      {/* <RecursiveComponent obj={state.categories} count={0} /> */}
      {/* </div> */}
      {/* <RecursiveComponent {...data} /> */}
      {/* <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Slider> */}
      {/* <div>
        {state.categories.map((category)=>{
          console.log('category', category);  
          return(
            <div key={category.id}>
              {category.name.en}
            </div>
          )
        })}
      </div> */}
      <Checkout />
    </div>
  );
}

export default App;
