import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
  p {
    margin-left: 10px;
  }
  button {
    margin-top: 10px;
  }
`;

export const TableContainer = styled.div`
  table {
    color: rgba(0, 0, 0, 0.87);
    /* transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fff;
    margin-left: 10px;
  }

  th {
    display: table-cell;
    padding: 16px;
    font-size: 0.875rem;
    text-align: left;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }
`;

export const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }

  td {
    display: table-cell;
    padding: 16px;
    font-size: 0.875rem;
    text-align: left;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }
`;

export const Form = styled.form``;

export const ContentHeader = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkButton = styled.div`
  margin-top: 23px;
  margin-left: 10px;
  a {
    background-color: #eeeeee;
    padding: 8px 20px;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #3f51b5;
    color: #ffffff;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.75;
  }
`;

export const AutoComplete = styled.div`
  div {
    position: absolute;
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 5px 5px 0 0;
    margin-left: 10px;
    width: 400px;
    height: 300px;
    overflow-y: auto;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin-top: 5px;
  }

  li {
    text-align: left;
  }
`;
