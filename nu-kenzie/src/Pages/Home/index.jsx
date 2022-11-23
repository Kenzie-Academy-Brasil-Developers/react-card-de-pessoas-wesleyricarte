// Style Imports
import "./styles.css";

// Image Imports
import Illustration from "../../assets/index.png";

const Home = ({ setLogin, listTransactions, setListShow }) => {
	return (
		<div className="Home">
			<div className="HomeInfo">
				<h1 className="font38-extra-bold">
					<span className="text-pink">Nu</span>{" "}
					<span className="text-white">Kenzie</span>
				</h1>
				<h2 className="font38-extra-bold text-white">
					Centralize o controle das suas finanças
				</h2>
				<h5 className="text16-regular text-white">
					de forma rápida e segura
				</h5>
				<button
					className="buttons-default"
					onClick={() => {
						setLogin(true);
						setListShow(listTransactions);
					}}
				>
					Iniciar
				</button>
			</div>
			<div className="HomeImg">
				<img src={Illustration} alt="Homepage" />
			</div>
		</div>
	);
};

export default Home;
