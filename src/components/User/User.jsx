import React from 'react';
import PropTypes from 'prop-types';

export default function User(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <span className="user__content">{item.name}</span>
    </React.Fragment>
  );
}

User.propTypes = {
  item: PropTypes.object.isRequired,
};
