import * as QueryString from "query-string"

// import antd dependencies
import { Layout, BackTop } from "antd";

// import components
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import RegisterCard from "../components/RegisterCard";

const { Header, Content, Footer } = Layout;

function Register(props) {
    const { redirect } = QueryString.parse(props.location.search)
    return (
        <Layout className="container">
            <Layout>
                <Header className="layout-header">
                    <Appheader />
                </Header>
                <Content>
                    <RegisterCard redirect={redirect} />
                </Content>
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
            <BackTop />
        </Layout>
    );
}

export default Register;
