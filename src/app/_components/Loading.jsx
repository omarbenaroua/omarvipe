

function loading() {
  return (
    <div className="flex justify-center p-10 m-10">
      <div
        className="text-primary inline-block h-[200px] w-[200px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
    </div>
  )
}

export default loading