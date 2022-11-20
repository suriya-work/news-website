import React from 'react';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';

const AppbarDesktab = ({ matches }) => {
    return (
        <>
            <AppbarContainer>
                <AppbarHeader>
                    My Bags
                </AppbarHeader>
            </AppbarContainer>

        </>
    );
};

export default AppbarDesktab;