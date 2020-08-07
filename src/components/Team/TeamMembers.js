import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '../../Link'
import {makeStyles} from '@material-ui/core/styles'
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
gridContainer:{
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  padding:'91px 0 144px 0'
},
gridItem :{
  padding:'25px 28px 25px 0'

  },
root: {
     width: 226, 
     backgroundImage: 'url(testBlack.png)',
     backgroundRepeat: 'no-repeat',
     background: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.7) 90%)',
     borderRadius:'0'
  },
  media: {
      height: 265,
      background: 'linear-gradient(180deg, rgba(29, 29, 29, 0.0001) 60.58%, rgba(29, 29, 29, 0.946432) 100%)'
  
  },
cardsGrid: {
    display:'flex'  
 } ,
cards: {
   padding:'21px 22px 22px 0' 
  },
typographyGrid: {
   padding:'222px 96px 12px 15px ' 
},
bigCardTypography: {
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '16px',
   lineHeight: '20px',
   color: '#E4E4E4',
   width: '115px',
   heigth:'20px'    
  },
smallCardTypography: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '12px',
    color: '#E4E4E4',
    width: '92px',
    heigth:'12px'

}
}))
export default function HeadText() {
  const classes = useStyle()

  return (
    <Container maxWidth="xl">
      <Grid style={{width:'95%',margin:'auto'}} container direction="column">
              <Grid className={classes.gridContainer}>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}> 
          <Grid container className={classes.typographyGrid}>      
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
          <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
                  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}> 
           <Grid container className={classes.typographyGrid}>          
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography> 
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
          </Grid>  
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}> 
           <Grid container className={classes.typographyGrid}>          
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
          </Grid>  
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}> 
           <Grid container className={classes.typographyGrid}>          
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}> 
           <Grid container className={classes.typographyGrid}>          
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography> 
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography> 
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
          <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
          <Grid className={classes.gridItem}>
                     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                  className={classes.media}>
             <Grid container className={classes.typographyGrid}>        
          <Typography  className={classes.bigCardTypography}>
                      Jack Swiftone
          </Typography>
                    <Typography className={classes.smallCardTypography}> Executive Director</Typography>
          </Grid>        
        </CardMedia>
      </CardActionArea>    
    </Card>
  </Grid>
      </Grid>
      </Grid>
    </Container>
  )
}