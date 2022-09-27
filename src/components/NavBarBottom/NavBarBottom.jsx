import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';

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
        <div>
            <React.Fragment>
                <AppBar
                    position="fixed"
                    color="primary"
                    sx={{ top: 'auto', bottom: 0, maxWidth: '600px', right:'auto'}}
                >
                    <Toolbar >
                        <StyledFab color="success" aria-label="add">
                            <Button onClick={handleClickOpen}>
                                <AddIcon sx={{ color: '#fff' }} />
                            </Button>                            
                            <Dialog open={open} onClose={handleClose} sx={{
                                        position: 'absolute'}}>
                                <IconButton aria-label="Example"
                                    onClick={handleClose}                                    
                                    sx={{
                                        position: 'fixed',
                                        paddingLeft: '68%'
                                    }}>
                                    <CancelIcon sx={{ fontSize: 40 }} />
                                </IconButton>                                    
                                <AddContactsForm type={'add'}/>                                  
                            </Dialog>              
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
};
export default NavBarButton;