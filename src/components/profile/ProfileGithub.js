import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    // console.log("test");
    getGithubRepos(username);
  }, [getGithubRepos, username]);
  //   console.log('repos', repos);
  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>Github Repos</h2>
      {repos.length === 0 ? (
        <Spinner />
      ) : (
        repos.map(r => (
          <div key={r.id} className='repo bg-white p-1 my-1'>
            console.log(r)
            <div>
              <h4>
                <a
                  href={r.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                ></a>
              </h4>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  repos: PropTypes.array.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(
  mapStateToProps,
  { getGithubRepos }
)(ProfileGithub);
