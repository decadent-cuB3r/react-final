import { Layout, BackTop } from "antd";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function DetailPage({match}) {
  const choseproduct = products.find((x) => x.id === match.params.productId);
  return (
    <Layout className="container main-layout">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <ProductDetail product={choseproduct} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
}

export default DetailPage;
