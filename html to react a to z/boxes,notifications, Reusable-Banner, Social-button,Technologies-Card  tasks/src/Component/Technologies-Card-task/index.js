import './index.css'

const CardItem = props => {
  const {details} = props
  const {title, description, className, imgUrl} = details
  return (
    <li className={`${className} bg-card`}>
      <div className="description-conatiner">
        <h1 className="title">{title}</h1>
        <p className="course-description">{description}</p>
      </div>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
