import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export default class ToolbarActions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="static" key={"ToolbarBase"}>
                <Toolbar key={"ToolbarTool"}>
                    <IconButton key={"ToolbarIconButton"} edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                        <Icon key={"ToolbarIcon"}>add_circle</Icon>
                    </IconButton>
                    <Typography key={"ToolbarTitle"} variant="h6" className={useStyles.title}>
                    SE Amazon S3 DevInterface
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        );
    }
}