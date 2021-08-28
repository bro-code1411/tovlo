import React from 'react'
import TripList from './TripList';
import TripFilter from './TripFilter';
import { TripContext } from '../Context';
import Loading from './Loading'
import { useContext } from 'react';
const TripContainer = () => {
    const context = useContext(TripContext);
    const {loading, sortedTrips, trips} = context;
    
    if(loading){
        return <Loading/>;
    }
    return (
        <>
            Hello from rooms container
            <TripFilter trips={trips}/>
            <TripList trips={sortedTrips}/>
        </>
    )
}

export default TripContainer;
