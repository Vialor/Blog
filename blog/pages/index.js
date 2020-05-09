import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <>
    <Head>
      <title>Vialor's Page | Yiyang Zhou</title>
    </Head>
    <Layout>
      <div class="greeting">
        <p>The Spring of Toronto!</p>
        <hr/>
      </div>
      <div id="about-me">
        <h2>About Me</h2>
        <div class="intro">
          <img src="img/utsc_hw.jpg" alt="utsc_hw" class="utsc-hw"/>
          <div class="self-intro">
            <p>I am Yiyang Zhou, and Vialor is my web-name.
            I am also a second-year Software Engineering Co-op student in University of Toronto. </p>
            <p>Currently interested in Web developing</p>
            <a href="post/Resume.pdf" class="link">My Resume</a>
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
          <a href="mailto:yiyang.zhou@mail.utoronto.ca" class="link">Email: yiyang.zhou@mail.utoronto.ca</a><br/>
          <a href="./img/Wechat.jpeg" class="link">WeChat: Vial2000</a><br/>
        </address>
      </div>
    </Layout>
  </>);
}
