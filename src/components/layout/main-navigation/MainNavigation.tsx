import style from "./MainNavigation.module.css";

export default function MainNavigation() {
	return (
		<div className={style.navContainer}>
			<nav className={style.nav}>
				<img
					className={style.navImg}
					src='assets/images/globe.svg'
					alt='Globe Icon'
				/>
				<h4 className={style.navTitle}>Sun, Sea &amp; Sand journal.</h4>
			</nav>
		</div>
	);
}
