import './index.css'

const EachCategory = (props) => {
  const {eachCategory} = props
  const {image,title,description} = eachCategory  
  return (
    <div className='border-slate-300 border-solid border-2 rounded-2xl h-[250px] w-[400px] gap-2 flex flex-col items-center justify-center text-center'>
      {title === "Getting Started" && (
        <button type="button" className='relative left-[173.5px] bottom-[17px] bg-blue-500 text-white py-1 px-2 border-top-right-radius-[16px] rounded-bottom-left rounded-top-right'>New</button>
      )}
      <img src={image} className='h-[90px] w-[100px]' alt={title} />  
      <h1 className='font-extrabold'>{title}</h1>
      <p className='font-light'>{description}</p>
    </div>
  )
}

export default EachCategory
