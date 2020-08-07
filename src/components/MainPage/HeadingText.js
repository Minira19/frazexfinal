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
   fontWeight: '800',
   fontSize: '24px',
   lineHeight: '29px',
   textTransform: 'uppercase',
   color: '#8D6723',
   borderBottom: '2px solid #8D6723', 
   paddingBottom:'7px',
   
    },
mainGrid: {
    display: 'flex',
   flexWrap: 'nowrap',
    paddingTop:'133px'
    }
    ,
mainTypographyGrid: {
    width: '133px',
    heigth: '29px',
    },
typographyGrid: {
    paddingLeft: '32px',
    width: '540px',
    heigth: '264px',   
    },
leftTypographies: {  
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'
  },
  linkTypography: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    color:'#8D6723',
    textDecoration:'none'
}
}))
export default function HeadingText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
       <Grid container className={classes.mainGrid}>
        <Grid className={classes.mainTypographyGrid}  item>
       <Typography className={classes.mainTypography}>ABOUT US</Typography></Grid>      
       <Grid className={classes.typographyGrid}  >
       <Typography className={classes.leftTypographies} style={{paddingBottom:'24px'}}>
           FRAZEX LLC is a multidisciplinary organization that focuses its
         investments in promising and scalable projects.
       </Typography>
       <Typography className={classes.leftTypographies} style={{paddingBottom:'24px'}}>
                          The advantage of FRAZEX is the professional quality of the work,
                          a systematic and disciplined approach, the presence of a wide
                          international network of partners, as well as extensive experience in
                          building and running a business.
      </Typography>
        <Grid item><a href="" className={classes.linkTypography}>Read More</a></Grid>          
          </Grid>           
        </Grid>
      </Grid>
    </Container>
  )
}


