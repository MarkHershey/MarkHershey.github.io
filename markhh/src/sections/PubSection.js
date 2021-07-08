import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Paper from "../components/Paper"

const PubSection = () => {
    return (
        <div className="mt-5 p-4 container bg-white shadow-sm" style={{maxWidth: 720, borderRadius: 10}}>
            <SectionTitle title="Publications"/>
            <Paper />
        </div>
    )
}

export default PubSection
