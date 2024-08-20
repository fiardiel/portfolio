import { IconType } from 'react-icons';
import { RiNextjsFill } from 'react-icons/ri';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import TailwindIcon from '@/components/icons/TailwindIcon';
import PythonIcon from '@/components/icons/PythonIcon';
import { VueIcon } from '@/components/icons/VueIcon';
import { ViteIcon } from '@/components/icons/ViteIcon';
import DirectusIcon from '@/components/icons/DirectusIcon';

type IconMap = {
  [key: string]: IconType;
};

const iconMap: IconMap = {
  nextJS: RiNextjsFill,
  tailwind: TailwindIcon,
  typescript: TypescriptIcon,
  vue: VueIcon,
  vite: ViteIcon,
  directus: DirectusIcon,
  python: PythonIcon,
};

export const mapIcon = (iconName: string, className?: string) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};
