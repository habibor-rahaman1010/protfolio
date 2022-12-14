import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from '../../components/Sonnet';

import { Container } from "react-bootstrap";

const Project = () => {
    return (
        <Container>
            <h1 className="text-center lg:m-20 lg:text-4xl">Herer is my projects</h1>

            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            >
            <Tab eventKey="home" title="Home">
                <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Sonnet />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
            </Tab>
            </Tabs>
            
        </Container>
    );
}

export default Project;