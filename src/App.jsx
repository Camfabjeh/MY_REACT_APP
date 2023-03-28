import PokemonCard from "./components/PokemonCard";

function App() {
  const monStyle = {
    backgroundColor: "grey",
    borderRadius: "10%",
    textAlign: "center",
    fontSize: "24px",
  }

  return (
    <div style={monStyle}>
      <PokemonCard />
    </div>
  );
}

export default App