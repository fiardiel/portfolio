import { IconType } from 'react-icons';
import { RiNextjsFill } from 'react-icons/ri';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import TailwindIcon from '@/components/icons/TailwindIcon';
import PythonIcon from '@/components/icons/PythonIcon';
import { VueIcon } from '@/components/icons/VueIcon';
import { ViteIcon } from '@/components/icons/ViteIcon';
import DirectusIcon from '@/components/icons/DirectusIcon';
import PostgresqlIcon from '@/components/icons/PostgresqlIcon';
import GoIcon from '@/components/icons/GoIcon.svg'
import JavaIcon from '@/components/icons/JavaIcon.svg'
import SpringbootIcon from '@/components/icons/SpringbootIcon.svg'
import DjangoIcon from '@/components/icons/DjangoIcon.svg'
import { ScikitLearnLogo } from '@/components/icons/ScikitLearnLogo';
import { LogosSeabornIcon } from '../icons/SeabornIcon';
import NumpyIcon from '@/components/icons/NumpyIcon.svg';
import PandasIcon from '@/components/icons/PandasIcon.svg';

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
  postgresql: PostgresqlIcon,
  golang: GoIcon,
  java: JavaIcon,
  springboot: SpringbootIcon,
  django: DjangoIcon,
  scikitlearn: ScikitLearnLogo,
  seaborn: LogosSeabornIcon,
  numpy: NumpyIcon,
  pandas: PandasIcon,
};

export const mapIcon = (iconName: string, className?: string) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};
