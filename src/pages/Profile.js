// import antd dependencies
import { Layout, BackTop } from "antd";

// import components
import Appheader from "../components/Header";
import AppFooter from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

const { Header, Content, Footer } = Layout;

function Profile() {
    return (
        <Layout className="container">
            <Layout>
                <Header className="layout-header">
                    <Appheader />
                </Header>
                <Content className="content-user">
                    <ProfileCard />
                </Content>
                <Footer className="layout-footer login-footer">
                    <AppFooter />
                </Footer>
            </Layout>
            <BackTop />
        </Layout>
    );
}

export default Profile;
