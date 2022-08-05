import { useSelector} from "react-redux";

const Body = () => {
	
  const { selectedItem, changedTimes } = useSelector((state) => state.header);

  return (
        
  <div className="w3-container">
	<div className="w3-panel w3-blue">
	  <h3>Information!</h3>
	  <p>Selected item: {selectedItem}</p>
	  <p>Count change: {changedTimes}</p>
	</div>  
  </div>  
  
  );
}
export default Body;

