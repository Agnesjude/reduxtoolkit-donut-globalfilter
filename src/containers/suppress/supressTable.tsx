import react from "react";
import "./suppressTable.css";

export const suppressTable = () => {
    return (
        <div className="suppress">
                <h4>
                    Suppress or Postpone an Alert:
                </h4>
                <div className="suppress-table-content">
                    <div className="suppress-table">
                        <div  className="suppress-table-row">
                            <div className="suppress-table-label">
                            <p>Item:</p>
                            </div>
                            <div className="suppress-table-input">
                            <select name="cars">
                                <option value="volvo">Volvo</option>
                            </select>
                            </div>
                            <div className="supress-table-input-info">
                            <p>only one at a time can be selected</p> 
                            </div>
                        </div>
                        <div  className="suppress-table-row">
                            <div className="suppress-table-label">
                            <p>Item:</p>
                            </div>
                            <div className="suppress-table-input">
                            <select name="cars">
                                <option value="volvo">Volvo</option>
                            </select>
                            </div>
                            <div className="supress-table-input-info">
                            <p>only one at a time can be selected</p> 
                            </div>
                        </div>
                    </div>
                    <div className="suppress-div-content">
                        <h4>Download links</h4>
                        <li>Account file This will provide a sample file users to create file</li>
                    </div>
            </div>
        </div>
    )
}

export default suppressTable;