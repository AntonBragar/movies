import styled from "styled-components";

export const MoviesWrapper = styled.div`
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
    grid-gap: 20px;
    margin: 20px;
    list-style: none;
  }

  .movie {
    width: 250px;
    margin-bottom: 40px;
    background: aliceblue;
    padding: 10px;
    border-radius: 20px;
  }
  
  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    padding-top: 10px;
  }

  .movie-img {
    width: 200px;
    border-radius: 5px;
    height: 300px;
  }
  
  .like {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .delete {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .favorite {
    display: flex;
    justify-content: center
  }
  
  .favorite-delete {
    display: flex;
    justify-content: center
  }
  
  .title {
    overflow: hidden;
    height: 45px;
    color: #22254b;
  }
  
`