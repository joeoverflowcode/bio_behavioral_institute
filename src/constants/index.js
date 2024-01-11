import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, partner01, partner02, partner03, partner04, partner05, partner06, FaSquareFacebook, BsInstagram, FaLinkedin, BsYelp, FaYoutube} from "../assets";
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
      "Our goal is to develop a cutting edge facility to provide patients with the most up to date treatments available for mental illness.",
    name: "Fugen Neziroglu, PH.D., ABBP, ABPP",
    title: "Co-Founder / Executive Director",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "We specialize in the treatment of obsessive-compulsive related, anxiety, and mood disorders.",
    name: "Sony Khemlani-Patel, PH.D.",
    title: "Clinical Director",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Our clinical approach incorporates positive psychology interventions in order to not only relieve suffering, but enhance overall well-being and quality of life.",
    name: "Matthew Jacofsky, PSY. D.",
    title: "Director Review Board",
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
        id:"link-1",
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        id:"link-2",
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        id:"link-3",
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        id:'link-4',
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        id:'link-5',
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        id:'link-7',
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        id:'link-8',
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        id:'link-9',
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        id:'link-10',
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        id:'link-11',
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        id:'link-12',
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        id:'link-13',
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-2",
    icon: FaSquareFacebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-1",
    icon: BsInstagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-3",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-4",
    icon: BsYelp,
    link: "https://www.yelp.com/",
  },
  {
    id: "social-media-5",
    icon: FaYoutube,
    link: "https://www.yelp.com/",
  },
];

export const partners = [
  {
    id: "partner-2",
    abbreviation: "APA",
    name:"American Psychological Association",
    logo: partner02,
  },
  {
    id: "partner-4",
    abbreviation: "ABPP",
    name:"American Board of Professional Psychology",
    logo: partner04,
  },
  {
    id: "partner-1",
    abbreviation: "IOCDF",
    name:"International OCD Foundation",
    logo: partner01,
  },
  {
    id: "partner-3",
    abbreviation: "TAA",
    name:"Tourette Association of America",
    logo: partner03,
  },
  {
    id:"partner-6",
    abbreviation: "NEDA",
    name:"National Eating Disorders Association",
    logo: partner06,
  },
  {
    id: "partner-5",
    abbreviation: "ADAA",
    name:"Anxiety & Depression Association of America",
    logo: partner05,
  },
];