import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './Journal.css';
import draftToHtml from 'draftjs-to-html';
import { logout } from '../../actions/auth.actions';
import { connect } from 'react-redux';
import { addJournal, getJournals } from '../../actions/journal.action';
import { Link } from 'react-router-dom';
import './Journal.css'; 

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  watchMyJournal = async () => {
    const user = {
        email: this.props.email
    }
    this.props.watchMyJournals(user);
  }
  
 
  
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

    submitHandler = (e) => {
        e.preventDefault();
        const journal = {
          email: this.props.email,
          data: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
        };
        this.props.submitJournal(journal);
        this.setState({
          editorState: EditorState.createEmpty()
        });
    }

  render() {
    const { editorState } = this.state;

    return (
        <div className="journal_layout">
            <h1 className="journal_heading">Hey {this.props.name}, hope you are having a wonderful day!!!</h1>
             <div className="journal_editor">
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
            
            <button className="journal_btn" onClick={this.submitHandler}>Upload</button>
            <button className="journal_btn1" onClick={() => this.props.logoutHandler()}>Logout</button>
            <button className="journal_btn2" onClick={this.watchMyJournal}><Link className="journals_ulink" to="/updates">My Journals</Link></button>
            
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    name: state.auth.name,
  }
}

const mapDispatcToProps = dispatch => {
  return {
    logoutHandler: () => dispatch(logout()),
    submitJournal: (journal) => dispatch(addJournal(journal)),
    watchMyJournals: (user) => dispatch(getJournals(user))
  }
}

export default connect(mapStateToProps, mapDispatcToProps)(Journal);