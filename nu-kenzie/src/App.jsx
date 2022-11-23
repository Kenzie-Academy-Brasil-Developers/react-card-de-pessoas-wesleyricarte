// Style Imports
import "./App.css";

// Page Imports
import Home from "../src/Pages/Home";
import Dashboard from "../src/Pages/Dashboard";

// React Imports
import { useState, useEffect } from "react";

function App() {
	const [login, setLogin] = useState(false);
	const [listTransactions, setListTransactions] = useState([]);
	const [listShow, setListShow] = useState([...listTransactions]);

	useEffect(() => {
		setListShow(listTransactions);
	}, [listTransactions]);

	return (
		<>
			{login ? (
				<Dashboard
					setLogin={setLogin}
					listTransactions={listTransactions}
					setListTransactions={setListTransactions}
					listShow={listShow}
					setListShow={setListShow}
				/>
			) : (
				<Home
					setLogin={setLogin}
					listTransactions={listTransactions}
					setListShow={setListShow}
				/>
			)}
		</>
	);
}

export default App;
