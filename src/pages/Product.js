import { Layout, BackTop } from "antd";
import { useContext } from "react";
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import ProductList from "../components/ProductList";
import AppSlide from "../components/Carousel";

import { StoreContext } from "../context"

const { Header, Content, Footer } = Layout;

function Product() {
  const { state: { page:{ products } } } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      <Layout>
        <Header className="layout-header">
          <Appheader />
        </Header>
        <Content>
          <AppSlide />
          <ProductList products={products} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
}

export default Product;
