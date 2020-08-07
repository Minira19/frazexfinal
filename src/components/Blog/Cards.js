import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
const useStyle = makeStyles((theme) => ({
body: {
   backgroundColor:'#1d1d1d'
    },
 root: {
     width: 260, 
     backgroundImage: 'url(inloyaBusiness.png)',
     backgroundRepeat: 'no-repeat',
     background: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.7) 90%)',
     borderRadius:'0'
  },
  media: {
      height: 130,
      background:' linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.7) 90%);'
  },
cardsGrid: {
    display:'flex'  
 } ,
cards: {
   padding:'21px 22px 22px 0' 
    },
cardTypography: {
   fontStyle: 'normal',
   fontWeight: '800',
   fontSize: '16px',
   lineHeight: '24px',
   color: '#FFFFFF',
   padding: '100px 163px 16px 12px',
   width: '85%',
   heigth:'24%'
    
}
}))
export default function HeadText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
    <Grid container style={{padding:'103px 0 82px 0'}}>
    <Grid continer className={classes.cardsGrid}>
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography  className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid>    
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
     <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid>    
                      <Grid item className={classes.cards}>
                      <Card className={classes.root}>
       <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card> 
                      </Grid> 
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
       <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid>                           
     </Grid>  
     <Grid continer className={classes.cardsGrid}>
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
       <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography} >
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid>    
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
     <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid>    
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
       <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid> 
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
    <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
           Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>     
    </Card>
                      </Grid>                           
    </Grid>
      <Grid continer className={classes.cardsGrid}>
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid>    
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
       <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid>    
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>    
    </Card>
                      </Grid> 
                      <Grid item className={classes.cards}>
                       <Card className={classes.root}>
     <CardActionArea>
        <CardMedia
          className={classes.media}>       
          <Typography className={classes.cardTypography}>
            Heading Text
          </Typography>         
        </CardMedia>
      </CardActionArea>   
    </Card>
  </Grid>                           
     </Grid>             
     </Grid>
      </Grid>
    </Container>
  )
}
 