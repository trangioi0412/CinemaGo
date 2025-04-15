import Layout from "./home/layout";
const { getProvincesWithDetail } = require("vietnam-provinces");

export default function Home() {
  (() => {
    console.log(getProvincesWithDetail());
  })();
  return <Layout />;
}
