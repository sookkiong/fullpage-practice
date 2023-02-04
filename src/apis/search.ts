import http from './instance';

export const GetSearch = async (searchValue: string) => {
  const { data } = await http.get({
    url: `http://suple.cafe24app.com/api/search/${searchValue}`,
  });
  return data;
};
