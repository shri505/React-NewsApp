import React, { useEffect, useState, useCallback } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';

const News = ({ country = 'us', category = 'sports', pageSize = 10 }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = category;
    }, [category]);

    const updateNews = useCallback(async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=83bf36c01fe34951a2d358d3b81c5af8&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let parsedData = await response.json();
            setArticles(parsedData.articles || []);
        } catch (error) {
            console.error("Error fetching data from NewsAPI:", error);
        } finally {
            setLoading(false);
        }
    }, [country, category, page, pageSize]); 

    useEffect(() => {
        updateNews();
    }, [updateNews]); 

    const handlePrevClick = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextClick = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className='container my-3'>
            <h1 className='text-center' style={{ margin: '65px 0px' }}>
                Top {category} Headlines
            </h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='row'>
                    {articles.map((element) => (
                        <div className='col-md-4' key={element.url}>
                            <NewsItems 
                                title={element.title}
                                description={element.description}
                                imageurl={element.urlToImage}
                                newsurl={element.url}
                                date={element.publishedAt}
                            />
                        </div>
                    ))}
                </div>
            )}
            <div className='container d-flex justify-content-between'>
                <button 
                    disabled={page <= 1} 
                    type='button' 
                    className="btn btn-dark" 
                    onClick={handlePrevClick}
                >
                    &larr; Previous
                </button>
                <button 
                    disabled={articles.length < pageSize} 
                    type='button' 
                    className="btn btn-dark" 
                    onClick={handleNextClick}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};

export default News;
