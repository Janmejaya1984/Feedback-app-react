import React, { useState } from 'react'
import Card from './Card'

function FeedbackItem({item}) {
   // const [rating,setRating] = useState(7)
   // const [text,setText] = useState("This is an example of a feedback item")
    
  return (
    <Card reverse={false}>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
        
    </Card>
  )
}

export default FeedbackItem