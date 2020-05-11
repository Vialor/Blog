import Link from 'next/link'
import CSLayout from '../components/layouts/cs'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/readMD'
import utilStyles from '../styles/utils.module.css'

export default function CS({ allPostsData }) {
  return (
    <>
      <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/cs/[id]" as={`/cs/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

CS.layout = CSLayout;

