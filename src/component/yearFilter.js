const yearFilter = ({ years,onChangeFilterValue }) => {
  console.log("all  ", years);
  if (years.length) {
    return (
      <select onChange = {(e)=>onChangeFilterValue(e)}  id="year_filter">
        <option >All</option>;
        {years.map((year) => {
          return <option value={year}>{year}</option>;
        })}
      </select>
    );
  }
  return (
    <select name="cars" id="cars">
      <option value={null}>Empty</option>
    </select>
  );
};
export default yearFilter;
