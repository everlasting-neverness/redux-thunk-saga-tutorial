import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { createPost, showAlert } from '../redux/actions';
import Alert from './Alert';

class FetchedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    inputChangeHandler = e => {
        e.persist();
        this.setState(prev => ({
            ...this.state,
            [e.target.name]: e.target.value
        }));
    };

    submitHandler = e => {
        e.preventDefault();
        const { title } = this.state;

        if (!title.trim()) {
            return this.props.showAlert('Post title can not be empty.');
        }

        const newPost = {
            title,
            id: uuid()
        };
        this.props.createPost(newPost);
        this.setState({ title: '' });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert ? <Alert message={this.props.alert} /> : null}
                <div className='form-group'>
                    <label htmlFor='title'>Post header</label>
                    <input
                        type='text'
                        id='title'
                        className='form-control'
                        name='title'
                        value={this.state.title}
                        onChange={this.inputChangeHandler}
                    />
                </div>
                <button className='btn btn-success'>Create</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({ alert: state.app.alert });

const mapDispatchToProps = {
    createPost,
    showAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);
