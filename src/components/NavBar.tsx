import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Heading {
  Text: string;
  URL: string;
}

export function NavBar(props: any) {
  const options: Heading[] = [
    { Text: "Home", URL: "/" },
    { Text: "About", URL: "/about" },
    // { Text: "FAQ", URL: "/FAQ" },
    { Text: "Contact", URL: "/contact" },
    // { Text: "Settings", URL: "/settings" },
  ];
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const state: any = useLocation().state;

  function OriginalNavBar() {
    return (
      <>
        {options.map((element, index) => {
          return (
            <span key={element.Text}>
              <Link
                to={element.URL}
                className={
                  element.URL === path
                    ? "text-yellow-300 underline"
                    : " text-white"
                }>
                {element.Text}
              </Link>
              {index !== options.length - 1 ? " | " : ""}
            </span>
          );
        })}
      </>
    );
  }

  return (
    <div className="navbar grid grid-cols-3 grid-rows-1 mx-auto fixed">
      <div className="col-span-2 block" key="navBarOne">
        <OriginalNavBar />
      </div>
      <div
        className="w-full flex justify-end items-center pr-1"
        key="navBarTwo">
        <button
          onClick={() => {
            path !== "/settings"
              ? navigate("/settings", { state: { present: true } })
              : state
              ? navigate(-1)
              : navigate("/");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            textAnchor="Settings"
            className={
              "h-4 w-4 " +
              ("/settings" === path
                ? "text-yellow-300 underline"
                : " text-white")
            }
            viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
