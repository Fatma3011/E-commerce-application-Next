import React from 'react'
import { useRouter } from 'next/router'

//this example with ...slug is called catch-All routes
export default function NestedComp() {
    const router = useRouter();
    console.log(router.query);
  return (
    <div>nestedComp</div>
  )
}
