import React , { useState } from "react";
import { TableOfContents32 } from '@carbon/icons-react';
import { Modal, DataTable } from 'carbon-components-react';
import PatternAdoptionTable from "./PatternAdoptionTable";
import { modalTheme, modalIcon} from "./PatternAdoptionModal.module.scss";

const PatterAdoptionModal = () => {
    const [isOpen, setIsOpen] = useState(false);  
    const modalTitle = "Pattern Adoption Data";
    const modalLabel = "Tabular representation";

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsOpen(!isOpen)
        }
    }

    return (
        <>
            <div className={modalIcon}>
                <TableOfContents32 role="button" aria-label={modalTitle} tabIndex="0" onClick={() => setIsOpen(!isOpen)} onKeyDown={handleKeyDown}></TableOfContents32>
                <Modal 
                    className={modalTheme}
                    modalHeading={modalTitle}
                    modalLabel={modalLabel}
                    passiveModal
                    open={isOpen}
                    onRequestClose={() => setIsOpen(!isOpen)}>
                    <PatternAdoptionTable title={modalTitle}/> 
                </Modal> 
            </div>
        </>
    );   
}

export default PatterAdoptionModal;