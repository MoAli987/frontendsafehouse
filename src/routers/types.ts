import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/home-2"?: {};
  "/crimereport"?: {};
  "/property"?: {};
  "/property-detail/:id"?: {};
  "/property-listFilter/:location/:price/:status/:typefor"?: {};
  "/contact"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/author"?: {};
  "/listing-real-estate-map"?: {};


  //
  "/account"?: {};

  "/account-password"?: {};
  "/account-billing"?: {};

  ///
  "/add-listing"?: {};
  "/edit-listing/:id"?: {};
  //

 

}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
