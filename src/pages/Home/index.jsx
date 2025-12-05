import React from "react";
import PageWithHeader from "@/src/pages/PageWithHeader";
import Title from "@/src/components/Title";
import Text from "@/src/components/Text";
import Tag from "@/src/components/Tag";
import Button from "@/src/components/Button";
import "./index.scss";

const Home = () => (
  <PageWithHeader>
    <section>
      <Title>Title 1</Title>
      <Tag>Tag 1</Tag>&nbsp;
      <Tag>Tag 2</Tag>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button>Button 1</Button>
    </section>
    <br />
    <section>
      <Title>Title 2</Title>
      <Tag>Tag 3</Tag>
      <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse.</Text>
      <Button>Button 2</Button>&nbsp;
      <Button>Button 3</Button>
    </section>
  </PageWithHeader >
);

export default Home;
