import Layout from '../components/layout.js'

export default function Home() {
  return (
    <Layout>
      <iframe src="/static/pdf/Calculus.pdf" id="my-frame" height="100%" width="100%">
        Your Browser Does Not Support PDF, Please Download This File: 
      <a href="/static/pdf/LinearAlgebra.pdf" id="math-pdf-download">Download PDF</a></iframe>
      <style jsx>{`
        iframe{
          height: 90vh;
          border: solid lightblue 3px;
          border-radius: 5px;
          box-shadow: 0 0 5px lightslategray;
        }`
      }</style>
    </Layout>
  );
}