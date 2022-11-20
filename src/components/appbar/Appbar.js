
import React from 'react';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
//Components AppBar
import AppbarMobail from './AppbarMobail';
import AppbarDesktab from './AppbarDesktab';


const Appbar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            {matches ? <AppbarMobail /> : <AppbarDesktab />}
        </>
    );
};

export default Appbar;

