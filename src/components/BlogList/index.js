// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import Items from '../BlogItem'

class BlogList extends Component {
  state = {
    blogsList: [],
    status: true,
  }

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const list = await response.json()
    const formattedData = list.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    console.log(formattedData)
    this.setState({blogsList: formattedData, status: false})
  }

  render() {
    const {blogsList, status} = this.state

    return (
      <div className="list1">
        {status ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(each => <Items key={each.id} Item={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
