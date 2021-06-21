import { Layout, BackTop } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import CompareDetail from "../components/CompareDetail"


const { Header, Content, Footer } = Layout;

function Compare() {
  return (
    <Layout className="container">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
            <CompareDetail />
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
