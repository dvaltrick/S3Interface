import React, {useState} from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFetched, setSelected } from './actions';
import './App.css';

import Body from './components/Body';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    let resultTree = {};

    resultTree = {
      node: 'Base',
      type: 1,
      children: [
        {
          node: 'documentos',
          type: 1,
          children: [
            {
              node: 'arquivos',
              type: 1,
              children: [
                {
                  node: 'document.txt',
                  type: 2,
                  children: []
                },
                {
                  node: 'document2.docx',
                  type: 2,
                  children: []
                }
              ]
            }
          ]
        },
        {
          node: 'músicas',
          type: 1,
          children: [
            {
              node: 'Artistas',
              type: 1,
              children: [
                {
                  node: 'Green Day',
                  type: 1,
                  children: [
                    {
                      node: 'AmericanIdiot.mp3',
                      type: 2,
                      children: []
                    },
                    {
                      node: 'JesusOfSuburbia.mp3',
                      type: 2,
                      children: []
                    }
                  ]
                },
                {
                  node: 'Show.mp4',
                  type: 2,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    };

    this.props.setFetched(resultTree);
    this.props.setSelected(resultTree);

    return "";
  }

  render() {
    return (
      <div className="App" key={"AppRoot"}>
        <Body {...this.props} 
          key={"AppBody"}
          fetched={this.props.fetched}></Body>
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
  bindActionCreators({ setFetched, setSelected }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);