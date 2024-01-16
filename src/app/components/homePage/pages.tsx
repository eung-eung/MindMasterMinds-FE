import React from 'react'
import Header from './header'
import About from './about-us'
import Admission from './our-admission'
import Explore from './explore'
import Tutor from './tutor'
import Article from './article'
import Join from './join-now'
import Footer from './footer'

export default function HomePage() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Header title="Taste of knowlegde." titleDetail="Daily updates of high-quality courses, documents, and academic articles."/>
            <About />
            <Admission />
            <Explore />
            <Tutor />
            <Article />
            <Join />
            <Footer />
        </div>
    )
}
