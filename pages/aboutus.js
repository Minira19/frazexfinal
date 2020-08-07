import React from 'react'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeadingText from '../src/components/AboutUs/HeadingText'
import CEOInfo from '../src/components/AboutUs/CEOInfo'
import BottomText from '../src/components/AboutUs/BottomText'
import Count from '../src/components/AboutUs/Count'
import Cards from '../src/components/Blog/Cards'
import ReactDOM from 'react-dom'
import {makeStyles} from '@material-ui/core/styles'


//components

export default function AboutUs(props) {
  return (
  <Grid container direction="column" style={{backgroundColor:'#1d1d1d',padding: '57px 0 57px 0' }} >
  <HeadingText />
  <CEOInfo/>       
  <Count/>
  <BottomText/>        
  </Grid>
  )
}
