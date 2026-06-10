import "../styles/SearchBar.css";
export default function SearchBar({ search, setSearch }) {
    return <input placeholder="Search games..." value={search} onChange={e => setSearch(e.target.value)} />
}
