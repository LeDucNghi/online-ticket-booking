import "./side-bar.scss";

import { Button } from "@chakra-ui/react";
import { dashboardSidebar } from "../../../../constants";
import { useNavigate } from "react-router-dom";

export interface ISideBarProps {}

export function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="side-bar-container">
      {dashboardSidebar.map((x, key) => {
        return (
          <Button
            className="side-bar-button"
            onClick={() => navigate(`${x.route}`)}
            colorScheme="teal"
            variant="ghost"
            key={key}
            leftIcon={
              <img className="side-bar-icons" src={x.icon} alt={x.name} />
            }
          >
            {x.name}
          </Button>
        );
      })}
    </div>
  );
}
