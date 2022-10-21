import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const WorkFlowStatus = () => {
    return (
        <div>
            <div className="flex-row blue-color-text">
                <span className="asset-joiurnal-header-icon">
                    <FontAwesomeIcon icon={faPlusCircle} />
                </span>
                <h2>Workflow Status</h2>
            </div>
            <div className="breadcrumb flat">
                <a href="#" className="active">
                    <span className="workflow-nav-items-icon">
                        <FontAwesomeIcon icon={faPlusCircle} /></span>
                    <span>New</span>
                </a>
                <a href="#">
                    <span className="workflow-nav-items-icon">
                        <FontAwesomeIcon icon={faPlusCircle} /></span>
                    <span>COMP SENT</span>
                </a>
                <a href="#">
                    <span className="workflow-nav-items-icon">
                        <FontAwesomeIcon icon={faPlusCircle} /></span>
                    <span>COMP SENT</span>
                </a>
                <a href="#">
                    <span className="workflow-nav-items-icon">
                        <FontAwesomeIcon icon={faPlusCircle} /></span>
                    <span>COMP SENT</span>
                </a>
                <a href="#">
                    <span className="workflow-nav-items-icon">
                        <FontAwesomeIcon icon={faPlusCircle} /></span>
                    <span>COMP SENT</span>
                </a>
                <a href="#">
                    <span className="workflow-nav-items-icon">
                        <FontAwesomeIcon icon={faPlusCircle} /></span>
                    <span>COMP SENT</span>
                </a>
            </div>
        </div>
    )
}

export default WorkFlowStatus;