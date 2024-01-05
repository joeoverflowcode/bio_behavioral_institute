import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import React from "react";
import { GoHeartFill } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { BsPersonRaisedHand } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "treatments",
    title: "Treatments",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact"
  }
];

export const features = [
  {
    id: "feature-1",
    icon: GoHeartFill,
    title: "All Ages",
    content:
      "Serving children, adolescents, and adults - Our team believes in closely working with loved ones and community.",
  },
  {
    id: "feature-2",
    icon: GoHomeFill,
    title: "Home Visits",
    content:
      "We offer home and out of office sessions to provide our patients with specifically targeted individual’s difficulties",
  },
  {
    id: "feature-3",
    icon: FaPeopleGroup,
    title: "Trained Staff",
    content:
      "Our staff is trained in a variety of psychological testing methods based on the reason for the evaluation and are dedicated to providing the most advanced treatment in a nurturing and supportive environment. ",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
   {
    id:"stat-4",
    title: "Patients Treated",
    value: "2,000+",
  }, 
        {
    id:"stat-2",
    title:"Published Works",
    value:"300+"
  },
  {
    id: "stat-5",
    title: "Years in Service",
    value: "40+",
  },



  //   {
  //   id: "stat-3",
  //   title: "Staff Members",
  //   value: "100+",
  // },
  // {
  //   id: "stat-1",
  //   title: "Treatments",
  //   value: "20+",
  // },


];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];