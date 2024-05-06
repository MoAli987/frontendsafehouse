import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "components/Header/Header";
import {
  ShoppingBagIcon as ShoppingCartIcon,
  Cog8ToothIcon as CogIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { PathName } from "routers/types";

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";
interface HomePageItem {
  name: string;
  slug: PathName;
}

let OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
let OBSERVER: IntersectionObserver | null = null;


const SiteHeader = () => {




  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
    </>
  );
};

export default SiteHeader;
