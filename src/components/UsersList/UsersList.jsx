import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import cn from 'classnames';

export default function UsersList(props) {
  const { onClickItem } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}users.json`);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(`Ошибка загрузки данных (${e.message})`);
        setTimeout(() => setError(null), 3000);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (event) => {
    setSelectedItem(event);
    onClickItem(event);
  };

  return (
    <React.Fragment>
      {loading && <span className="loading">Загрузка данных, подождите...</span>}
      {error && <span className="error">{error}</span>}
      {data && data.length !== 0 && <List className='list__items' data={data}>
        {data =>
          data.map((item) =>
            <ListItem key={item.id} className={cn({ 'list__item': true, 'active': item.id === selectedItem.id })}
              item={item} onClickItem={handleClick} />)}
      </List>}
    </React.Fragment>
  );
}

UsersList.propTypes = {
  onClickItem: PropTypes.func.isRequired,
};
