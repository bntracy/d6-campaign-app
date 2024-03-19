import { useSelector } from 'react-redux';

function RollHistory() {
    const rollHistory = useSelector(store => store.rollHistory);

    return <>{JSON.stringify(rollHistory)}</>;
}

export default RollHistory;