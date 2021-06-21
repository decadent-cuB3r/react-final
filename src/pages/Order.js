import { Layout, BackTop } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import OrderCard from "../components/OrderCard";

const { Header, Content, Footer } = Layout;

function Order() {
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <OrderCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
}

export default Order;
