import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';

function RollHistory() {
    const dispatch = useDispatch();
    const rollHistory = useSelector(store => store.rollHistory);

    const displayHistory = () => {
        return <>{rollHistory.map((roll, index) => <div key={index}>
            <p>Roll Result: <span className="large">{roll.sum}</span> {roll.diceArray.map((die, innerIndex) => <span key={innerIndex}>{die}+</span>)}
            {roll.bonus}
            <span className="roll-label">{roll.label}</span>
            {roll.wildDieFlag && <>Wild Die of <span className="wild-die">1</span></>}
            </p>
        </div>)}
        <div className="centering-div">
            <Button onClick={()=>dispatch({type: 'CLEAR_ROLLS'})}>Clear History</Button>
        </div>
        </>;
    }

    return <>{rollHistory.length > 0 ? displayHistory() : <p>No rolls to display.</p>}</>;
}

export default RollHistory;