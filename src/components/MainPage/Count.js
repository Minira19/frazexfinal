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
     <Grid container direction="column" style={{padding:'103px 0 122px 0',display: 'flex',alignItems: 'center'}}> 
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

