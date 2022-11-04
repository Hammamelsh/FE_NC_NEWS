

const SortOrderBy =({setSortBy, setOrderBy})=>{

    const handleSortChange =(e)=>{
        console.log(e.target.value)
        setSortBy(e.target.value)
    }

    const handleOrderChange = (e)=>{
        setOrderBy(e.target.value)
    }
    return(
        <section>
        <div>
            <label className="dropdown-menu" htmlFor="sort_by">
					Sort articles by:
				</label>
            <select onChange={handleSortChange}>
            
                <option value="created_at">
                    Date
                </option>
                <option value={"title"}>Title</option>
                <option value="votes">Votes</option>
                <option value="comment_count"> Comments Count</option>
            </select>
        </div>
        <div>
            <label className="dropdown-menu" htmlFor="order">Order:</label>
            <select name="order" id="order" onChange={handleOrderChange}>
            <option value={'DESC'}>Descending</option>
					<option value={'ASC'}>Ascending</option>
            </select>
        </div>
        
        </section>
    )
    
    
}

export default SortOrderBy