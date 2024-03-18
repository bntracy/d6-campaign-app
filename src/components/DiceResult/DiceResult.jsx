import { useSelector } from "react-redux";

function DiceResult() {
    const diceRoll = useSelector(store => store.diceRoll);

    return <>
        <hr/>
        <p>Roll Result:{JSON.stringify(diceRoll)}</p>
        <hr/>
    </>;
}

export default DiceResult;