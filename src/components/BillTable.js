import React from "react";

const BillTable = ({ bills }) => {
    return (
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
                {bills.length === 0 ? (
                    <tr>
                        <td colSpan="6">No bills found</td>
                    </tr>
                ) : (
                    bills.map((bill, index) => (
                        <tr key={index}>
                            <td>{bill.title}</td>
                            <td>{bill.congress}</td>
                            <td>{bill.bill_type}</td>
                            <td>{bill.bill_number}</td>
                            <td>{bill.latest_action}</td>
                            <td><a href={bill.url} target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default BillTable;
