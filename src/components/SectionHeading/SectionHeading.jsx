import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from 'react'

const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className="text-center pt-4 pb-10">
            <h2 className="font-bold text-4xl text-gradient">{heading}</h2>
            <p className="text-purple-500 mt-4 max-w-xl mx-auto">{subHeading}</p>
        </div>
    )
}

SectionHeading.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
}

export default SectionHeading