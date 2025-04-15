import React, { useState } from 'react';
import MasterOption from './MasterOption/MasterOption';
import MasterLink from './MasterLink/MasterLink';
import JuniorMasterImg from "../../../../assets/images/Masters/JuniorMaster.png"
import MasterImg from "../../../../assets/images/Masters/Master.png";
import HeadMasterImg from "../../../../assets/images/Masters/HeadMaster.png";
import TopMasterImg from "../../../../assets/images/Masters/TopMaster.png";

export default function MastersKinds() {
    const [activeMaster, setActiveMaster] = useState(0);

    const handleButtonClick = (index) => {
        setActiveMaster(index);
    };

    return (
        <div className="master_kinds">
            <ul className='master_kinds_navbar'>
                <MasterLink handleButtonClick={handleButtonClick} activeMaster={activeMaster} text={"Junior Master"} equals={0} num={1} />
                <MasterLink handleButtonClick={handleButtonClick} activeMaster={activeMaster} text={"Master"} equals={1} num={2} />
                <MasterLink handleButtonClick={handleButtonClick} activeMaster={activeMaster} text={"Head Master"} equals={2} num={3} />
                <MasterLink handleButtonClick={handleButtonClick} activeMaster={activeMaster} text={"Top Master"} equals={3} num={4} />
            </ul>


            <MasterOption title={"Junior Master"} suptitle={"A master who has passed exams according to company standards and confirmed that he is ready to take a shift"} foto={JuniorMasterImg} activeMaster={activeMaster} equals={0} />
            <MasterOption title={"Master"} suptitle={"A master who has honed his craft and reduced cutting time to 60 minutes"} foto={MasterImg} activeMaster={activeMaster} equals={1} />
            <MasterOption title={"Head Master"} suptitle={"A hairdresser who provides a wider range of services and reduces haircut time to 45 minutes"} foto={HeadMasterImg} activeMaster={activeMaster} equals={2} />
            <MasterOption title={"Top Master"} suptitle={"A master with the highest level of skill. Capable of providing all company services"} foto={TopMasterImg} activeMaster={activeMaster} equals={3} />


        </div>
    )
}
