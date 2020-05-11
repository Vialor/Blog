import Head from 'next/head'
import HomeLayout from '../components/layouts/home'

const Home = ()=>(
    <>
    <Head>
    <title></title>
    </Head>
    <div className="greeting">
      <p>New Year New Blog!</p>
      <hr/>
    </div>
    <div id="about-me">
      <h2>About Me</h2>
      <div className="intro">
        <img src="/static/img/utsc_hw.jpg" alt="utsc_hw" className="utsc-hw"/>
        <div className="self-intro">
          <p>I am Yiyang Zhou, and Vialor is my web-name.
          I am also a second-year Software Engineering Co-op student in University of Toronto. </p>
          <p>Currently interested in Web developing</p>
          <a href="/static/pdf/Resume.pdf">My Resume</a>
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
        <a href="mailto:yiyang.zhou@mail.utoronto.ca">Email: yiyang.zhou@mail.utoronto.ca</a><br/>
        <a href="../public/img/Wechat.jpeg">WeChat: Vial2000</a><br/>
      </address>
    </div>
    
    <style jsx>{`
      .greeting{
        text-align: center;
      }

      .intro{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .utsc-hw{
        width: 45%;
        box-shadow: 0 0 5px rgba(0,0,0,1);
      }

      .self-intro{
        width:50%;
      }

      @media only screen and (max-width: 600px){
        .intro{
          flex-direction: column;
        }

        .utsc-hw{
          width: 100%;
          box-shadow: 0 0 5px rgba(0,0,0,1);
        }
        
        .self-intro{
          width:100%;
        }
      }
      `}</style>
      </>
  );

Home.Layout = HomeLayout;
export default Home;