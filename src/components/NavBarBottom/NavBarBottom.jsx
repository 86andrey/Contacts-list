import * as React from 'react';
import Box from '@mui/material/Box';

import Dialog from '@mui/material/Dialog';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';


import { AddContactsForm } from 'components';
// import { useToggle } from 'hooks/useToggle';

const NavBarButton = () => {
    const [open, setOpen] = React.useState(false);
    // const { isOpenUpdateForm } = useToggle();
    
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                sx={{ top: 'auto', bottom: 0, bgcolor: "rgb(0 0 0 / 26%)" }}>
                <Toolbar >
                    <StyledFab color="secondary" aria-label="add" sx={{ border: '2px solid' }}>
                        <AddIcon onClick={handleClickOpen} sx={{ color: '#fff' }} />
                    </StyledFab>
                    <Dialog open={open} onClose={handleClose}>
                        <IconButton aria-label="Example"
                            onClick={handleClose}
                            sx={{ paddingLeft: '80%' }}>
                            <CancelIcon sx={{ fontSize: 40, color: '#9c27b0' }} />
                        </IconButton>
                        <AddContactsForm type={'add'} />
                    </Dialog>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
export default NavBarButton;