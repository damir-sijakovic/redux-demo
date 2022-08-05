import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentHeader, countChange } from "./headerSlice";
import './header.css';

const Header = () => {

	const barItems = ['Home','Posts','About'];
	const [activePage, setActivePage] = useState('home');

	const createBarItem = (name, activeName) => {	
		const key = name +'_'+ Date.now();
		const nameLowerCase = name.toLowerCase();					
		const classString = (activeName == nameLowerCase) ? "w3-bar-item w3-finger w3-black" : "w3-finger w3-bar-item"; 
		return ( <div onClick={() => setActivePage(nameLowerCase)} key={key} className={classString} >{name}</div> );
	};	
	
	
	const dispatch = useDispatch();
	useEffect(() => {		
		dispatch(setCurrentHeader(activePage));		
		dispatch(countChange());
	}, [activePage]);
	
	
	return (
		<div className="w3-bar w3-green">
			{barItems.map((barName) => (
				createBarItem(barName, activePage)
			))}		
		</div> 
	);
	
}

export default Header;

