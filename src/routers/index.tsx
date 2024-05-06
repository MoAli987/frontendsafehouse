import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import Footer from "shared/Footer/Footer";
import CrimeReport from "containers/CrimeReport/CrimeDataGet";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import Page404 from "containers/Page404/Page404";

import AccountPage from "containers/AccountPage/AccountPage";
import AccountPass from "containers/AccountPage/AccountPass";
import PageContact from "containers/PageContact/PageContact";

import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";

import PageAddListing from "containers/PageAddListing/AddProperty";
import PageEditListing from "containers/PageAddListing/EditProperty";

import PageHome from "containers/PageHome/PageHome";

import ListingRealEstatePage from "containers/ListingRealEstatePage/ListingRealEstatePage";
// Header of main website
import SiteHeader from "containers/SiteHeader";

import FooterNav from "components/FooterNav";
import useWindowSize from "hooks/useWindowResize";
import ListingStayDetailPage from "containers/ListingDetailPage/listing-stay-detail/ListingStayDetailPage";
import ListFilter from "containers/ListingRealEstatePage/ListFilter";


export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome },
  { path: "/home-2", component: PageHome },

  { path: "/crimereport", component: CrimeReport },
  //

  { path: "/property-detail/:id", component: ListingStayDetailPage },
  //

  { path: "/property", component: ListingRealEstatePage },
  { path: "/property-listFilter/:location/:price/:status/:typefor", component: ListFilter },
  //
  { path: "/author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/account-password", component: AccountPass },

  //
  { path: "/add-listing", component: PageAddListing },
  { path: "/edit-listing/:id", component: PageEditListing },
  //
  { path: "/contact", component: PageContact },

  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },

  //
];

const MyRoutes = () => {
  let WIN_WIDTH = useWindowSize().width;
  if (typeof window !== "undefined") {
    WIN_WIDTH = WIN_WIDTH || window.innerWidth;
  }

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <SiteHeader />

      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>

      {WIN_WIDTH < 768 && <FooterNav />}
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
