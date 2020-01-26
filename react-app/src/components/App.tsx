import "./App.scss";
import "antd/dist/antd.css";

import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Route, Router, Switch } from "react-router-dom";

import { AppStoreContext } from "../stores/appStore";
import history from "../stores/history";
import HomeView from "../views/Home/HomeView";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import WalletView from "../views/Wallet/WalletView";
import { useTranslation } from "react-i18next";

const { Content } = Layout;

const App: React.FC = observer(() => {
  const { t, i18n } = useTranslation();
  const store = useContext(AppStoreContext);
  store.changeLocale(i18n.language.substring(0,2))

  return (
    <Router history={history}>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/:link">
              <WalletView />
            </Route>
            <Route>
              <h2 style={{ marginTop: "2rem", textAlign: "center" }}>
                404: Not Found
              </h2>
            </Route>
          </Switch>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
});

export default App;
