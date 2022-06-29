import Head from 'next/head';

export default function Layout({ title }) {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>
      </>
   );
}
