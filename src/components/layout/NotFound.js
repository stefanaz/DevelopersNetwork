import React, { Fragment } from "react";
import PropTypes from "prop-types";

const NotFound = props => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i>Page not found
      </h1>
      <p className='large'>Sorry, that page does not exists</p>
    </Fragment>
  );
};

NotFound.propTypes = {};

export default NotFound;
