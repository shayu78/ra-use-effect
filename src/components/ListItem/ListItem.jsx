import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

export default function ListItem(props) {
  const { className, item, onClickItem } = props;

  return (
    <li className={className} onClick={() => onClickItem(item)} >
      <User item={item} />
    </li>
  );
}

ListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired,
};
