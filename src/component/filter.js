
import YearFilter from './yearFilter'
import MonthFilter from './MonthFilter'
const filter = ({ sort, onSortChange, years,onChangeFilterValue}) => {
    console.log('years array', years);
  if (sort === "newest") {
    sort = "oldest";
  } else {
    sort = "newest";
  }
  return (
    <div className="filter">
      <label for="cars">Select Year</label>
      <YearFilter
      onChangeFilterValue = {onChangeFilterValue}
      years={years}
       />
       
      <label style={{marginLeft:'20px'}} for="cars">Select Month</label>
      <MonthFilter
      onChangeFilterValue = {onChangeFilterValue}
      //years={years}
       />

      <a href="#" onClick={() => onSortChange(sort)} className="right">
        Sort by {sort}
      </a>
    </div>
  );
};

export default filter
