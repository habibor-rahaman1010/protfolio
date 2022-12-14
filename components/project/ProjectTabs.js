import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from "react-bootstrap";
import WebProjects from './WebProjects';

const ProjectTabs = ({projectsData}) => {
    return (
        <div className='max-w-7xl m-auto'>
            <h1 className="text-center lg:m-20 lg:text-4xl">Herer is my projects</h1>

            <Tabs
            id="uncontrolled-tab-example"
            className="mb-20 flex justify-around w-1/2 mx-auto bg-slate-300 border-none"
            >
                <Tab eventKey="Project" title="Project">
                    <WebProjects projectsData={projectsData} key={projectsData.id}/>
                </Tab>
                <Tab className='text-white' eventKey="E-commerce" title="E-commerce">
                    <h1>Hello profile</h1>
                </Tab>
                <Tab eventKey="Protfolio" title="Protfolio">
                    <h1>Hello contact</h1>
                </Tab>
            </Tabs>
            
        </div>
    );
}

export default ProjectTabs;