
interface Proms {
    searches: string[];
    query: (term: string) => void;
}

export const PreviousSearches = ({searches, query }: Proms) => {
  return (
    <div className="previous-searches">
        <h2>Previous searches</h2>
        <ul className="previous-searches-list">
            {searches.map(item => (<li key={item} onClick={() => query(item)}>{item}</li>))}
        </ul>
    </div>
  );
}
