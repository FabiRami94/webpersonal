
import { GrReactjs, GrNode } from 'react-icons/gr';
import { TbBrandTypescript, TbBrandCss3 } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaFigma, FaWordpressSimple } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiSequelize, SiMongodb, SiMongoose, SiAdobephotoshop, SiAdobeillustrator} from 'react-icons/si';

const frontedSkills = [
    {   
        image: 'https://i.ibb.co/1fwZGfV/Logo-React.png',
        name: 'React', 
        icon: <GrReactjs size={40} />,
        width: 30,
    },
    {   
        image: 'https://i.ibb.co/2NJxXnR/Logo-Java-Script.png',
        name : 'Javascript',
        icon: <RiJavascriptLine size={40} />,
        width: 30,
    },
    {   
        image: 'https://i.ibb.co/gZvLYz9/Logo-Type-Script.png',
        name : 'Typescript', 
        icon: <TbBrandTypescript size={36} />,
        width: 30,
    },
    {
        image: 'https://i.ibb.co/znYM4VS/LogoHtml.png',
        name : 'HTML', 
        icon: <AiOutlineHtml5 size={40} />,
        width: 24,
    },
    {
        image: 'https://i.ibb.co/VjtLHs4/LogoCss.png',
        name : 'CSS', 
        icon: <TbBrandCss3 size={40} />,
        width: 30,
    },
    {   
        image: 'https://i.ibb.co/Rg50DJy/Logo-Git-Hub.png',
        name: 'GitHub', 
        icon: <BsGithub size={36} />,
        width: 30,
    },
]

const backendSkills = [
    {
        image: 'https://i.ibb.co/M7Wrw1M/Logo-Node-Js.png',
        name: 'Node.js', 
        icon: <GrNode size={36} />,
        width: 30,
    },
    {
        image: 'https://i.ibb.co/QKwNCBR/Logo-Express.png',
        name: 'Express', 
        icon: <SiExpress size={40} />,
        width: 30,
    },
    {
        image: 'https://i.ibb.co/6DqrN3p/Logo-Postgres.png',
        name: 'Postgres', 
        icon: <SiPostgresql size={40} />,
        width: 30,
    },
    {
        image: 'https://i.ibb.co/5ntwB6z/Logo-Sequelize.png',
        name: 'Sequelize', 
        icon: <SiSequelize size={40} />,
        width: 30,
    },
    {
        image: 'https://i.ibb.co/Mg6yzWY/pngwing-com.png',
        name: 'MongoDB', 
        icon: <SiMongodb size={40} />,
        width: 30,
    },
    {
        image: 'https://i.ibb.co/Mg6yzWY/pngwing-com.png',
        name: 'Moongose', 
        icon: <SiMongoose size={54} />,
        width: 30,
    },
]

const noCodeSkills = [
    {   
        image: 'https://i.ibb.co/QKGG7v0/Logo-Figma.png',
        name: 'Figma/XD', 
        icon: <FaFigma size={36} />,
        width: 30,
    },
    {   
        image: 'https://i.ibb.co/d4tNnsd/Logo-Word-Press.png',
        name : 'WordPress',
        icon: <FaWordpressSimple size={38} />,
        width: 30,
    },
    {   
        image: 'https://i.ibb.co/2s8560B/Logo-Photoshop.png',
        name : 'Photoshop', 
        icon: <SiAdobephotoshop size={36} />,
        width: 30,
    },
    {
        image: 'https://i.ibb.co/n6TGF9n/Logo-Illustrator.png',
        name : 'Illustrator', 
        icon: <SiAdobeillustrator size={36} />,
        width: 30,
    },
]

// const habilidadesEnIdiomas = [
//     {
//         name: 'Español',
//         letra: '',
//         nivel: ''
//     },
//     {
//         name: 'Inglés',
//         letra: '',
//         nivel: ''
//     },
//     {
//         name: 'Italiano',
//         letra: '',
//         nivel: ''
//     },
// ]

export { frontedSkills, backendSkills, noCodeSkills };
