// Style Imports
import "./styles.css";

// React Imports
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
	const [description, setDescription] = useState("");
	const [value, setValue] = useState("");
	const [type, setType] = useState("entrada");

	const getDescription = (event) => {
		setDescription(event.target.value);
	};

	const getValue = (event) => {
		setValue(event.target.value);
	};

	const getType = (event) => {
		setType(event.target.value);
	};

	const createTransaction = (event) => {
		event.preventDefault();

		const transactionPos = {
			description: description,
			type: type,
			value: Number(value),
		};

		const transactionNeg = {
			description: description,
			type: type,
			value: -value,
		};

		type === "entrada"
			? setListTransactions([...listTransactions, transactionPos])
			: setListTransactions([...listTransactions, transactionNeg]);

		setDescription("");
		setValue("");
	};

	return (
		<form onSubmit={createTransaction} className="Form">
			<div className="div-description-input">
				<label htmlFor="description">Descrição</label>
				<input
					onChange={getDescription}
					type="text"
					value={description}
					placeholder="Digite aqui sua descrição..."
					required
				/>
				<p className="font12-regular text-grey-3">
					Ex: Compra de roupas
				</p>
			</div>

			<div className="div-value-and-type">
				<div className="div-value-input">
					<label htmlFor="value">Valor</label>
					<input
						onChange={getValue}
						type="number"
						value={value}
						placeholder="Insira o valor..."
						required
					/>
				</div>

				<div className="div-type-of-value-select">
					<label htmlFor="type-of-value">Tipo de valor</label>
					<select onChange={getType}>
						<option value="entrada">Entrada</option>
						<option value="despesa">Despesa</option>
					</select>
				</div>
			</div>

			<button type="submit" className="buttons-default">
				Inserir Valor
			</button>
		</form>
	);
};

export default Form;
