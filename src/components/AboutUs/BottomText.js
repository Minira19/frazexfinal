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
    flexWrap: 'nowrap',
    }
    ,
mainTypographyGrid: {
    width: '233px',
    heigth: '90px',
    },
typographyGrid: {
    paddingLeft: '32px',
    width: '799px',
    heigth: '552px',   
    },
leftTypographies: {  
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'
}
}))
export default function BottomText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
       <Grid container className={classes.mainGrid}>
        <Grid className={classes.mainTypographyGrid}  item>
       <Typography className={classes.mainTypography}>What projects do we consider as a potential?</Typography></Grid>      
       <Grid className={classes.typographyGrid}  >
       <Typography className={classes.leftTypographies} style={{paddingBottom:'24px'}}>
        <strong> The main criteria for selecting projects in which we invest and
          manage are innovation, social significance and the potential of globalization.</strong>  
                      </Typography>
        <Grid container style={{paddingBottom:'48px',alignItems:'flex-start'}} direction="column">
                          <Typography className={classes.leftTypographies} >• Small and medium business projects</Typography>
                          <Typography className={classes.leftTypographies} >• High yield projects</Typography> 
                          <Typography className={classes.leftTypographies} >• Scalable projects</Typography> 
                          <Typography className={classes.leftTypographies} >• Projects at various stages of growth</Typography>                  
       </Grid>
        <Typography className={classes.leftTypographies} style={{paddingBottom:'24px'}}>
        <strong>We do not work with financial geometric figures, as well as companies and
        personalities promoting suspicious products.</strong>  
                      </Typography>           
       <Typography className={classes.leftTypographies} style={{paddingBottom:'48px'}}>
                         However, we work with people, though, who realize that it is time to change the life of society in a
lighter and more successful way. Who has a really strong idea through which to improve the daily
working lives. Who are proud and continuously cultivating their concept. Who has clear goals and a
vision for final outcome. Who understand that their idea is really something new, cool and useful. To
those trusting our experience and adhere to our arguments.
      </Typography>
         <Typography className={classes.leftTypographies} style={{paddingBottom:'24px'}}>
        <strong>Ready to work with us?</strong>  
         </Typography> 
         <Typography className={classes.leftTypographies} style={{paddingBottom:'48px'}}>
            Tell us about your project today and we will start discussing it.
      </Typography>
          </Grid>           
        </Grid>
      </Grid>
    </Container>
  )
}







