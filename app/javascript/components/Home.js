import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CarouselImages from './CarouselImages';

class Home extends React.Component{
    constructor(props) {
       super(props);
       this.state = {
         articles: []
       };
    }

    componentDidMount() {
        axios.get('/articles.json')
        .then(data => {
            let sumData = [];
            data.data.data.map(data=>{
                sumData.push(data)
            })
            this.setState({articles: [...sumData]})
        })
        console.log('admin credentials \n password: password \n email: admin@example.com')
    }

    render(){            
        return(
            <div>
                {/* <CarouselImages /> */}
                <h1>SOME</h1>                
                {this.state.articles.map(article=>(
                    <li key={article.id}>{article.title}</li>
                ))}
            <Link to="/content">Go to Content</Link>
            </div>
        );
    }
}

export default Home;