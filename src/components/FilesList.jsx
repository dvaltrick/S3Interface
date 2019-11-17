import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFetched, setSelected, setParent } from '../actions';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      marginTop: '50px',
      backgroundColor: theme.palette.background.paper,
    },
}));

class FilesList extends React.Component {
    constructor(props, state) {
        super(props, state);
    }

    onClickHandler(node) {
        if (node.type === 1) {
            let parents = this.props.parent;

            parents.push(node);
            this.props.setParent(parents);
            this.props.setSelected(node);
        } else {
            alert('download');
        }
    }

    printItems(selected) {
        console.log(selected);
        if (selected !== undefined && selected.children !== undefined) {
            let items = this.props.selected.children;
            let elements = [];

            items.map((element, index) => {
                elements.push(
                    <ListItem button 
                        component="a" {...this.props} 
                        key={"ListItem"+index}
                        onClick={this.onClickHandler.bind(this, element)}
                        >
                            <Icon key={"ListItemIcon"+index}>{element.type === 1 ? "folder_open" : "get_app"}</Icon>
                            <Typography key={"ListItemtext"+index} variant="h6">{element.node}</Typography>
                    </ListItem>
                );
            });

            return elements;
        }

        return "";
    }

    render() {
        console.log(this.props.selected);
        return (
            <List className={useStyles.root} key={"ListBase"}>
                {this.printItems(this.props.selected)}
            </List>
        );
    }
}

const mapStateToProps = store => ({
    fetched: store.defaultState.fetched,
    selected: store.defaultState.selected
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setFetched, setSelected, setParent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilesList);