import React, { useEffect } from "react";
import Header from "@/src/components/Header";
import Title from "@/src/components/Title";
import Text from "@/src/components/Text";
import Tag from "@/src/components/Tag";
import "./index.css";

const Home = () => (
  <main className="home-page">
    <Header />
    <article className="home-content">
      <Title>Title 1</Title>
      <Tag>Tag 1</Tag>&nbsp;
      <Tag>Tag 2</Tag>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Title>Title 2</Title>
      <Tag>Tag 3</Tag>
      <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse.</Text>
    </article>
  </main>
);

export default Home;
