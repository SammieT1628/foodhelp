import { useState } from "react";

interface Props {
    data: {
        Name: string,
        Username: string,
        eMail: string,
        'Phone Number': string
    };
    heading: string;
    onSelectItem: (item: string) => void;

}

function ListGroup({data, heading, onSelectItem}: Props) {
    return (
    <>
        <ul>
        {Object.entries(data).map(([key,value])=>{
        return (<li className="">{key} : {value.toString()}</li>)})}
        </ul>
    </>
    )
}

export default ListGroup;