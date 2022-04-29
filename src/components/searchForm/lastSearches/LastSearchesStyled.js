import styled from "styled-components"

export const LastSearchesWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  
  li {
    border: 2px solid yellowgreen;
    font-weight: bold;
    margin: 10px;
    padding: 13px;
    color: salmon;
  }
  
  li:hover {
    cursor: pointer;
    background: blanchedalmond;
  }
`