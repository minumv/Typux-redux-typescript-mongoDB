import { Link } from "react-router-dom"

export const SignUp = () => {
  return (
    <>
      <form>
        <label>SignUp</label>
        <div className="flex">
          <label>Name:</label>
          <input 
            type='text' 
            className="border"
          />
        </div>
        <div className="flex">
          <label>Username:</label>
          <input 
            type='text' 
            className="border"
          />
        </div>
        <div className="flex">
          <label>Password:</label>
          <input
            type='password'
            className="border"
          />
        </div>
        <div className="flex">
          <button
            className="border"
          >
              SignUp
          </button>
        </div>
        <div className="flex">
          <h6>Already a member? <span className="text-blue-700 cursor-pointer"><Link to='/login'>Login</Link></span></h6>
        </div>
      </form>
    </>
  )
}
