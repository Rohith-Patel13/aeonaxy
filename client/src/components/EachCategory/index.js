import './index.css'

const EachCategory = (props) => {
  const {eachCategory} = props
  const {image,title,description} = eachCategory  
  return (
    <div className='w-[450px] gap-2 flex flex-col items-center justify-center text-center'>
      <img src={image} className='h-[90px] w-[100px]' alt={title} />  
      <h1 className='font-extrabold'>{title}</h1>
      <p className='font-light'>{description}</p>
    </div>
  )
}

export default EachCategory
