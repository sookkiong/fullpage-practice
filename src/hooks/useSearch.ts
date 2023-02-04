import { useEffect, useState } from 'react';
import {
  NavigateFunction,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { GetSearch } from '../apis/search';

interface PostType {
  post_key: number;
  title: string;
}

// 검색 기능 커스텀 훅
const useSearch = () => {
  const navigate: NavigateFunction = useNavigate();
  const [db, setDb] = useState<PostType[]>(); // 받아온 데이터
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('q');
  const [value, setValue] = useState<string>(''); // 사용자가 입력한 검색값

  const enterOn = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/?q=${value}`);
    }
  };

  const handleClick = () => navigate(`/?q=${value}`);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  // 서버에서 데이터를 받아오는 함수
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await GetSearch(searchValue as string);
        setDb(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [searchValue]);
  return { db, searchValue, enterOn, handleClick, handleChange };
};

export default useSearch;
