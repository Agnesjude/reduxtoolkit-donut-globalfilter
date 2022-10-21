import React from "react";
import './assetJournalHome.css';
import CashJournal from './cashJournal';
import WorkFlowStatus from "./workFlowStatus";

export const AssetJournal = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="item1">
                    <CashJournal/>
                </div>
                <div className="item2">
                    <WorkFlowStatus/>
                </div>
                <div className="item3">3</div>
                <div className="item4">4</div>
                <div className="item5">5</div>
                <div className="item6">6</div>
            </div>
        </div>
    )
}

export default AssetJournal;