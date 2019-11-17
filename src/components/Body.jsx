import React from 'react';
import ToolbarActions from './ToolbarActions';
import FilesList from './FilesList';
import { connect } from 'react-redux';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';
import { setSelected, setParent } from '../actions';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(1, 2),
    },
}));

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(node, toClean) {
        let parents = this.props.parent;
        let newParents = [];

        if (!toClean) {
            for(var i = 0; i < parents.length; i++) {
                newParents.push(parents[i] );
                if (parents[i] === node) {
                    break;
                }
            }
        }
        
        this.props.setSelected(node);
        this.props.setParent(newParents);
    }

    printLinks(parent) {
        let toAddParent = parent;
        let parentsList = [];

        parent.map((toAddParent,index) => {
            parentsList.push(
                <Button key={"link"+index} color="inherit" onClick={this.handleClick.bind(this, toAddParent, false)}>
                    {toAddParent.node}
                </Button>
            );
        });

        return parentsList;
    }

    render() {
        return (
            <div key={"Body"}>
                <ToolbarActions {...this.props} key={"BodyToolbar"}></ToolbarActions>
                <Paper elevation={0} className={useStyles.paper}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        <Button color="textPrimary" onClick={this.handleClick.bind(this, this.props.fetched, true)}>S3</Button>
                        {this.printLinks(this.props.parent)}
                    </Breadcrumbs>
                </Paper>
                <FilesList {...this.props} key={"BodyList"}></FilesList>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    fetched: store.defaultState.fetched,
    selected: store.defaultState.selected,
    directory: store.defaultState.directory,
    parent: store.defaultState.parent
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSelected, setParent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Body);