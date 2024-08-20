import React, { Component } from 'react'
import savedPosts from '../posts.json'
import PostItem from './PostItem'
import css from './css/Content.module.css'

export class Content extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount() {
        this.setState({ posts: savedPosts.savedPosts })
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = this.state.posts.filter(aname => {
            return aname.name.toLowerCase().includes(name)
        })
        console.log(this.state.posts.length)
        this.setState({ posts: filteredPosts })
    }
    
  render() {
    return (
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
            <label htmlFor='searchInput'>Search: </label>
            <input type='search' id='searchInput' placeholder='By Author' name='searchbox' onChange={this.handleChange} />
            <h4>Posts found: {this.state.posts.length}</h4>
        </form>
        <PostItem posts={this.state.posts} />
      </div>
    )
  }
}

export default Content
