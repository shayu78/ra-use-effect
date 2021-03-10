import React, { useState } from 'react';
import './App.css';
import UsersList from './components/UsersList/UsersList';
import Details from './components/Details/Details';

function App() {
  const [data, setData] = useState({});

  const handleClick = (event) => setData(event);

  return (
    <div className='component__wrapper'>
      <UsersList onClickItem={handleClick} />
      {data.id && <Details info={data} />}
    </div>
  );

}

export default App;
