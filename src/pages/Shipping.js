import { Layout, BackTop } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import ShippingCard from "../components/ShippingCard";

const { Header, Content, Footer } = Layout;

function Shipping() {
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <ShippingCard />
        </Content>
        <Footer className="layout-footer ">
          <AppFooter />
        </Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
}

export default Shipping;
