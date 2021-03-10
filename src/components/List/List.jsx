import React from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
  const { className, data } = props;

  return (
    <ul className={className}>
      {props.children(data)}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};
