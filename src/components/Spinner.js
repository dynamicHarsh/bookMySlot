import React from 'react'
import {PulseLoader} from 'react-spinners'
const Spinner = () => {
  return (
    <div class="d-flex justify-content-center spinner">
  {/* <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div> */}
  
<PulseLoader color="#36d7b7" />
</div>
  )
}

export default Spinner