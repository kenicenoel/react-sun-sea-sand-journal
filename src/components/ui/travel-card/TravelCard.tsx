import style from "./TravelCard.module.css";
interface TravelCardProps {
	title: string;
	location: string;
	mapsUrl: string;
	startDate: string;
	endDate: string;
	description: string;
	imageUrl: string;
}
export default function TravelCard(props: TravelCardProps) {
	console.table(props);
	return (
		<div className={style.card}>
			<div className={style.wrapper}>
				<div className={style.cardImageWrapper}>
					<img
						className={style.cardImg}
						src='assets/images/grand_anse_beach.jpg'
						alt='Location '
					/>
				</div>
				<div className={style.cardContent}>
					<div className={style.locationWrapper}>
						<img
							className={style.mapPinImage}
							src='assets/images/map_pin.svg'
							alt='Map Pin Icon'
						/>
						<span className={style.locationName}>{props.location}</span>

						<a className={style.link} href='#'>
							View on Google Maps
						</a>
					</div>
					<h1 className={style.cardTitle}>{props.title}</h1>
					<p className={style.dates}>
						<span>{props.startDate} - </span>
						<span>{props.endDate}</span>
					</p>
					<p className={style.description}>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
