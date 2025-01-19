import React from 'react'

const ContainerResponsive = () => {
  return (
    <>
        <div className="bg-success container-sm">100% wide until small breakpoint</div>
        <div className="bg-danger container-md">100% wide until medium breakpoint</div>
        <div className="bg-warning container-lg">100% wide until large breakpoint</div>
        <div className="bg-info container-xl">100% wide until extra large breakpoint</div>
        <div className="bg-dark text-light container-xxl">100% wide until extra extra large breakpoint</div>
    </>
  )
}

export default ContainerResponsive