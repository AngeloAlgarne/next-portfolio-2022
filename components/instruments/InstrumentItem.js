import { useRouter } from "next/router";
import Card from "../ui/Card";
import Image from "next/image";
import classes from "./InstrumentItem.module.css";
import { useState } from "react";

function InstrumentItem(props) {
	const router = useRouter();
	// const [showModal, setShowModal] = useState(false);

	function showDetailsHandler() {
		// setShowModal(true);
		router.push('/'+props.id)
	}


	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<Image
						src={props.image}
						alt={props.title}
						width="500"
						height="500"
					/>
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
				</div>
				<div className={classes.actions}>
					<button onClick={showDetailsHandler}>Show Details</button>
				</div>
			</Card>
		</li>
	);
}

export default InstrumentItem;
