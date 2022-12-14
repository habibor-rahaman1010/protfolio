import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../../styles/Home.module.css';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    const languages = [
        {
            id: 1,
            text: "ধন্যবাদ",
            fluency: 100,
            level: "Native"
        },
        {
            id: 2,
            text: "Thank You",
            fluency: 65,
            level: "Professional"
        },
        {
            id: 3,
            text: "धन्यवाद",
            fluency: 20,
            level: "Elementary"
        }
    ];
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 2 }}>
                <Box className={styles.language}>
                    <ul>
                        {
                            languages.map(({ id, text, fluency, level }) => (
                                <Tooltip title={level} key={id}>
                                    <li>
                                        <p>{text}</p>
                                        <div style={{ width: fluency + "%" }} className={styles.fluency} />
                                    </li>
                                </Tooltip>
                            ))
                        }
                    </ul>
                </Box>
            </Box>

            <ScrollToTop smooth color="white" style={{ backgroundColor: '#252930', border: 0, width: 45,  height: 45, right: 100, bottom: 25, borderRadius: '50%' }} />
            <hr className='my-6 w-3/4 mx-auto'/>
            <footer>
                <Box className={styles.footerTxt}>
                    <Typography variant="body1">Habibor Rahaman © 2022, All rights reserved.</Typography>
                </Box>
            </footer>
        </Box >
    );
};

export default Footer;