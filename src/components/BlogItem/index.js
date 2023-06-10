import './index.css'

import {Link} from 'react-router-dom'

const Items = props => {
  const {Item} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = Item

  return (
    <Link className="route list2" to={`/blogs/${id}`}>
      <div>
        <div className="con1">
          <img src={imageUrl} className="img1" alt="img1" />
          <div className="con3">
            <p className="para1">{topic}</p>
            <h1 className="head1">{title}</h1>
            <div className="con">
              <img src={avatarUrl} className="size" alt="img" />
              <p className="para">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Items
