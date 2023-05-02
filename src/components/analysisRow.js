export default function AnalysisRow(props) {
  return (
    <>
      <div className="flex flex-row">
        <span className="mr-2">{props.text}</span>
        <span className="text-bold mr-2">{props.sentiment}</span>
        <button
          className="btn btn-ghost btn-sm rounded-btn"
          onClick={() => props.delete(props.id)}
        >
          <span className="text-xl">x</span>
        </button>
      </div>
    </>
  );
}
