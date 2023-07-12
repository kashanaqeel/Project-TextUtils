import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <label for="box" className="form-label">example textarea</label>
    <textarea className="form-control" id="box" rows="3"></textarea>
  </div>
  </div>
  )
}
