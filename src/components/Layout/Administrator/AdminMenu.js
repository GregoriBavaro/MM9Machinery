//Hooks
import { useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import { Link, useRouteLoaderData, Form } from "react-router-dom";
import useWindowDimensions from "../../Hooks/use-windowDimensions";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";

//Icons
import LoginIcon from "@mui/icons-material/Login";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const AdminMenu = () => {
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { width } = useWindowDimensions();
  const token = useRouteLoaderData("admin");

  const { t } = useTranslation();

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
    collapseSidebar();
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  useEffect(() => {
    if (width < 900) {
      setCollapsed(!collapsed);
      collapseSidebar();
    }
  }, [width]);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, token]);

  return (
    <div>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<KeyboardDoubleArrowRightIcon />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<KeyboardDoubleArrowLeftIcon />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px",
                  }}
                >
                  {t("administrator")}
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>
          <Menu>
            {!token  && !isLoggedIn && (
              <MenuItem
                component={<Link to="login" />}
                icon={<LoginIcon sx={{ color: "rgb(0, 191, 111)" }} />}
              >
                {t("log_in")}
              </MenuItem>
            )}
            {token && isLoggedIn && (
              <MenuItem icon={<LoginIcon sx={{ color: "rgb(0, 191, 111)" }} />}>
                <Form action="logout" method="post">
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    {t("log_out")}
                  </button>
                </Form>
              </MenuItem>
            )}
            {token && isLoggedIn &&<SubMenu
              defaultOpen
              icon={<SettingsIcon sx={{ color: "rgb(0, 191, 111)" }} />}
              label={t("swiper_options")}
            >
              <MenuItem
                component={<Link to="clients" />}
                icon={<PeopleAltIcon sx={{ color: "rgb(0, 191, 111)" }} />}
              >
                {t("our_clients")}
              </MenuItem>
              <MenuItem
                component={<Link to="partners" />}
                icon={<HandshakeIcon sx={{ color: "rgb(0, 191, 111)" }} />}
              >
                {t("our_partners")}
              </MenuItem>
            </SubMenu>}
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
};

export default AdminMenu;
