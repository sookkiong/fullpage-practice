import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Home = () => {
  const [value, setValue] = useState<string>('');
  const navigate: NavigateFunction = useNavigate();

  return (
    <div style={{ margin: '100px' }}>
      <input type='text' onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => navigate(`/search?q=${value}`)}>검색</button>
    </div>
  );
};

export default Home;
