import { useSelector } from "react-redux";

import './DiceResult.css'

function DiceResult() {
    const diceRoll = useSelector(store => store.diceRoll);

    return <>
        <hr/>
        <div className="dice-container">
            <div>
                <p>Roll Result:{diceRoll && <>
                    <span className="large">{diceRoll.sum}</span>
                    {diceRoll.diceArray.map(die => <>{die}+</>)}
                    {diceRoll.bonus}
                    <span className="roll-label">{diceRoll.label}</span>
                    {diceRoll.wildDieFlag && <>Wild Die of <span className="wild-die">1</span></>}
                </>}</p>
            </div>
            <div>
                <p>Add roll buttons here</p>
            </div>
        </div>
        <hr/>
    </>;
}

export default DiceResult;