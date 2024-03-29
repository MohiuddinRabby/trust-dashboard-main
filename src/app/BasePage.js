import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import TestModulePage from "./modules/TestModule/pages/TestModulePage";

// importing Modules (TestModulePage) as lazy
// const TestModulePage = lazy(() =>
//   import("./modules/TestModule/pages/TestModulePage")
// );

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/dashboard" />}
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/test-modules" component={TestModulePage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
