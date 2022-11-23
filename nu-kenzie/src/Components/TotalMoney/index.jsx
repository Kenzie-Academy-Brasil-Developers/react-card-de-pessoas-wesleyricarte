// Style Imports
import "./styles.css";

const TotalMoneyBox = ({ listTransactions }) => {
	const total = listTransactions.reduce(
		(accumulator, item) => item.value + accumulator,
		0
	);

	return (
		<div className="container-total-money">
			<div>
				<h2 className="font16-bold">Valor total</h2>
				<h2 className="font16-bold text-pink">R$ {total},00</h2>
			</div>
			<h5 className="font12-regular">O valor se refere ao saldo</h5>
		</div>
	);
};

export default TotalMoneyBox;
