import style from "./App.css";
import data from "./assets/static/data";
import TravelCard from "./components/ui/travel-card/TravelCard";

interface JournalEntry {
	title: string;
	location: string;
	mapsUrl: string;
	startDate: string;
	endDate: string;
	description: string;
	imageUrl: string;
}
function App() {
	let journalEntries: JournalEntry[] = data;

	return (
		<div className={style.cards}>
			{journalEntries.map((entry) => {
				return (
					<div>
						<TravelCard
							title={entry.title}
							location={entry.location}
							mapsUrl={entry.mapsUrl}
							startDate={entry.startDate}
							endDate={entry.endDate}
							description={entry.description}
							imageUrl={entry.imageUrl}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default App;
