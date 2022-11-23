// Style Imports
import "./styles.css";
import { FaTrash } from "react-icons/fa";
import NoCard from "../../assets/NoCard.svg"

// React Imports
import { useState } from "react";

const ListBox = ({
	listTransactions,
	setListTransactions,
	listShow,
	setListShow,
}) => {
	const [selected, setSelected] = useState("all");

	const filterPos = () => {
		setSelected("pos");
		setListShow(
			listTransactions.filter((element) => element.type === "entrada")
		);
	};

	const filterNeg = () => {
		setSelected("neg");
		setListShow(
			listTransactions.filter((element) => element.type === "despesa")
		);
	};

	const deleteTransaction = (descrip) => {
		setListTransactions(
			listTransactions.filter(
				(element) => element.description !== descrip
			)
		);
		setListShow(
			listShow.filter((element) => element.description !== descrip)
		);
	};

	return (
		<div className="container-list-box">
			<div className="div-header-list-box">
				<h2 className="font16-bold">Resumo financeiro</h2>
				<div className="div-buttons-todos-entradas-despesas">
					<button
						onClick={() => {
							setListShow(listTransactions);
							setSelected("all");
						}}
						className={
							selected === "all"
								? "buttons-default Pink"
								: "buttons-default"
						}
					>
						Todos
					</button>
					<button
						onClick={filterPos}
						className={
							selected === "pos"
								? "buttons-default Pink"
								: "buttons-default"
						}
					>
						Entradas
					</button>
					<button
						onClick={filterNeg}
						className={
							selected === "neg"
								? "buttons-default Pink"
								: "buttons-default"
						}
					>
						Despesas
					</button>
				</div>
			</div>
			{listShow.length ? (
				<ul>
					{listShow.map((element, index) => {
						return (
							<li key={"card" + index} className="div-card">
								{element.type === "entrada" ? (
									<div className="div-color-card-green"></div>
								) : (
									<div className="div-color-card-grey"></div>
								)}
								<div className="div-card-info">
									<div className="div-name-type">
										<h3 className="font16-bold">
											{element.description}
										</h3>
										<h5 className="font12-regular">
											{element.type === "entrada"
												? "Entrada"
												: "Despesa"}
										</h5>
									</div>
									<h4 className="font12-regular">
										R$ {element.value},00
									</h4>
								</div>
								<button
									onClick={() =>
										deleteTransaction(element.description)
									}
								>
									<FaTrash />
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<>
					<p className="font22-bold text-grey-3">
						Você ainda não possui nenhum lançamento
					</p>

					<img src={NoCard} alt="" />
					<img src={NoCard} alt="" />
					<img src={NoCard} alt="" />
				</>
			)}
		</div>
	);
};

export default ListBox;
