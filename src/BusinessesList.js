export default function BusinessesList({ businesses, yelpCity }) {
  return (
    <div className='list'>
      <h3>Yelp {yelpCity} businesses</h3>
      {
        businesses.map((business, i) => <div key={business.name + i} business={business} >{business.name}</div>)
      }
    </div>
  );
}