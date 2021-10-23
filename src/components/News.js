import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  apikey = "c90313c35bd8440eac537d5d7455ff5e"
  static defaultProps = {
    country: 'in',
    pagesize: 8
  }


  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number
  }
  constructor() {
    super();
    console.log("hey i am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    }
  }

  async componentDidMount() {
    console.log("csdm")
    let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apikey=${this.apikey}&page=1&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })



  }
  handlePrevclick = async () => {
    console.log("PREVIOUS")

    let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apikey=${this.apikey}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ loading: false })
    console.log(parsedData)
    this.setState({ articles: parsedData.articles })

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextclick = async () => {

    console.log("next")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {


    }
    else {


      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
      this.setState({ loading: true })
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({ loading: false })

      console.log(parsedData)
      this.setState({ articles: parsedData.articles })

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })

    }
  }
  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2 className="container" style={{marginTop : "90px"}}><center>News Monkiee Top Headlines</center></h2>
        { this.state.loading && <Spinner/>}
        <div className="row">


          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 45) : ""} imageurl={element.urlToImage} description={element.description ? element.description.slice(0, 200) : ""} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

            </div>
          })}



        </div>

           
        { <div className="container d-flex justify-content-between">

               <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr;Previous</button>
               <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>

               </div> }
      </div>
    )
  }
}
