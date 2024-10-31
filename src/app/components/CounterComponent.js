import React, {useEffect, useState} from "react";
import counterApi from "../../api/counterApi";
import "./CounterComponent.css"

function CounterComponent({userName}) {
    const [userCount, setUserCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    function useCounter(userName) {
        useEffect(() => {
            async function fetchCounter() {
                const data = await counterApi.getCounter(userName);
                setUserCount(data.user_counter);
                setTotalCount(data.total_counter);
            }
            fetchCounter();
        }, [userName]);
    }

    function CountFields() {
        useCounter(userName);
        return (
            <>
                <table className="kliksTable">
                    <tbody>
                    <tr>
                        <td className="userCountLabel">Your KLiK count</td>
                        <td className="userCount">{userCount}</td>
                    </tr>
                    <tr>
                        <td className="totalCountLabel">Total KLiK count</td>
                        <td className="totalCount">{totalCount}</td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }

    async function incrementCounter() {
        const data = await counterApi.incrementCounter(userName);
        setUserCount(data.user_counter);
        setTotalCount(data.total_counter);
    }

    return (
        <>
            <button onClick={incrementCounter}>
                KLiK
            </button>
            <CountFields/>
        </>
    );
}

export default CounterComponent;