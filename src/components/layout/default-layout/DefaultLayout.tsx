import style from "./DefaultLayout.module.css";

interface DefaultLayoutProps {
	children: React.ReactNode;
}
export default function DefaultLayout(props: DefaultLayoutProps) {
	return <div className={style.container}>{props.children}</div>;
}
