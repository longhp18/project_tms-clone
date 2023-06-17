import Layout from "@/components/Layout/Layout";
import "./index.css";
import "./style.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const path = router.pathname;

   let titlePage = "";

   switch (path) {
      case "/":
         titlePage = "Home";
         break;
      case "/create-request":
         titlePage = "Create Request";
         break;
      case "/404":
         titlePage = "Not Found";
         break;
      default:
         titlePage = "Home";
         break;
   }
   return (
      <Layout>
         <Head>
            <title>Meta - {titlePage}</title>
         </Head>
         <Component {...pageProps} />
      </Layout>
   );
}
