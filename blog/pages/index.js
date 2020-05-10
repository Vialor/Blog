import Head from 'next/head'
import Layout, {title} from '../components/layout'

export default function Home({ allPostsData }) {
  return (
    <Layout>
    <Head>
      <title>{title}</title>
    </Head>
      <div className="greeting">
        <p>The Spring of Toronto!</p>
        <hr/>
      </div>
      <div id="about-me">
        <h2>About Me</h2>
        <div className="intro">
          <img src="img/utsc_hw.jpg" alt="utsc_hw" className="utsc-hw"/>
          <div className="self-intro">
            <p>I am Yiyang Zhou, and Vialor is my web-name.
            I am also a second-year Software Engineering Co-op student in University of Toronto. </p>
            <p>Currently interested in Web developing</p>
            <a href="post/Resume.pdf" className="link">My Resume</a>
          </div>
        </div>
      </div>
      <div id="about-blog">
        <h2>About This Blog</h2>
        <p>Uploaded my first year note, resources for web developing and some projects I am working on.</p>
        <p>Do check out JS cool stuff!</p>
      </div>
      <div id="contact">
        <h2>Contact</h2>
        <address>
          <a href="mailto:yiyang.zhou@mail.utoronto.ca" className="link">Email: yiyang.zhou@mail.utoronto.ca</a><br/>
          <a href="./img/Wechat.jpeg" className="link">WeChat: Vial2000</a><br/>
        </address>
      </div>
    </Layout>);
}
