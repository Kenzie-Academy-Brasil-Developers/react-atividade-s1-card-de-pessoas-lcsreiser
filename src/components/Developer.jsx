import "./styles.css";

function Developer({ name, age, country }) {
  return (
    <div className="divDeveloper">
      <p>Dev: {name}</p>
      <p>Idade: {age}</p>
      <p>País: {country}</p>
    </div>
  );
}

export default Developer;
