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
mainTypography: {
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '24px',
   lineHeight: '24px',
   textAlign: 'center',
   color: '#8D6723',
   paddingBottom:'42px'
  
    },
countsGrid:{
    width: '1040px',
    heigth: '115px',
    display: 'flex',
    justifyContent: 'center'
    },
counts: {
    display: 'flex',
    flexDirection: 'column',
    margin:'0 59px'
    },
bigCountTypography: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '54px',
    lineHeight: '66px',
    textAlign: 'center',
    color: '#8D6723'
  
    },
smallCountTypography: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight:' 44px',
    textAlign: 'center',
    color: '#E4E4E4'

}
}))
export default function HeadingText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
     <Grid container direction="column" style={{padding:'195px 0 192px 0',display: 'flex',alignItems: 'center'}}>
      <Grid item className={classes.mainTypographyGrid}><Typography className={classes.mainTypography}>
                      Today, we have experience, result and reputation. Just a few honest numbers:            
      </Typography></Grid> 
     <Grid container className={classes.countsGrid}>
    <Grid className={classes.counts}>
                          <Typography className={classes.bigCountTypography}>15+</Typography>
                          <Typography className={classes.smallCountTypography}>PROJECTS </Typography>                      
     </Grid>
    <Grid className={classes.counts}>
                          <Typography className={classes.bigCountTypography}>100+ </Typography>  
                          <Typography className={classes.smallCountTypography}>PARTNERS</Typography>                        
     </Grid>   
     <Grid className={classes.counts}>
                        <Typography className={classes.bigCountTypography}>200+</Typography>  
                       <Typography className={classes.smallCountTypography}>SUPPLIERS</Typography>                    
     </Grid>                
      </Grid>            
      </Grid>
      </Grid>
    </Container>
  )
}

