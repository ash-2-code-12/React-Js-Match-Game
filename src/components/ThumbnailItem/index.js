import './index.css'

const ThumbnailItem = props => {
  const {imgObj, selectThumbnail} = props
  const {id, thumbnailUrl} = imgObj
  const onSelectThumbnail = () => {
    selectThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        onClick={onSelectThumbnail}
        className="thumbnail-btn"
        type="button"
      >
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
