import React, {useEffect, useState} from "react";
import counterApi from "../../api/counterApi";
import "./CounterComponent.css"

function CounterComponent({userName}) {
    const [userCount, setUserCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCounter() {
            try {
                console.log("CounterComponent fetchCounter()");
                const data = await counterApi.getCounter(userName);
                setUserCount(data.user_counter);
                setTotalCount(data.total_counter);
            } finally {
                setLoading(false);
            }
        }
        fetchCounter();
    }, []);

    function CountFields() {
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

    async function incrementCounter(){
        try {
            setLoading(true);
            const data = await counterApi.incrementCounter(userName);
            setUserCount(data.user_counter);
            setTotalCount(data.total_counter);
        } finally {
            setLoading(false)
        }
     }

    return (
        <>
            <button className="klikButton" disabled={loading} onClick={incrementCounter}>
                {loading ? "Loading..." : "KLiK"}
            </button>
            <CountFields/>
        </>
    );
}

export default CounterComponent;