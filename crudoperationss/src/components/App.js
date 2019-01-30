import React  from 'react';
import Button from '../containers/Button.js';
import NewsItem from '../containers/NewsItem.js'
import Loading from '../containers/Loading.js'

let App = () => (
  <div>
     <Button />
     <Loading />
     <NewsItem >
     </NewsItem>
  </div>
);
export default App;