import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  height: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'green'
}

// let NewsItem = ({ article }) => (
// article ?
// <article style={articleStyle} >
//     {article && article.map((list,index) => {
//           return[
//               <div>
//             <h1>{list.id}</h1>
//             <h1>{list.name}</h1>
//             <h1>{list.email}</h1>
//             <h1>{list.address.street}</h1>
//             </div>
//         ]
//       })}
// </article> :
// null
// );
class NewsItem extends React.Component {
  render() {
      console.log(this.props.article)
    return (
      <div>
        {this.props.article && 
        this.props.article.map((list,index) => {
            return[
                <div>
                    <h1>{list.name}</h1>
                </div>
            ]
        })}
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
article: state.news
})

NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;