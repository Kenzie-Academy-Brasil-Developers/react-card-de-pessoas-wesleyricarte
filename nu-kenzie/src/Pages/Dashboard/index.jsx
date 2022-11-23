// Style Imports
import "./styles.css";

// Components Imports
import ListBox from "../../Components/List";
import Form from "../../Components/Form";
import TotalMoney from "../../Components/TotalMoney";

const Dashboard = ({
	setLogin,
	listTransactions,
	setListTransactions,
	listShow,
	setListShow,
}) => {
	return (
		<div className="App">
			<header className="App-header">
				<div className="container-header">
					<h1 className="font38-extra-bold">
						<span className="text-pink">Nu</span> Kenzie
					</h1>
					<button
						onClick={() => setLogin(false)}
						className="buttons-default"
					>
						Início
					</button>
				</div>
			</header>
			<main className="App-main">
				<section className="Section-1">
					<Form
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
					/>
					<TotalMoney listTransactions={listTransactions} />
				</section>
				<section className="Section-2">
					<ListBox
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
						listShow={listShow}
						setListShow={setListShow}
					/>
				</section>
			</main>
		</div>
	);
};

export default Dashboard;
