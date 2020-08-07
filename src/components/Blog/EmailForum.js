import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Input from '@material-ui/core/Input'

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
    width: '239px',
    heigth: '58px',
    },
inputs: {
    width: '537px',
    heigth:'70px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color:'#E7E7E7',
    mixBlendMode: 'normal',
    opacity: '0.5',
    padding: '26px 429px 24px 25px',
    background: '#1D1D1D',
    boxShadow: '4px -4px 10px rgba(47, 47, 47, 0.5), -4px 4px 4px rgba(0, 0, 0, 0.5)',
    borderRadius: '8px'
    } ,
inputsGrid: {
    width: 'auto',
    margin:'auto',
    padding:'47px 0 0 0 ' 
    },
inputsBorder: {
 paddingBottom:'24px'   
    },
downButton: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '17px',   
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#8D6723',
    padding: '15px 31px 16px 32px',
    background: '#1D1D1D',
    boxShadow: '4px -4px 8px rgba(47, 47, 47, 0.5), -4px 4px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '8px'
    },
downButtonBorder: {
    paddingTop: '47px',
    justifyContent: 'flex-end',
    display: 'flex'
    
}
}))
export default function HeadText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
      <Grid container style={{paddingBottom:'92px'}} direction="column">
      <Grid className={classes.mainTypographyGrid}  item>
      <Typography className={classes.mainTypography}>SUBSCRIBE TO OUR NEWSLETTER</Typography>
                  </Grid> 
     <Grid container className={classes.inputsGrid} direction="column">
     <Grid className={classes.inputsBorder}  item><Input className={classes.inputs} placeholder="Full Name " type="text"></Input></Grid>
    <Grid className={classes.inputsBorder} item><Input className={classes.inputs} placeholder="E-Mail" type="email"></Input></Grid> 
     <Grid  className={classes.downButtonBorder}>
      <Button className={classes.downButton}>SUBSCRIBE</Button>                
    </Grid>                  
     </Grid>
            
      </Grid>
      </Grid>
    </Container>
  )
}