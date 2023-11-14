import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`banner ${className}`}>
      <h1 className="main-heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button type="button" className="btn">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
