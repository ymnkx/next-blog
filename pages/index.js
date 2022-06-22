import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilstyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

//ssgの場合
//外部から１度だけデータを取得する時は「getStaticProps」をつかう
export async function getStaticProps() {
  const allPostsData = getPostsData();
  // console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilstyles.headingMd}>
        <p>勉強中</p>
      </section>
      <section>
        <h2>まるまるのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilstyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilstyles.lightText}>{date}</small>
            </article>
          ))}
          ;
        </div>
      </section>
    </Layout>
  );
}
