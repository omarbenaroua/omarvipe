

function loading() {
  return (
    <div className="flex justify-center p-10 m-10 sm:p-5 sm:m-5">
      <div
        className="text-primary inline-block h-[130px] w-[130px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
    </div>
  )
}

export default loading