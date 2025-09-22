import { NavLink, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav style={{ marginBottom: "20px", fontSize: "14px" }}>
      <NavLink to="/" style={{ color: "#555", textDecoration: "none" }}>
        Home
      </NavLink>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        return (
          <span key={routeTo} style={{ marginLeft: "6px" }}>
            {" / "}
            <NavLink
              to={routeTo}
              style={{ color: "#007bff", textDecoration: "none", marginLeft: "6px" }}
            >
              {name}
            </NavLink>
          </span>
        );
      })}
    </nav>
  );
}
