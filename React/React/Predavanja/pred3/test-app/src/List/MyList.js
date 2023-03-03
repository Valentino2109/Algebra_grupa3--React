export default function MyList() {
  const numbers = [34, 12, 65, 56, 77];

  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}
