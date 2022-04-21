

const EventItems= (props) => {

    return props.events.map((events, index)=>( 

        <tr key={index}>
            <td>{events.artist}</td>
            <td>{events.location}</td>
            <td>{events.info}</td>
            <td>{events.price}</td>
        </tr>            

    ))

}

export default EventItems;