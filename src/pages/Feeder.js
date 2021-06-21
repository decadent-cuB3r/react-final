import { Layout, BackTop,  } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import Feeder from "../components/FeederCard";
import { useEffect } from "react";

const { Header, Content, Footer } = Layout;

function Compare() {
  useEffect(() => {
    console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
  }, [])
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content className="content-user">
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
