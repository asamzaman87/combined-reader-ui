import * as React from "react";
import { PaletteMode } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export const ToggleColorMode: React.FC<ToggleColorModeProps> = ({
  mode,
  toggleColorMode,
}) => {
  return (
    <IconButton onClick={toggleColorMode} color="primary" size="small">
      {mode === "dark" ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
};
