
import moment from 'moment'
const List=({dates, sort, onEditScreenChange,deleteNotes})=>{
    if(dates.length===0)
    {
        return <a href="#"className="tiles">No entry yet</a>
    }
    if(sort=='newest')
    {
    dates.sort(function(a,b){
        return new Date(b) - new Date(a);
      })
    }
    else{
        dates.sort(function(a,b){
            return new Date(a) - new Date(b);
          })
    }
    return dates.map((date)=>{
        return(
    <div className="tiles" key={date}>
    <a href="#"  
    onClick={()=>{onEditScreenChange(date)}}
    >
    {moment(date).format("MMMM Do YYYY")}
    </a>
    <a href="#" 
    onClick={()=>deleteNotes(date)}
     className="right">Delete</a>
    </div>
        )
    })
}
export default List