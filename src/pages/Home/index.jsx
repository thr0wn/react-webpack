import React, { useEffect } from "react";
import Header from "@/src/components/Header";
import Text from "@/src/components/Text";
import "./index.css";

const Home = () => (
  <main className="home-page">
    <Header />
    <article className="home-content">
      <Text>Home content</Text>
    </article>
  </main>
);

export default Home;
