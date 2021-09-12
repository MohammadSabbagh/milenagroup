import React, { useEffect, useState  } from 'react';
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import { StaticImage } from "gatsby-plugin-image"

const capri = '../assets/media/capri.png';
const deepbluefishing = '../assets/media/deepbluefishing.png';
const streamline = '../assets/media/streamline.png';
const milenadcs = '../assets/media/milena_dcs.png';
const yachtcruise = '../assets/media/yachtcruise.png';


const IndexPage = ({location, data}) => {

  return (
    <Layout>
      <Seo
        title={'Company Management and Lifestyle Developers'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>Company Management & Lifestyle Developers</h1>
          <StaticImage placeholder="blurred" className="banner"  src={'../assets/media/banner.jpg'} alt="Oryx" width={700} />
          <p className="narrow">Milena's leadership team is comprised of the industry's most experienced leaders, who have secured our place as one of the Dubai greatest company management and lifestyle developers.</p>
        </div>
      </section>
      <section className="section" id="companies">
        <div className="container">
          <h2>Group Companies</h2>
          <div className="columns is-multiline">
            <div className="column">
              <a href="https://www.capriuae.net/" rel="noopener noreferrer" target="_blank">
                <h3>Capri</h3>
                <StaticImage placeholder="blurred"  src={capri} alt="capri" height={200} />
              </a>
            </div>
            <div className="column">
              <a href="https://milena.ae/" rel="noopener noreferrer" target="_blank">
                <h3>Milena DCS</h3>
                <StaticImage placeholder="blurred"  src={milenadcs} alt="milenadcs" width={200} />
              </a>
            </div>
            <div className="column">
              <a href="https://yachtcruise.ae/" rel="noopener noreferrer" target="_blank">
                <h3>Yachtcruise</h3>
                <StaticImage placeholder="blurred"  src={yachtcruise} alt="yachtcruise" height={200} />
              </a>
            </div>
            <div className="column">
              <a href="https://deepbluefishing.ae/" rel="noopener noreferrer" target="_blank">
                <h3>Deepbluefishing</h3>
                <StaticImage placeholder="blurred"  src={deepbluefishing} alt="deepbluefishing" height={200} />
              </a>
            </div>
            <div className="column">
              <a href="https://streamline-re.ae/" rel="noopener noreferrer" target="_blank">
                <h3>Streamline</h3>
                <StaticImage placeholder="blurred"  src={streamline} alt="streamline" height={200} />
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
