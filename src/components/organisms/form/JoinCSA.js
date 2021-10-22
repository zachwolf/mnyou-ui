import React, { useReducer, useState } from 'react'
import axios from 'axios'

import Input from '@atoms/Input'

function JoinCSA (props) {
  const [hasFailedSend, setHasFailedSend] = useState(false)
  const [form, dispatch] = useReducer(reducer, INIT_STATE)

  const onChange = key => value => {
    dispatch({
      key,
      value,
    })
  }

  function submit (e) {
    try {
      e.preventDefault()
      console.log('submit')
    } catch (err) {
      setHasFailedSend(true)
    }
  }

  return (
    <div>
      <form name="Join CSA" method="POST" data-netlify="true" onSubmit={submit}>
        <Input
          autocomplete="name"
          type="text"
          id="fullname"
          label="Full Name"
          onChange={onChange('name')}
          value={form.name.value}
        />
        <Input
          autocomplete="name"
          type="text"
          id="fullname"
          label="Full Name"
          onChange={onChange('name')}
          value={form.name.value}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default JoinCSA

const INIT_STATE = {
  name: {
    value: '',
    invalid: false,
  },
  // address: {},
  // phone: {},
  // email: {},
  // refer: {},
  // subscription: {},
  // eggs: {},
  // location: {},
  // contactMethod: {},
}

function reducer (state, { key, value }) {
  return {
    ...state,
    [key]: {
      value,
      invalid: false,
    },
  }
}
