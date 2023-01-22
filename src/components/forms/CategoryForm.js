import React from 'react'

const CategoryForm = ({
    value,
    setValue,
    handelSubmit,
    buttonText = "Submit",
    handelDelete
}) => {
  return (
    <div>
      <form>
        <input/>

        <div>
            <button className="btn btn-danger mt-3">{buttonText}</button>
            {handelDelete && (
            <button onClick={handelDelete} className="btn btn-danger mt-3">Delete</button>
            )}
            
        </div>
      </form>
    </div>
  )
}

export default CategoryForm
