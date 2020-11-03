import React from 'react'

const QuoteCard = ({ simpsonCharacter }) => {
    return (
        <div className="quote-card-container">
            <img
                src={simpsonCharacter.image}
                alt={simpsonCharacter.character}
                height='300px'
                width='200px'
            />
                <p><strong>Name:</strong> {simpsonCharacter.character}</p>
                <p><strong>Quote:</strong> {simpsonCharacter.quote}</p>
        </div>
    )
}

export default QuoteCard
