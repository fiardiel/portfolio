import { IconType } from 'react-icons';
import { FaPython } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill, RiVuejsFill } from 'react-icons/ri';
import { SiDirectus, SiTypescript, SiVite } from 'react-icons/si';

type IconMap = {
  [key: string]: IconType;
};

const iconMap: IconMap = {
  nextJS: RiNextjsFill,
  tailwind: RiTailwindCssFill,
  typescript: SiTypescript,
  vue: RiVuejsFill,
  vite: SiVite,
  directus: SiDirectus,
  python: FaPython,
};

export const mapIcon = (iconName: string, className?: string) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};
