import { Menu } from "react-admin";

import BookIcon from "@mui/icons-material/Book";
import LabelIcon from "@mui/icons-material/Label";

export const MyMenu = () => (
  <Menu>
    <Menu.Item to="/users" primaryText="Users" leftIcon={<BookIcon />} />
    <Menu.Item to="/button" primaryText="MUIButton" leftIcon={<LabelIcon />} />
  </Menu>
);
