import React, { useState, useContext } from 'react';
import GithubContext from '../../contexts/github/githubContext';
import AlertContext from '../../contexts/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const { searchUsers, users, clearUsers } = githubContext;

    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        if (text === '') {
            alertContext.showAlert('Please, enter something.', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    };

    const onChange = ({ target }) => setText(target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search users"
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {users.length > 0 && (
                <button
                    className="btn btn-light btn-block"
                    onClick={clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
