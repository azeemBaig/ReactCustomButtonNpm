import "./App.css";
import ButtonCustom from "./lib/components/demo";

function App() {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <div className="App">
      <ButtonCustom label="any text label" handleClick={handleClick} />
    </div>
  );
}

export default App;
