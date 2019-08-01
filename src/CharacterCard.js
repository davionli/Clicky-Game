import React from 'react'

export default function CharacterCard(props) {
    return (
        <div className="card mt-4" style={{margin: "auto"}} onClick={() =>props.click(props.id)}>
            <img src={props.image} data-id={props.id} className="card-img-top" style={{width: "14vw"}} alt="..."/>
        </div>
    )
}
