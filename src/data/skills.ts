import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { LuServer } from "react-icons/lu";
import { TbStack2 } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB", },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", },
      { name: "CSS3", icon: SiCss, color: "#1572B6", },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", },
      { name: "Zustand", icon: TbStack2, color: "#F59E0B", },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42B883", },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF", },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", },
      { name: "REST APIs", icon: LuServer, color: "#8F8FD4", },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF", },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF", },
      { name: "VS Code", icon: VscVscode, color: "#007ACC", },
    ],
  },
];