import React from "react";
import data from './cashJournalData.json'

export const CashJournal = () => {
    
    return (
        <div className="cash-journal-container">
            <div className="cash-journal-header">
                <h6 className="blue-color-text">Cash Details:</h6>
                <h3>Cash Journal</h3>
                <h5>Brokerage to Managed</h5>
            </div>
            <div>
                <table className="cash-journal-table">
                    <tr>
                        <td>
                            Case ID:
                        </td>
                        <td>
                           {data.caseID}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Case Type:
                        </td>
                        <td>
                        {data.caseType}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Source Account:
                        </td>
                        <td>
                        {data.sourceAccount}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Client:
                        </td>
                        <td>
                        {data.client}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Client ID
                        </td>
                        <td>
                        {data.clientID}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Group ID
                            </td>
                         <td>
                         {data.GroupID}
                            </td>   
                    </tr>
                    <tr>
                        <td>
                            Journal Date
                        </td>
                        <td>
                        {data.journalDate}
                        </td>
                    </tr>
                </table>
                <div>
                    <table className="CSU-table">
                        <tr>
                            <td>
                            CSU:
                            </td>
                            <td>
                                JOSE, JOJI
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Other Cases
                                </td>
                                <td>
                                   <a href="#csu">More</a> 
                                </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <table className="advisor-table">
                    <tr>
                            <td>
                            Advisor:
                            </td>
                            <td>
                                REEVS, JENNY
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Advisor Id
                            </td>
                            <td>
                                000123456
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Advisor Details
                            </td>
                            <td>
                                <a href="#advisor-details">More</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Other Cases
                                </td>
                                <td>
                                   <a href="#csu">More</a> 
                                </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CashJournal;