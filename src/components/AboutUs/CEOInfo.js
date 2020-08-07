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
mainGrid: {
    display: 'flex',
    background: '#1D1D1D',
    boxShadow:'4px -4px 10px rgba(47, 47, 47, 0.5), -4px 4px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '12px', 
    width: '799px',
    height:'279px'    
    },
ceoName: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#8D6723'
    }
    ,
ceoNameUnderlineBorder: {
    paddingTop:'1px'
},
ceoNameUnderline: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    paddingBottom:'8.5px',
    borderBottom: '1px solid #E7E7E7',
    color: '#E7E7E7',
    width:'192px'
},
ceoSayingBorder:{
    marginTop: '34.5px',
    width:'450px',
    heigth:'96px'
    },
ceoSaying:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#E4E4E4'
    },
ceoImage: {
    marginLeft:'109px'
    },
quotesLeft: {
   
    heigth: '312px',
    right:'71%',
    top: '87.5%',
    position: 'absolute'
    },
quotesRight: {
    heigth: '312px',
    right:'47%',
    top:'93.5%',
    position: 'absolute'
    },
}))
export default function HeadingText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
          <Grid style={{ width: '95%', margin: 'auto' }} container direction="column">
              <Grid style={{display:'flex',justifyContent:'center',paddingTop:'111px'}}>
              <Grid container className={classes.mainGrid}>
            <Grid style={{padding:'30px 0 59px 30px',display:'flex'}} > 
         <Grid className={classes.ceoInfo} >
                      <Grid item className={classes.ceoNameBorder}>
                          <Typography className={classes.ceoName}>Jamal Khasaev</Typography>
                      </Grid>
                      <Grid item className={classes.ceoNameUnderlineBorder}>
                          <Typography className={classes.ceoNameUnderline}>CEO of Frazex</Typography>
                      </Grid>  
                      <Grid item className={classes.ceoSayingBorder}>
                          <Typography className={classes.ceoSaying}>It is not enough to be a great team in order to create
                          a modern, sought-after product. Be on the same
                          wavelength! Love your project! Breathe with the project!
Cheer for it! Only then will you succeed.</Typography>
                              </Grid>  
                              <img  className={classes.quotesLeft} src="quote1.png"></img>
                              <img className={classes.quotesRight} src="quote2.png"></img>
                              
         </Grid> 
         <Grid className={classes.ceoImage}><img src="ceoImage.png"></img></Grid>  
         </Grid>           
              </Grid>
              </Grid>
      </Grid>
    </Container>
  )
}


