
import { GrReactjs, GrNode } from 'react-icons/gr';
import { TbBrandTypescript, TbBrandCss3 } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { SiExpress, SiPostgresql, SiSequelize} from 'react-icons/si';

const habilidadesProgramacion = [
    {   
        image: 'https://i.ibb.co/1fwZGfV/Logo-React.png',
        name: 'React', 
        icon: <GrReactjs size={40} />,
        width: 100,
    },
    {   
        image: 'https://i.ibb.co/2NJxXnR/Logo-Java-Script.png',
        name : 'Javascript',
        icon: <RiJavascriptLine size={40} />,
        width: 105,
    },
    {   
        image: 'https://i.ibb.co/gZvLYz9/Logo-Type-Script.png',
        name : 'Typescript', 
        icon: <TbBrandTypescript size={36} />,
        width: 100,
    },
    {
        image: 'https://i.ibb.co/znYM4VS/LogoHtml.png',
        name : 'Html', 
        icon: <AiOutlineHtml5 size={40} />,
        width: 80,
    },
    {
        image: 'https://i.ibb.co/VjtLHs4/LogoCss.png',
        name : 'CSS', 
        icon: <TbBrandCss3 size={40} />,
        width: 100,
    },
    {   
        image: 'https://i.ibb.co/Rg50DJy/Logo-Git-Hub.png',
        name: 'GitHub', 
        icon: <BsGithub size={36} />,
        width: 90,
    },
    {
        image: 'https://i.ibb.co/M7Wrw1M/Logo-Node-Js.png',
        name: 'Nodejs', 
        icon: <GrNode size={36} />,
        width: 90,
    },
    {
        image: 'https://i.ibb.co/QKwNCBR/Logo-Express.png',
        name: 'Express', 
        icon: <SiExpress size={40} />,
        width: 92,
    },
    {
        image: 'https://i.ibb.co/6DqrN3p/Logo-Postgres.png',
        name: 'Postgres', 
        icon: <SiPostgresql size={40} />,
        width: 85,
    },
    {
        image: 'https://i.ibb.co/5ntwB6z/Logo-Sequelize.png',
        name: 'Sequelize', 
        icon: <SiSequelize size={40} />,
        width: 80,
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

export default habilidadesProgramacion;
