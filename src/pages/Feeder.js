import { Layout, BackTop,  } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import Feeder from "../components/FeederCard";
import products from "../json/products.json"

const { Header, Content, Footer } = Layout;

function Compare() {
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
            <Feeder />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
}

export default Compare;
