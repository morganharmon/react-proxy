export default function YelpSearch({ yelpInput, setYelpInput, yelpSubmit }) {
  return (
    <div>
      <form onSubmit={yelpSubmit}>
        <label>Yelp location: </label>
        <input value={yelpInput} onChange={(e) => setYelpInput(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}