import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://your-backend-url.com/bills";  // Replace with your deployed backend URL

function App() {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then((response) => {
            setBills(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Max L. Miller's Cosponsored Bills</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Congress</th>
                        <th>Type</th>
                        <th>Number</th>
                        <th>Latest Action</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((bill, index) => (
                        <tr key={index}>
                            <td>{bill.title}</td>
                            <td>{bill.congress}</td>
                            <td>{bill.bill_type}</td>
                            <td>{bill.bill_number}</td>
                            <td>{bill.latest_action}</td>
                            <td><a href={bill.url} target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
