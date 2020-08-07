import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'

import Link from '../../Link'

import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    mainContainer: {
        width: '1193px',
        margin: 'auto',
        height: '663px',
        [theme.breakpoints.down('md')]: {
            height: '400px'
        },
        [theme.breakpoints.down('sm')]: {
            height: '250px'
        },
        borderRadius: '2px'
   
    },
    carouselContainer: {
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '663px',
        [theme.breakpoints.down('md')]: {
            height: '400px'
        },
        [theme.breakpoints.down('sm')]: {
            height: '250px'
        },
        objectFit: 'cover'
    },
    carouselText: {
      
        position: 'absolute',
        top: '0',
        marginTop: '42px',
        padding: '10px',
        [theme.breakpoints.down('md')]: {
            marginTop: '30px',
            marginLeft: '140px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '25px',
            marginLeft: '80px'
        }
    },
    GridContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: ' border-box'
    },
    GridItem: {
        margin: '0',
        boxSizing: 'border-box'
    },
    carouselBigText: {
        ...theme.typography.h1,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '68px',
        lineHeight: '83px',
        color: '#E4E4E4',

        [theme.breakpoints.down('md')]: {
            lineHeight: '36px',
            marginBottom: '15px',
            fontSize: '68px'
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight: '20px',
            marginBottom: '15px',
            fontSize: '68px'
        },
        color: '#E4E4E4',
        marginBottom: '15px',
        textAlign: 'start',
        margin: 0
    },
    carouselSmallText: {
        ...theme.typography.tab,
        marginBottom: '8px',
        margin: '0',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '17px',
        lineHeight: '21px',
        color: '#E4E4E4',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            marginBottom: '29px',
            fontSize: '17px',
            lineHeight: '21px'
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '29px',
            fontSize: '17px',
            lineHeight: '21px'
        }
    },
    carouselXSText: {
        ...theme.typography.estimate,
        marginTop: '29px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign: 'center',
        letterSpacing: '1px',
        color: '#8D6723',
        padding: '15px 49px 16px 50px',
        background: '#1D1D1D',
        boxShadow: '4px -4px 8px rgba(47, 47, 47, 0.5), -4px 4px 8px rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
   
    },
    brandName: {
        width: '84px !important',
        height: '84px !important',
        boxSizing: 'border-box',
        backdropFilter: 'blur(4px)',
        borderRadius: '50%',
        [theme.breakpoints.down('md')]: {
            height: '70px  !important',
            width: '70px !important'
        },
        [theme.breakpoints.down('sm')]: {
            height: '50px  !important',
            width: '50px !important'
        },
        border: '1px solid transparent !important'
    }
    ,
    slide: {
     background:'transparent'
 }
}))
const carousels = [
  {  
    image: '/lamp.png',
    bigText: ' INNOVATION',
    smallText: '',
    xsText: 'Details'
  },
  { 
    image: '/lamp.png',
    bigText: ' INNOVATION',
    smallText: '',
    xsText: 'Details'
  },
]

export default function CarouselComp() {
  const classes = useStyle()
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Carousel
              showThumbs={false}
              interval={5000}
              autoPlay={true}
              infiniteLoop={true}
              className={classes.Carousel}
              showArrows={false}
              showStatus={false}
      >
        {carousels.map((carousel, number) => (
         
            <div className={classes.carouselContainer} >
              <img src={carousel.image}  className={classes.image} />
              <div className={classes.carouselText}>
                <div className={classes.GridContainer} style={{flexDirection: 'column'}}>
                  <div className={classes.GridItem}>
                    <div
                      className={classes.GridContainer}
                      style={{
                        justifyContent: 'flex-start',
                        marginBottom: matchesSM ? '40px' : matchesMD ? '52px' : '62px'
                      }}
                    >
                    
                    </div>
                  </div>
                  <div
                    className={classes.GridItem}
                    style={{
                      // border: '1px solid transparent',
                      maxWidth: matchesSM ? '70%' : matchesMD ? '60%' : '55%'
                    }}
                  >
                     <div className={classes.GridContainer} component={Link} href="/revulation">
                                      <div className={classes.GridItem}>
                        <h6 className={classes.carouselBigText}> {carousel.bigText}</h6>
                      </div>
                      <div className={classes.GridItem}>
                                        <h6 className={classes.carouselSmallText}>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam,
eaque ipsa quae ab illo inventore veritatis et quasi architecto
beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
quia voluptas sit aspernatur aut odit aut fugit.  
                                            {carousel.smallText}</h6>
                      </div>
                    
                      <div className={classes.GridItem}>
                        <h6 className={classes.carouselXSText}> {carousel.xsText}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        ))}
      </Carousel>
    </Grid>
  )
}

