import React from 'react'
import Grid from '@material-ui/core/Grid'
import Head from 'next/head'
import HeadText3 from '../src/components/Team/HeadText3'
import TeamMembers from '../src/components/Team/TeamMembers'
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom'
import {makeStyles} from '@material-ui/core/styles'
//components

export default function Team(props) {
  return (
  <Grid container direction="column" style={{backgroundColor:'#1d1d1d',padding: '57px 0 57px 0' }} >
          <HeadText3 />
          <TeamMembers/>
    </Grid>
  )
}
