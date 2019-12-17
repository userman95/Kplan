import React from 'react';
import axios from 'axios';

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
            this.setState({articles: sumData})
        })
    }

    render(){            
        return(
            <div>
                <h1>SOME</h1>                
                {this.state.articles.map(article=>(
                    <li key={article.id}>{article.title}</li>
                ))}
            </div>
        );
    }
}

export default Home;