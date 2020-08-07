import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

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
mainTypographyGrid: {
    width: '191px',
    heigth: '29px',
    },
downTypography: {
 
   fontStyle: 'normal',
   fontWeight: 'normal',
   fontSize: '16px',
   lineHeight: '24px',
   color: '#464646'  
    },
downTypographyBorder:{
        width: '388px',
        heigth: '48px',
        padding:'28px 0 142px 0'
    },
button: {
    
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign: 'center',
        letterspacing:' 1px',
        color: '#8D6723',
        padding:'15px 28px 16px 29px'
  
    },
buttonBorder: {
        width: '156px',
        heigth: '48px',
        background:' #1D1D1D',
        boxShadow: '4px -4px 8px rgba(47, 47, 47, 0.5), -4px 4px 8px rgba(0, 0, 0, 0.5)',
        borderRadius: '8px'
}
}))
export default function HeadText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
      <Grid container style={{display:'flex',flexWrap:'nowrap'}}>
       <Grid container direction="column">
       <Grid className={classes.mainTypographyGrid}  item>
      <Typography className={classes.mainTypography}>FRIENDS OF FRAZEX</Typography>
                      </Grid> 
       <Grid item className={classes.downTypographyBorder}>
         <Typography className={classes.downTypography}>We are proud of our friendship with like-minded people who have become our partners.</Typography>                 
        </Grid>
       <Grid item className={classes.buttonBorder}>
       <Button className={classes.button}>READ MORE</Button>
       </Grid>
       </Grid> 
       <Grid item><img src="inloyaLogo.png"></img>
       </Grid> 
                 
      </Grid>
      </Grid>
    </Container>
  )
}