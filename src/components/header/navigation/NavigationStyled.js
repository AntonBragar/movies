import styled from "styled-components"

export const NavigationContainer = styled.nav`
  font-size: 20px;
  width: 100%;

  .list {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .listItem {
    margin-right: 30px;
  }

  .link {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
  }

  .activeLink {
    color: salmon;
    border-bottom: 3px solid salmon;
  }

  .link:hover {
    border-bottom: 2px solid yellow;
  }
`