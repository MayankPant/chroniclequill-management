import React from "react";
import SelectedServiceContext from "../context/SelectedServiceContext";

interface PropType {
    children: React.ReactElement
}

const SelectedServiceProvider = (props: PropType) => {
    const [selectedService, setSelectedService] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [lines, setLines] = React.useState('');

    return (
        <SelectedServiceContext.Provider value={{selectedService, level, lines, setSelectedService, setLevel, setLines}}>
            {props.children}
        </SelectedServiceContext.Provider>
    )

}
export default SelectedServiceProvider;