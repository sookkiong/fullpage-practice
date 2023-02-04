import useSearch from '../hooks/useSearch';

const Home = () => {
  const { db, searchValue, handleChange, handleClick, enterOn } = useSearch();

  return (
    <div style={{ margin: '100px' }}>
      <input
        type='text'
        onChange={handleChange}
        style={{ marginRight: '10px' }}
        onKeyDown={enterOn}
      />
      <button onClick={handleClick}>검색</button>

      <div
        style={{ border: '1px solid #000', height: '100px', margin: '10px 0' }}>
        {!searchValue ? null : db?.length ? (
          db.map((v) => <div key={v.post_key}>{v.title}</div>)
        ) : (
          <div>찾는 것 없음</div>
        )}
      </div>
    </div>
  );
};

export default Home;
