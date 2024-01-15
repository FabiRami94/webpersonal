
import { GrReactjs, GrNode } from 'react-icons/gr';
import { TbBrandCss3, TbBrandVite } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';

const NoCodeTechnologies = [
    {   id: 1,
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
            // {
            //     icon: <TbBrandTypescript size={36} color='white'/>,
            // },
            {
                icon: <AiOutlineHtml5 size={40} color='white'/>,
            },
            {
                icon: <TbBrandCss3 size={40} color='white'/>,
            },
            // {
            //     icon: <SiRedux size={36} color='white'/>,
            // },
            {
                icon: <GrNode size={36} color='white'/>,
            },
        ],     
    },
];

export default NoCodeTechnologies;