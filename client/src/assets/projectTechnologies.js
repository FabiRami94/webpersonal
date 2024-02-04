
import { GrReactjs, GrNode } from 'react-icons/gr';
import { TbBrandTypescript, TbBrandCss3, TbBrandVite } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { SiExpress, SiPostgresql, SiSequelize, SiRedux, SiMysql} from 'react-icons/si';

SiRedux

const projectTechnologies = [
    {   id: 1,
        nombreProyecto: 'PuraVidaViajes', 
        image: 'https://i.ibb.co/whXpW91/Pura-Vida1.png',
        url: 'https://client-puravidas-projects.vercel.app/',
        technologies: [
            {
                icon: <GrReactjs size={40} color='white'/>,
            },
            {
                icon: <TbBrandVite size={40} color='white'/>,
            },
            {
                icon: <RiJavascriptLine size={40} color='white'/>,
            },
            // {
            //     icon: <TbBrandTypescript size={36} color='white'/>,
            // },
            {
                icon: <AiOutlineHtml5 size={40} color='white'/>,
            },
            {
                icon: <TbBrandCss3 size={40} color='white'/>,
            },
            {
                icon: <SiRedux size={36} color='white'/>,
            },
            // {
            //     icon: <BsGithub size={36} color='white'/>,
            // },
            {
                icon: <GrNode size={36} color='white'/>,
            },
            {
                icon: <SiExpress size={40} color='white'/>,
            },
            {
                icon: <SiMysql size={40} color='white'/>,
            },
            // {
            //     icon: <SiPostgresql size={40} color='white'/>,
            // },
            {
                icon: <SiSequelize size={40} color='white'/>,
            }
        ],     
    },
    {   id: 2,
        nombreProyecto: 'Portafolio No Code', 
        image: 'https://i.ibb.co/pXGF76v/No-Code-Portafolio.png',
        url: 'https://web-personal-no-code.vercel.app/',
        technologies: [
            {
                icon: <GrReactjs size={40} color='white'/>,
            },
            {
                icon: <TbBrandVite size={40} color='white'/>,
            },
            {
                icon: <RiJavascriptLine size={40} color='white'/>,
            },
            {
                icon: <AiOutlineHtml5 size={40} color='white'/>,
            },
            {
                icon: <TbBrandCss3 size={40} color='white'/>,
            },
            {
                icon: <GrNode size={36} color='white'/>,
            },
        ],     
    },
]

export default projectTechnologies;