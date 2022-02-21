import React from 'react';
import {сonfettiData} from "../../utils/constants/ConfettiData";
import Postcard from "../../components/Customizer/Cannon/Postcard";
import CustomizerLayout from "../../components/Layout/CustomizerLayout";

const Cannon = () => {
    return (
        <CustomizerLayout сonfettiData={сonfettiData} title="Boomb customizer">
            <Postcard />
        </CustomizerLayout>
    );
};

export default Cannon;