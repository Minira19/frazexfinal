import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
body: {
   backgroundColor:'#1d1d1d'
    },
countsGrid:{
    width: '984px',
    heigth: '136px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'baseline'
    },
counts: {
    display: 'flex',
    flexDirection: 'column',
    width: '165px',
    heigth: '137px',
    alignItems:'center'
    },

smallCountTypography: {
    paddingTop:'20px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '29px',
    textAlign: 'center',
    color: '#E4E4E4'
    }
    ,

}))
export default function HeadingText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
     <Grid container direction="column" style={{padding:'125px 0 193px 0',display: 'flex',alignItems: 'center'}}> 
     <Grid container className={classes.countsGrid}>
    <Grid style={{marginRight:'108px'}} className={classes.counts}>
                           <img style={{width:'121px',height:'85px'}}  src="lorem1.png"></img>
                          <Typography className={classes.smallCountTypography}>Lorem Ipsum</Typography>                      
     </Grid>
    <Grid style={{marginRight:'108px'}} className={classes.counts}>
                           <img style={{width:'121px',height:'83px'}}  src="lorem2.png"></img>
                          <Typography className={classes.smallCountTypography}>Lorem Ipsum</Typography>                        
     </Grid>   
     <Grid style={{marginRight:'108px'}} className={classes.counts}>
                        <img style={{width:'95px',height:'88px'}}   src="lorem3.png"></img>
                       <Typography className={classes.smallCountTypography}>Lorem Ipsum</Typography>                    
                      </Grid> 
    <Grid className={classes.counts}>
                         <img style={{width:'93px',height:'93px'}}   src="lorem4.png"></img>
                       <Typography className={classes.smallCountTypography}>Lorem Ipsum</Typography>                    
     </Grid>                   
      </Grid>            
      </Grid>
      </Grid>
    </Container>
  )
}

