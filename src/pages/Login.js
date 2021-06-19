import * as QueryString from "query-string"

// import antd dependencies
import { Layout, BackTop } from "antd";

// import components
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import LoginCard from "../components/LoginCard"

const { Header, Content, Footer } = Layout;

function Login(props) {
    const { redirect } = QueryString.parse(props.location.search)
    return (
        <Layout className="container">
            <Layout>
                <Header className="layout-header">
                    <Appheader />
                </Header>
                <Content>
                    <LoginCard redirect={redirect} />
                </Content>
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
            <BackTop />
        </Layout>
    );
}

export default Login;
