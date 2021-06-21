import { Layout, BackTop } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import PlaceOrderCard from "../components/PlaceOrderCard";

const { Header, Content, Footer } = Layout;

function PlaceOrder() {
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <PlaceOrderCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
}

export default PlaceOrder;
