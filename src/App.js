import "./App.css";
import CardList from "./Component/CardList";
import img1 from "./Images/Mixed-Fruit-Bowl.png";
import img2 from "./Images/Veg-img.png";
import img3 from "./Images/non-veg.png";
function App() {
  const foodList  = [img1,img2,img3];
  return (
    <div className="App">
      <CardList foodList={foodList} />
    </div>
  );
}

export default App;
