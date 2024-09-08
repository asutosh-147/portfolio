import PricePilot from "@/public/PricePilot.png";
import ChessMate from "@/public/ChessMate.png";
import Shoppy from "@/public/Shoppy.png";
import YTDownloader from "@/public/youtubeDownloader.png"
import ChearCode from "@/public/cheatcode.png"
export const projectsData = [
  {
    title: "ChessMate",
    description:
      "A full stack online multiplayer website to play chess and compete with your friends",
    tags: [
      "React",
      "Express",
      "Postgresql",
      "Typescript",
      "Prisma",
      "TailwindCSS",
      "Recoil",
    ],
    imageUrl: ChessMate,
    link:"https://github.com/asutosh-147/chess"
  },
  {
    title: "CheatCode",
    description:
      "An Online Code Editor for C++, Python and Javascript. featuring realtime code execution syntax highlighting, Ai features and user friendly interface",
    tags: ["React.js", "TypeScript", "Node.js", "Tailwind", "Postgresql", "Prisma", "Docker", "Recoil", "AWS"],
    imageUrl: ChearCode,
    link:"https://codingkoala.ninja"
  },
  {
    title: "YTDownloader",
    description:
    "A Youtube video downloader website which supports upto 4k video downloading",
    tags: ["Typescript", "React.js", "Node.js", "Tailwind CSS","ytdl-core","ffmpeg"],
    imageUrl: YTDownloader,
    link:"https://ytdownload.codingkoala.ninja/"
  },
  {
    title: "PricePilot",
    description:
      "An E-commerce price tracker web app to track pricings of your desired amazon products",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Bright Data"],
    imageUrl: PricePilot,
    link:"https://pricepilot.vercel.app/"
  },
  {
    title: "Shoppy",
    description:
      "A modern fronten admin dashboard for all your work at a single place",
    tags: ["Javascript", "React.js", "Syncfusion", "Tailwind"],
    imageUrl: Shoppy,
    link:"https://admin.codingkoala.ninja/"
  },
] as const;
