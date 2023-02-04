import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { GetSearch } from '../apis/search';

const Search = () => {
  const [db, setDb] = useState();
  const [searchParams] = useSearchParams();
  const serachValue = searchParams.get('q');

  useEffect(() => {
    const getData = async () => {
      const data = await GetSearch(serachValue as string);
      setDb(data);
    };
    getData();
  }, []);

  return (
    <div>
      {db?.map((v) => (
        <div key={v.post_key}>{v.title}</div>
      ))}
    </div>
  );
};

export default Search;
