import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

const WebProjects = ({projectsData}) => {
   
  const [show, setShow] = useState(3);

  const showItem = () => {
    setShow((priviousValue) => (priviousValue + projectsData.length - 3));
  }

  const showLess = () => {
    setShow(prev => prev = 3);
  }
    
    return (
      <>
        <Grid container spacing={3} >
            {
              projectsData.slice(0, show).map((d) => {
                return(
                  <Grid>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                      key={projectsData.id}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                </Grid>
                )
              })
            }
            
        </Grid>
        <div className='grid justify-center'>
            <div className='flex space-x-5'>
                <Button onClick={showItem} className='bg-teal-700 text-white my-10'>Show More</Button>
                <Button onClick={showLess} className='bg-teal-700 text-white my-10'>Show less</Button>
            </div>
        </div>
      </>      
    );
}

export default WebProjects;