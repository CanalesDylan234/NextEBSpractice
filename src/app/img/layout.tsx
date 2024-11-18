import React from 'react'

type Props = {
    children: any
}

function layout({children}: Props) {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>{children}</div>
  )
}

export default layout