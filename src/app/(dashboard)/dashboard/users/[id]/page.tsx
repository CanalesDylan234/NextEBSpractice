import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    // Await params if necessary (for example, in a server-side data fetching scenario)
    const { id } = params;
  
    return (
      <h1 className='text-3xl'>User Profile: {id}</h1>
    )
  }
  
  export default page
  