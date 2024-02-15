import React, { useEffect, useState  } from 'react';
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import { StaticImage } from "gatsby-plugin-image"

const banner = '../assets/media/banner.jpg';
const capri = '../assets/media/capri.png';
const deepbluefishing = '../assets/media/deepbluefishing.png';
const streamline = '../assets/media/streamline.png';
const milenadcs = '../assets/media/milena_dcs2.png';
const yachtcruise = '../assets/media/yachtcruise.png';

const thegivingmovement = '../assets/media/thegivingmovement.png';
const baldinini = '../assets/media/baldinini.png';
const bekayz = '../assets/media/bekayz.png';
const elisabettafranchi = '../assets/media/elisabettafranchi.png';
const giuseppezanotti = '../assets/media/giuseppezanotti.png';
const krisma = '../assets/media/krisma.jpg';


const IndexPage = ({location, data}) => {

  return (
    <Layout>
      <Seo
        title={'Company Management and Lifestyle Developers'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>Management & Lifestyle</h1>
          <p className="narrow header-text">Our team is comprised of the industry's most experienced leaders, who have secured our place as one of the Dubai greatest company management and lifestyle developers.</p>
          <StaticImage placeholder="blurred" className="banner"  src={banner} alt="Oryx" width={700} />
        </div>
      </section>
      <section className="section" id="companies">
        <div className="container">
          <h2>Group Companies</h2>
          <div className="columns is-multiline is-mobile">
            <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://thegivingmovement.com" rel="noopener noreferrer" target="_blank">
                <h3>The Giving Movement</h3>
                <StaticImage placeholder="blurred"  src={thegivingmovement} alt="thegivingmovement" height={200} />
              </a>
            </div>
            <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://www.baldinini-shop.com" rel="noopener noreferrer" target="_blank">
                <h3>Baldinini</h3>
                <StaticImage placeholder="blurred"  src={baldinini} alt="baldinini" height={200} />
              </a>
            </div>
            <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://bekayz.com" rel="noopener noreferrer" target="_blank">
                <h3>Bekayz</h3>
                <StaticImage placeholder="blurred"  src={bekayz} alt="bekayz" height={200} />
              </a>
            </div>
            <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://www.elisabettafranchi.com" rel="noopener noreferrer" target="_blank">
                <h3>Elisabetta Franchi</h3>
                <StaticImage placeholder="blurred"  src={elisabettafranchi} alt="elisabettafranchi" height={200} />
              </a>
            </div>
            <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://www.giuseppezanotti.com/ae/" rel="noopener noreferrer" target="_blank">
                <h3>Giuseppe Zanotti</h3>
                <StaticImage placeholder="blurred"  src={giuseppezanotti} alt="giuseppezanotti" height={200} />
              </a>
            </div>
            <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://krisma.com/en/" rel="noopener noreferrer" target="_blank">
                <h3>Krisma</h3>
                <StaticImage placeholder="blurred"  src={krisma} alt="krisma" height={200} />
              </a>
            </div>
            {/* <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://milena.ae/" rel="noopener noreferrer" target="_blank">
                <h3>Milena DCS</h3>
                <StaticImage placeholder="blurred"  src={milenadcs} alt="milenadcs" width={200} />
              </a>
            </div> */}
            {/* <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://yachtcruise.ae/" rel="noopener noreferrer" target="_blank">
                <h3>Yachtcruise</h3>
                <StaticImage placeholder="blurred"  src={yachtcruise} alt="yachtcruise" height={200} />
              </a>
            </div> */}
            <div className="column is-one-fifth-tablet is-half-mobile">
              <a href="https://deepbluefishing.ae/" rel="noopener noreferrer" target="_blank">
                <h3>Deepbluefishing</h3>
                <StaticImage placeholder="blurred"  src={deepbluefishing} alt="deepbluefishing" height={200} />
              </a>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "services"}}) {
      html
    }
  }
`

export default IndexPage
