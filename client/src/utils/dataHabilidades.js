
import { GrReactjs, GrNode } from 'react-icons/gr';
import { TbBrandTypescript, TbBrandCss3 } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { SiExpress, SiPostgresql, SiSequelize} from 'react-icons/si';

const habilidadesProgramacion = [
    {   
        image: '',
        name: 'React', 
        icon: <GrReactjs size={40} color='#49b4b2'/>,
        link: 'https://es.react.dev/'
    },
    {   
        image: '',
        name : 'Javascript',
        icon: <RiJavascriptLine size={40} color='#49b4b2'/>,
        link: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
    },
    {   
        image: '',
        name : 'Typescript', 
        icon: <TbBrandTypescript size={36} color='#49b4b2'/>,
        link: 'https://www.typescriptlang.org/'
    },
    {
        image: '',
        name : 'Html', 
        icon: <AiOutlineHtml5 size={40} color='#49b4b2'/>,
        link: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
        image: '',
        name : 'CSS', 
        icon: <TbBrandCss3 size={40} color='#49b4b2'/>,
        link: 'https://developer.mozilla.org/es/docs/Web/CSS'
    },
    {   
        image: '',
        name: 'GitHub', 
        icon: <BsGithub size={36} color='#49b4b2'/>,
        link: 'https://github.com/'
    },
    {
        image: '',
        name: 'Nodejs', 
        icon: <GrNode size={36} color='#49b4b2'/>,
        link: 'https://nodejs.org/es'
    },
    {
        image: '',
        name: 'Express', 
        icon: <SiExpress size={40} color='#49b4b2'/>,
        link: 'https://expressjs.com/es/'
    },
    {
        image: 'https://i.ibb.co/6DqrN3p/Logo-Postgres.png',
        name: 'Postgres', 
        icon: <SiPostgresql size={40} color='#49b4b2'/>,
        link: 'https://www.postgresql.org/'
    },
    {
        image: '',
        name: 'Sequelize', 
        icon: <SiSequelize size={40} color='#49b4b2'/>,
        link: 'https://sequelize.org/'
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
