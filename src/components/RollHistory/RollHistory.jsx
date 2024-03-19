import { useSelector } from 'react-redux';

function RollHistory() {
    const rollHistory = useSelector(store => store.rollHistory);

    const displayHistory = () => {
        return <>{rollHistory.map((roll, index) => <div key={index}>
            <p>Roll Result: <span className="large">{roll.sum}</span> {roll.diceArray.map((die, innerIndex) => <span key={innerIndex}>{die}+</span>)}
            {roll.bonus}
            <span className="roll-label">{roll.label}</span>
            {roll.wildDieFlag && <>Wild Die of <span className="wild-die">1</span></>}
            </p>
        </div>)}</>;
    }

    return <>{rollHistory.length > 0 ? displayHistory() : <p>No rolls to display.</p>}</>;
}

export default RollHistory;