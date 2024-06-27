import Service_1 from "../../../public/Service1.png";
import Service_2 from "../../../public/Service2.png";
import Service_3 from "../../../public/Service3.png";
import Service_4 from "../../../public/Service5.png";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

// import Creator from "../../../public/creator.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "News",
    title: "News",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "We offer custom web development solutions tailored to your business needs. From simple websites to complex web applications, we bring your ideas to life with clean, efficient, and scalable code.",
    icon: Service_1, // Add an icon for each service
  },
  {
    title: "Mobile App Development",
    description:
      "Transform your ideas into intuitive and feature-rich mobile applications. Our team specializes in iOS, Android, and cross-platform app development.",
    icon: Service_2,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting captivating user experiences through thoughtful design. We focus on creating interfaces that are not only visually stunning but also intuitive and user-friendly, ensuring maximum engagement.",
    icon: Service_3,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your online presence and drive organic traffic to your website with our SEO optimization services. We employ proven strategies to improve your search engine ranking, increase visibility, and attract more visitors.",
    icon: Service_4,
  },
  // Add more services as needed
];

export const CardData = [
  {
    icon: RxCrop,
    title: "Development",
    tech: "Technology",
    content:
      "The future can be scary, but there are ways to deal with that fear..",
    backgroundImage: "/SpaceCity6.jpg",
    Image2: "/Profile1.jpeg",
     text:"Ali Khan",
     date:"26 JUN"
  },
  {
    icon: RxPencil2,
    title: "Branding",
    tech: "Popular",
    content: "An exploration into the truck's polarising design.",
    backgroundImage: "/SpaceCity9.jpg",
    Image2: "/Profile2.jpeg",
    text:"Hassan",
    date:"26 APR"
  },
  {
    icon: RxDesktop,
    title: "Design",
    tech: "Moved",
    content:
      "The future can be scary, but there are ways to deal with that fear..",
    backgroundImage: "/SpaceCity10.jpg",
    Image2: "/Profile3.jpeg",
    text:"Mark Weins",
    date:"26 JULY"
  },
  {
    icon: RxReader,
    title: "Seo",
    tech: "Top",
    content: "An exploration into the truck's polarising design",
    backgroundImage: "/SpaceCity11.jpg",
    Image2: "/Profile4.jpg",
     text:"Ahsan",
     date:"26 MAY"
  },
  {
    icon: RxAccessibility,
    title: "Management",
    tech: "Rated",
    content:
      "The future can be scary, but there are ways to deal with that fear..",
    backgroundImage: "/SpaceCity12.jpg",
    Image2: "/Profile5.jpg",
     text:"John Doe",
     date:"26 AUG"
  },
  {
    icon: RxRocket,
    title: "Production",
    tech: "Exclusive",
    content: "An exploration into the truck's polarising design",
    backgroundImage: "/SpaceCity13.jpg",
    Image2: "/Profile4.jpg",
     text:"Eyup",
     date:"26 JAN"
  },
];
