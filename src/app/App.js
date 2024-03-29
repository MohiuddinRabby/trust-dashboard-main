/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../app/Routes";
import { I18nProvider } from "../_metronic/i18n";
import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function App({ basename }) {
  return (
    /* Provide Redux store */
    <>
      {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
      <React.Suspense fallback={<LayoutSplashScreen />}>
        {/* Override `basename` (e.g: `homepage` in `package.json`) */}
        <BrowserRouter basename={basename}>
          {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
          <MaterialThemeProvider>
            {/* Provide `react-intl` context synchronized with Redux state.  */}
            <I18nProvider>
              {/* Render routes with provided `Layout`. */}
              <ToastContainer position="top-right" autoClose={3000} />
              <Routes />
            </I18nProvider>
          </MaterialThemeProvider>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}
