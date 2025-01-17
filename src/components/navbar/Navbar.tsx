import React, { useCallback, useState } from "react";
import "./Navbar.css";
import IconImage from "../../assets/images-removebg-preview.png";
import { UpArrow, DownArrow } from "../MuiIcon/MuiIcon";
import { Link } from "react-router-dom";

const hook: string[] = [
  "useEffect_useRef",
  "useContext",
  "useMemo_useCallback",
  "useReducer",
  "useState_prop",
];
const TypeScript: string[] = [
  "Generics",
  "Type Anotations_Interface_Type",
  "Union types_Enum",
];

const style: React.CSSProperties = {
  color: "white",
  width: "20px",
  marginTop: "5px",
  transition: "0.3s ease",
};
const activeStyle: React.CSSProperties = {
  ...style,
  rotate: "180deg",
};
const nonactiveStyle: React.CSSProperties = {
  ...style,
  rotate: "0deg",
};

function Navbar() {
  const [activeIndex, setActiceIndex] = useState<number | null>(null);

  const handleChangeAngle = useCallback(
    (index: number) => {
      setActiceIndex((prev) => (prev === index ? null : index));
      console.log(activeIndex);
    },
    [activeIndex]
  );

  return (
    <div className="navbar_container">
      <div className="icon">
        <Link to='/'><img src={IconImage} alt="React icon" /></Link>
      </div>
      <div className="navbar_content">
        <ul className="list_items">
          <li>
            <a href="">React Hooks</a>
            <div className="item_content" onClick={() => handleChangeAngle(0)}>
              <DownArrow
                sx={activeIndex === 0 ? activeStyle : nonactiveStyle}
              />
              {activeIndex === 0 ? (
                <div className="popupItem">
                  {hook.map((e) => (
                    <div className="items">
                      <Link to={`/${e}`}>{e}</Link>
                      <hr />
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </li>
          <li>
            <a href="">Type Script</a>
            <div className="item_content" onClick={() => handleChangeAngle(1)}>
              <DownArrow
                sx={activeIndex === 1 ? activeStyle : nonactiveStyle}
              />
              {activeIndex === 1 ? (
                <div className="popupItem">
                  {TypeScript.map((e) => (
                    <div className="items">
                      <Link to={`/${e}`}>{e}</Link>
                      <hr />
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
