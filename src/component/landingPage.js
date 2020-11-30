import React from 'react'
import Contact from './contact'
import Header from './header'
import Mybio from './mybio'
import Personal from './personal'
import Sample from './sample'

export default function Index() {
    return (
        <div>
            <Header/>
            <Mybio/>
            <Personal/>
            <Sample/>
            <Contact/>
            
        </div>
    )
}
