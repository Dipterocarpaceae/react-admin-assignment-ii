import * as React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./pages/users";
import MUIButton from "./pages/muibutton";
import { MyLayout } from "./mylayout";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin layout={MyLayout} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <CustomRoutes>
      <Route path="/button" element={<MUIButton />} />
    </CustomRoutes>
  </Admin>
);

export default App;
