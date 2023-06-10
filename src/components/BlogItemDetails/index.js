import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogDetails extends Component {
  state = {
    details: {},
    status: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const obj1 = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }

    this.setState({details: obj1, status: false})
  }

  render() {
    const {details, status} = this.state
    const {author, avatarUrl, content, imageUrl, title} = details

    return (
      <div className="con8">
        <h1>{title}</h1>
        <div className="con10">
          <div>
            <div className="con7">
              <img src={avatarUrl} className="size" alt="img4" />
              <p className="para">{author}</p>
            </div>
            <img src={imageUrl} className="img5" alt={title} />
            <p className="content">{content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogDetails
