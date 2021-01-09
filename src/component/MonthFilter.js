const MonthFilter = ({onChangeFilterValue }) => {
   const month =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   return (
      <select id = "month_filter" onChange= {(e)=>onChangeFilterValue(e)}>
           <option >All</option>
          {
               month.map((val,index)=>(
                    <option value = {index} >{val}</option>
                ))
          }
      </select>
   )
        }
  export default MonthFilter;
