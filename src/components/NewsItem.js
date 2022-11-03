import React from 'react'            // React, { Component }    <-----------usin class based component


// export class NewsItem extends Component {            <-----------usin class based component

const NewsItem = (props)=>{
    // render() {               <-----------usin class based component
        let { title, description, imageUrl, newsUrl, author, date, source } = props;          //    this.props;        <-----------usin class based component
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{
                        dsplay: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>

                    <span className=" badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://img-cdn.tnwcdn.com/image/shift?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F07%2FUntitled-design-2022-07-07T164852.000.png&signature=45fba4dd850b68c113788c7b6550430e" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    // }                <-----------usin class based component
}

export default NewsItem
