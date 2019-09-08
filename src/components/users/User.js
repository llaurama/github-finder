import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../contexts/github/githubContext';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { user, getUser, loading, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.username);
        getUserRepos(match.params.username);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location,
        company,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if (loading) return <Spinner />;

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">
                Back to Search
            </Link>
            Hireable:{' '}
            {hireable ? (
                <i className="fas fa-check text-success" />
            ) : (
                <i className="fas fa-time-circle text-danger" />
            )}
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        alt="avatar"
                        className="round-img"
                        style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    {location && <p>Location: {location}</p>}
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark my-1"
                    >
                        Visit Github profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers: {followers}
                </div>
                <div className="badge badge-success">
                    Following: {following}
                </div>
                <div className="badge badge-light">
                    Public repos: {public_repos}
                </div>
                <div className="badge badge-dark">
                    Public gists: {public_gists}
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    );
};

export default User;
