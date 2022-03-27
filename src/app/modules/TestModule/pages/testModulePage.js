import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import { TestCustomerCreate } from "./testCustomer/TestCustomerCreate";
import { TestCustomerList } from "./testCustomer/TestCustomerList";
export default function TestModulePage() {
  return (
    <div>
      <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
          {
            /* Redirect from eCommerce root URL to /customers */
            <Redirect
              exact={true}
              from="/test-modules"
              to="/test-modules/test-customer-list"
            />
          }
          <ContentRoute
            path="/test-modules/test-customer-list"
            component={TestCustomerList}
          />
          <ContentRoute
            path="/test-modules/test-customer-create"
            component={TestCustomerCreate}
          />
        </Switch>
      </Suspense>
    </div>
  );
}
