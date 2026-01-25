import React from 'react';
import { HiOutlineCube } from 'react-icons/hi';

// Import all icon sets
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';
import * as TiIcons from 'react-icons/ti';
import * as VscIcons from 'react-icons/vsc';
import * as CgIcons from 'react-icons/cg';
import * as ImIcons from 'react-icons/im';

// Merge all icons into a single object
const AllIcons: Record<string, any> = {
    ...HiIcons,
    ...FaIcons,
    ...MdIcons,
    ...BsIcons,
    ...BiIcons,
    ...AiIcons,
    ...FiIcons,
    ...IoIcons,
    ...RiIcons,
    ...SiIcons,
    ...TbIcons,
    ...TiIcons,
    ...VscIcons,
    ...CgIcons,
    ...ImIcons,
};

const PublicIconRenderer = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
    const IconComponent = AllIcons[name] || HiOutlineCube;
    return <IconComponent size={size} className={className} />;
};

export default PublicIconRenderer;
