import feature_one from "../../src/assets/images/hero/h1.png";
import feature_two from "../../src/assets/images/hero/h2.png";
import feature_three from "../../src/assets/images/hero/h3.png";
import feature_four from "../../src/assets/images/hero/h4.png";
import feature_five from "../../src/assets/images/hero/h6.png";

import list_one from "../../src/assets/images/list/p-1.png";
import list_two from "../../src/assets/images/list/p-2.png";
import list_four from "../../src/assets/images/list/p-4.png";
import list_five from "../../src/assets/images/list/p-5.png";
import list_six from "../../src/assets/images/list/p-6.png";
import list_seven from "../../src/assets/images/list/p-7.png";

import city_one from "../../src/assets/images/location/city-1.png";
import city_two from "../../src/assets/images/location/city-2.png";
import city_three from "../../src/assets/images/location/city-3.png";
import city_four from "../../src/assets/images/location/city-4.png";
import city_five from "../../src/assets/images/location/city-5.png";
import city_six from "../../src/assets/images/location/city-6.png";
import team_one from '../../src/assets/images/team/team-1.jpg'
import team_three from '../../src/assets/images/team/team-3.jpg'
import team_five from '../../src/assets/images/team/team-5.jpg'
export const nav = [
  {
    text: "Home",
    path: "/",
  },

  {
    text: "About",
    path: "/about",
  },

  {
    text: "Services",
    path: "/services",
  },

  {
    text: "Blog",
    path: "/blog",
  },

  {
    text: "Pricing",
    path: "/pricing",
  },

  {
    text: "Contact Us",
    path: "/contact",
  },
];

export const featured = [
  {
    cover: feature_one,
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: feature_two,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: feature_three,
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: feature_four,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: feature_five,
    name: "Villa & Condo",
    total: "80 Property",
  },
];

export const list = [
  {
    id: 1,
    cover: list_one,
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: list_two,
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: list_seven,
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: list_four,
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: list_five,
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: list_six,
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];

export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];

export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city_one,
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city_two,
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city_three,
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city_four,
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city_five,
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city_six,
  },
];



export const team = [
  {
    list: "50",
    cover: team_one,
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icons: [<i className='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "70",
    cover: team_one,
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icons: [<i className='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "80",
    cover:team_three,
    address: "Denever, USA",
    name: "Anna K. Young",
    icons: [<i className='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "51",
    cover: team_three,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icons: [<i className='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "42",
    cover:team_five,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icons: [<i className='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "38",
    cover: team_five,
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icons: [<i className='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
]




export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "5GB Cloud Storage",
      },
      { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Personal Help Support" },
      { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Enterprise SLA" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class='fa-solid fa-x'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
]



export const footer = [
  {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
  },
  {
    title: "ALL SECTIONS",
    text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
  },
  {
    title: "COMPANY",
    text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
  },
]