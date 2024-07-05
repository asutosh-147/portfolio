
import PricePilot from "@/public/PricePilot.png"
import ChessMate from "@/public/ChessMate.png"
import Shoppy from "@/public/Shoppy.png"

export const projectsData = [
  {
    title: "ChessMate",
    description:
      "A full stack online multiplayer website to play chess and compete with your friends",
    tags: ["React", "Express", "Postgresql", "Typescript", "Prisma","TailwindCSS","Recoil"],
    imageUrl: ChessMate,
  },
  {
    title: "PricePilot",
    description:
      "An E-commerce price tracker web app to track pricings of your desired amazon products",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind","Bright Data"],
    imageUrl: PricePilot,
  },
  {
    title: "Shoppy",
    description:
      "A modern fronten admin dashboard for all your work at a single place",
    tags: ["Javascript", "React.js", "Syncfusion", "Tailwind",],
    imageUrl: Shoppy,
  },
] as const;
