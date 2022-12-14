import { Container, Grid, Tooltip, Typography } from '@mui/material';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../../styles/Home.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skils = ({skills}) => {

    return (
        <div className={styles.projects} id='skills'>
        
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 4 }}>
                My Skills
            </Typography>

            <Container>
                <Tabs className={styles["marginBottomInMobile"] + " " + styles["skillsContainer"]}>
                    <TabList>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Web</Tab>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Programming</Tab>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Tools</Tab>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Framwork</Tab>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Database</Tab>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Operating System</Tab>
                    </TabList>

                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.web.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: { xs: 0, sm: 2} }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress my-3">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}>

                                            </div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>
        
                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.programming.map(({ id, name, growth, color, isNew }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>
                                        {name} 
                                        {isNew === true && <small style={{color: '#aaa'}}>&nbsp;(Started Exploring)</small>}
                                    </Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress my-3">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.tools.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress my-3">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>
                    
                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.framwork.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress my-3">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.database.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress my-3">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.system.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress my-3">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>

                </Tabs>
            </Container>
        </div>
    );
};    

export default Skils;