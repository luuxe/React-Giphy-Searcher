import { SearchIcon } from '../shared/AppIcons';

function SearchForm({ handleSubmit, handleChange, searchString }) {
    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
            <input
                placeholder="Search"
                type="text"
                name="searchString"
                required
                onChange={handleChange}
                value={searchString}
            />
            <button type='submit'><SearchIcon height="2rem" width="2rem" />
            </button>
        </form>
    )
}

export default SearchForm