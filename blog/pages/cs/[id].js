import Head from 'next/head'
import CSLayout from '../../components/layouts/cs'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/readMD'

import utilStyles from '../../styles/utils.module.css'

function Post({ postData }) {
  return (
    <>
    <Head>
        <title>{postData.title}</title>
    </Head>
    <article>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
    <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      
    </article>
    </>
  );
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}

Post.Layout = CSLayout;
export default Post;
