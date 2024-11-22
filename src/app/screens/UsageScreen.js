import './UsageScreen.css'
import React, {useEffect, useState} from "react";
import counterApi from "../../api/counterApi";

// Column Definitions: Defines & controls grid columns.
const colDefs= [
    { field: 'USER_ID', name: 'User' },
    { field: 'CLICK_COUNT', name: 'Clicks' },
    { field: 'UPDATED_AT', name: 'Last Click' },
];


function UsageScreen() {
    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, []);

    function loadData() {
        async function fetchCounter() {
            setLoading(true);
            const data = await counterApi.getAllCounters();
            setRowData(data);
            setLoading(false);
        }
        fetchCounter();
    }

    const tableHeaders = colDefs.map(colDef =>
       <th key={colDef.name}>{colDef.name}</th>
    );

    const tableRows = rowData.map(row =>
        <tr key={row['USER_ID']}>
            {colDefs.map(colDef =>
              <td key={row[colDef.field]}>{row[colDef.field]}</td>
            )}
        </tr>
    );

    return (
        <div className="usageContainer">
            <button className="refreshButton" disabled={loading} onClick={loadData}>{loading ? "Loading..." : "Refresh"}</button>
            <table className="usageTable">
                <thead>
                <tr>
                    {tableHeaders}
                </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        </div>
    )
}

export default UsageScreen;