import React from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from "../components/Header"



const Artwork: React.FC = (props) => {
  // let navigate = useNavigate()
  // let { title } = useParams();
  const location = useLocation() as any

  const state = location.state
  const { data } = state;
  // const { data } = location.state as CustomizedState;
  console.log(data)
  return (
    <>
      <Header />
      {/* <button onClick={() => { navigate("/about") }}> Change to about page</button> */}
    </>
  )
}

export default Artwork
