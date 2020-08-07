import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';
const useStyle = makeStyles((theme) => ({
body: {
   backgroundColor:'#1d1d1d'
 },
mainContainer: {
   display: 'flex',
   flexWrap: 'nowrap',
   paddingTop:'63px',
   paddingBottom:'35px',
   backgroundRepeat: 'no-repeat',
   backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(29, 29, 29, 0.0001) 0%, #1D1D1D 100%), url(/map.png)',
   width: '794px',
  },
mainTypography: {
   fontStyle: 'normal',
   fontWeight: '800',
   fontSize: '24px',
   lineHeight: '29px',
   color:'#8D6723'
  }
  ,
mainTypographyGrid: {
    width: '165px',
    heigth: '29px', 
    paddingBottom:'11px'
  }
  ,
typographies: {
    width: '350px',
    heigth: '72px',
    marginRight:'222px'
  }
  ,
smallTypographies: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'

  },
inputsGrid: {
  background: '#1D1D1D',
  boxShadow: '4px -4px 8px rgba(47, 47, 47, 0.5), -4px 4px 8px rgba(0, 0, 0, 0.5)',
  borderRadius: '27px',
  width: '537px',
  heigth: '504px',
  },
inputs: {
  fontStyle:'normal',
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '27px',
  color: '#E4E4E4',
  width: '428px',
  heigth: '42px',
  padding:'0 0 15px 0',
  borderBottom: '1px solid #2D2D2D'
  },
inputBorder: {
  padding:'0 0 76px 0' 
  },
button: {
  fontStyle: 'normal',
  fontweight: 'bold',
  fontSize: '14px',
  lineHeight:' 17px',
  textAlign: 'center',
  letterSpacing: '1px',
  color: '#8D6723',
  padding:'15px 55px 16px 56px',
  width: '156px',
  heigth: '48px',
  background: '#1D1D1D',
  boxShadow: '4px -4px 8px rgba(47, 47, 47, 0.5), -4px 4px 8px rgba(0, 0, 0, 0.5)',
  borderRadius: '8px'
  },
buttonBorder: {
  paddingTop: '40px',
  display: 'flex',
  justifyContent:'center'
}
}))
export default function Connection() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
        <Grid container className={classes.mainContainer}>
          <Grid container direction="column" className={classes.typographies}>
            <Grid item className={classes.mainTypographyGrid}>
              <Typography className={classes.mainTypography}>CONTACT US</Typography>
            </Grid>
            <Grid style={{width:'350px',heigth:'72px'}} container ditection="column">
              <Typography className={classes.smallTypographies}><strong>• E-mail:</strong>office@frazex.com
              </Typography> 
              <Typography className={classes.smallTypographies}><strong>• Tel:</strong>(+994) 55 285 28 28
               </Typography> 
              <Typography className={classes.smallTypographies}><strong>• Ünvan:</strong>Aliyar Aliyev ave.,52a, Baku,AZ1052
              </Typography> 
            </Grid>
          </Grid>
          <Grid container direction="column" className={classes.rightGrid}>
          <Grid container direction="column" className={classes.inputsGrid}>
            <Grid container style={{padding:'53px 61px 0px 49px '}}>
            <Grid className={classes.inputBorder} item>
              <Input className={classes.inputs} placeholder="Full Name" type="text"></Input></Grid>
            <Grid className={classes.inputBorder} item>
              <Input className={classes.inputs} placeholder="Mobile" type="mob"></Input></Grid>
            <Grid className={classes.inputBorder} item>
              <Input className={classes.inputs} placeholder="E-Mail " type="email"></Input></Grid>
            <Grid className={classes.inputBorder} item>
                <Input className={classes.inputs} placeholder="Message" type="text"></Input></Grid>  
            </Grid>   
            </Grid>
             <Grid item className={classes.buttonBorder}>
                <Button className={classes.button}>SEND</Button>
              </Grid>
          </Grid>
      </Grid>
      </Grid>
    </Container>
  )
}
