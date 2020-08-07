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
   paddingBottom:'7px'
    },
mainGrid: {
    display: 'flex',
    flexWrap:'nowrap'
    }
    ,
mainTypographyGrid: {
    width: '448px',
    heigth: '87px',
    },
typographyGrid: {
    paddingLeft: '71px',
    width: '396px',
    heigth: '48px',   
    },
leftTypographies: {
   
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'

}
}))
export default function HeadText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
        <Grid container className={classes.mainGrid}>
        <Grid className={classes.mainTypographyGrid}  item>
       <Typography className={classes.mainTypography}>The ones who can transform
      your ordinary thought into a
      profitable business!</Typography></Grid>      
       <Grid className={classes.typographyGrid}  >
        <Typography className={classes.leftTypographies} style={{ paddingBottom: '24px' }}>
         Salute them! A team of creative innovators in love
         with their work has all the information you need!     
       </Typography>     
          </Grid>           
        </Grid>
      </Grid>
    </Container>
  )
}