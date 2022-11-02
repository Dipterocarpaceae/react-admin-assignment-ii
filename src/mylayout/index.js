import { Layout } from "react-admin";
import { MyMenu } from "../mymenu";

export const MyLayout = (props) => <Layout {...props} menu={MyMenu} />;
