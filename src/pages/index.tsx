import type { NextPage } from "next";
import Head from "next/head";
import Info from "../components/Info"

import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Audio Documents</title>
        <meta
          name="description"
          content="Audocs Landing"
        />
      </Head>
      <HomeView />
      <Info/>
   
    </div>
  );
};

export default Home;
