import React from 'react'
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Container
} from 'semantic-ui-react'
import Header from './Header'

const starsOptions = [
  { key: '1', text: '1', value: 1 },
  { key: '2', text: '2', value: 2 },
  { key: '3', text: '3', value: 3 },
  { key: '4', text: '4', value: 4 },
  { key: '5', text: '5', value: 5 }
]

const CreateReview = () => (
  <React.Fragment>
    <Header />
    <Container>
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            options={starsOptions}
            label={{
              children: 'Stars',
              htmlFor: 'form-select-control-stars'
            }}
            placeholder="Enter Stars"
            search
            searchInput={{ id: 'form-select-control-stars' }}
          />
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Enter Review"
          placeholder="Enter Review"
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit Review"
        />
      </Form>
    </Container>
  </React.Fragment>
)

export default CreateReview
