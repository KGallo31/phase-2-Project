import React from 'react'
import { Card, Button} from "semantic-ui-react";


function Review({review,deleteReview}) {

  const extra = `Reviewed ${review.game}`
  const meta = `${review.rating} out of 5`
  const button = <Button>Button</Button>

  return (
    <div>
      <Card>
      <Card.Content>
        <Card.Header>{review.name}</Card.Header>
        <Card.Meta>{meta}
        </Card.Meta>
        <Card.Description>
          {review.review}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>{extra}</Card.Content>
          <Card.Content extra>
          <Button onClick={() => deleteReview(review)} basic color='grey'>
            🗑 
          </Button>
          </Card.Content>
      </Card>
    </div>
  )
}

export default Review