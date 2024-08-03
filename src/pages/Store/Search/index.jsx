import { useLocation } from "react-router-dom";
const Search = () => {
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    return <div>{urlParams.get("q")}</div>
}
export default Search;