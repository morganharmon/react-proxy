export default function BusinessesList({ businesses }) {
  return (
    <div>
      {
        businesses.map((business, i) => <div key={business.name + i} business={business} >{business.name}</div>)
      }
    </div>
  );
}