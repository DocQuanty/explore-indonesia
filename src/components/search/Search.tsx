import s from "./Search.module.scss"
import IconSearch from "./IconSearch"

// const searchToggle =() => {

// }

const Search = ()=>{
    return <div className={s.search}>
                <IconSearch color={"#ccc"}/>
                <input className={s.searchInput} type="text" />
            </div>
}
export default Search