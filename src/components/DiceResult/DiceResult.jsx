import { useSelector } from "react-redux";

import './DiceResult.css'

function DiceResult() {
    const diceRoll = useSelector(store => store.diceRoll);

    return <>
        <hr/>
        <p>Roll Result:{diceRoll && <>
            <span className="large">{diceRoll.sum}</span>
            {diceRoll.diceArray.map(die => <>{die}+</>)}
            {diceRoll.bonus}
            <span className="roll-label">{diceRoll.label}</span>
        </>}</p>
        <hr/>
    </>;
}

export default DiceResult;