import { Layout, BackTop } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import PaymentCard from "../components/PaymentCard";

const { Header, Content, Footer } = Layout;

function Payment() {
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <PaymentCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
}

export default Payment;
