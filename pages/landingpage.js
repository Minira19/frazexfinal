import React from 'react'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeadingText from '../src/components/MainPage/HeadingText'
import Connection from '../src/components/MainPage/Connection'
import MiddleText from '../src/components/MainPage/MiddleText'
import Programs from '../src/components/MainPage/Programs'
import Count from '../src/components/MainPage/Count'
import ReactDOM from 'react-dom'
import {makeStyles} from '@material-ui/core/styles'
import Carousel from '../src/components/MainPage/Carousel'



//components

export default function LandingPage(props) {
  return (
      <Grid container direction="column" style={{ backgroundColor: '#1d1d1d', padding: '57px 0 57px 0' }} >
          <Carousel/>
          <HeadingText />
          <Count />
          <MiddleText />
          <Programs/>
          <Connection />
        
  </Grid>
  )
}
