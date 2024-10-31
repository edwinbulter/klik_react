import './ClicksPerUserScreen.css'
import React, {useEffect, useState} from "react";
import counterApi from "../../api/counterApi";

// Column Definitions: Defines & controls grid columns.
const colDefs= [
    { field: 'USER_ID', name: 'User' },
    { field: 'CLICK_COUNT', name: 'Clicks' },
    { field: 'UPDATED_AT', name: 'Last Click' },
];


function ClicksPerUserScreen() {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        async function fetchCounter() {
            const data = await counterApi.getAllCounters();
            setRowData(data);
        }
        fetchCounter();
    }, []);

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
        <div className="cpuContainer">
            <table>
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

export default ClicksPerUserScreen;