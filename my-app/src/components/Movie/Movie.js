import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

const Movie=({Title,Year,Poster})=>(//creer une fonction fléchée stockée dans une variable, j'ai donné des props qui coreesponde a ma data.js
      <div className="Movie">
        <img className="poster" src={Poster} alt="poster" />
        <div className="meta">
            <h3 className="title">{Title}</h3>
            <span className="year">{Year}</span>
        </div>
    </div>
)

Movie.propTypes={
    Title: PropTypes.string.isRequired,
    Year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Poster: PropTypes.string,//oneOftype est une méthode react de protoTypes , permet de faire matcher une type de valeur
}
Movie.defaultProps = {//defaultProps c'est une méthode de React permet d'attribuer des valeurs par defaut aux propriétes de son choix
    Title: "Sans titre",
    Year: "0",
    Poster:"https://lh3.googleusercontent.com/proxy/WUKCCB9YEDk0CaK-Zj_MUozujx-uwNJg7ZpKZWEFZT0uTboB8jukXvb6TRq1q4FJgU7w2oZQq05f_2SQokvIP41T9-xumZwcGsgu_rpoeWfOwtS3uW8zPUF5-inroNNP-Q",
}
export default Movie;