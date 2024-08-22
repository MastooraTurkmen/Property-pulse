'use client'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: '100px auto',
}

const LoadingPage = ({loading}) => {
  return (
      <div>
            <ClipLoader
            color='#3b82f6'
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
          />

          
    </div>
  )
}

export default LoadingPage