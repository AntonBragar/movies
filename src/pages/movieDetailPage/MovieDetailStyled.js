import styled from "styled-components";

export const MovieDetailWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .wrapper {
    width: 1170px;
    margin: auto;
  }
  
  .movie-description {
    display: flex;
    justify-content: flex-end;
    
  }
  
  .poster {
    display: block;
    margin-right: 30px;
    width: 300px;
    border-radius: 30px;
  }

  .overview {
    width: 50%;
  }
  
  .overview h2 {
    color: salmon;
  }

  .overview span {
    color: salmon;
  }
  
  .title {
    text-align: center;
  }
  
  .genres {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
  }
  
  .genre {
    margin-right: 15px;
    border: 2px solid black;
    padding: 10px;
  }
`