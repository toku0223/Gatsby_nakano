import * as React from "react";
import Seo from "../components/seo";
import "../styles/style.css";


const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

const IndexPage = () => (
  <>
    <div className="header">
      <h1 className="head-text">ProAca Web site</h1>
    </div>
    <div className="body-all">
      <h1>
        Welcome to my Site!<br />
        Enjoy Everything!
      </h1>
      <p className="body-p">
        Written by SatYus.<br />
        Front Engineer at ProAca.Inc, Love JavaScript
      </p>
      <div className="flex">
        <img className="img-shadow" src={RANDOM_IMG} alt="" width="480" height="270" />
        <div className="flex-column">
          <h2>Hello World!！ I'm　ゆうじろう！</h2>
          <p>ゆうじろう　フロントエンジニア　developper</p>
          <p>2021年７月21日</p>
        </div>
      </div>
      <div className="flex">
        <img className="img-shadow" src={RANDOM_IMG} alt="" width="480" height="270" />
        <div className="flex-column">
          <h2>決済機能実装しました</h2>
          <p>gatsby stripeで決済機能を実装しました。</p>
          <p>2021年７月23日</p>
        </div>
      </div>
    </div>
    <p className="copy-right">&copy;2021 ProAca</p>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
