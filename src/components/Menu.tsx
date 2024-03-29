import { IconButton, Tooltip } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="fixed bottom-0 sm:bottom-12 w-full sm:w-fit left-1/2 -translate-x-1/2 bg-accent rounded-t-xl 
    sm:rounded-full py-3 px-6 flex items-center justify-around sm:justify-center gap-12 z-30"
    >
      <Link to="home" smooth>
        <Tooltip title="Início" placeholder="top" arrow>
          <IconButton className="group">
            <HomeIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to="about" smooth>
        <Tooltip title="Sobre" placeholder="top" arrow>
          <IconButton className="group">
            <PersonIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to="projects" smooth>
        <Tooltip title="Projetos" placeholder="top" arrow>
          <IconButton className="group">
            <InventoryIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>
    </div>
  )
};

export default Menu;
