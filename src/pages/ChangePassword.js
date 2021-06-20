// import antd dependencies
import { Layout, BackTop } from "antd";

// import components
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import ResetPasswordCard from "../components/ResetPassCard";

const { Header, Content, Footer } = Layout;

function ChangePassword() {
    return (
        <Layout className="container">
            <Layout>
                <Header className="layout-header">
                    <Appheader />
                </Header>
                <Content>
                    <ResetPasswordCard />
                </Content>
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
            <BackTop />
        </Layout>
    );
}

export default ChangePassword;
