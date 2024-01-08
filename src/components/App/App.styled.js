import styled from 'styled-components';

export const AppDiv = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: #ffffff;
  background-color: #f4bf96;

  div > ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
    margin-top: 30px;
  }

  .button-list {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  button {
    max-width: 100%;
    min-width: 120px;
    height: 60px;
    display: block;
    font-size: 18px;
    text-transform: uppercase;
    border: 2px solid #ffffff;
    border-radius: 8px;
    background-color: rgb(206, 90, 103);
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 10px inset;

    &:hover {
      background-color: #951826;
      color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.5) -5px -5px 10px inset;
    }
  }

  .stat-list {
    flex-direction: column;
    width: 300px;
  }

  .no-fdbc-msg {
    width: 300px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 36px;
    color: #ffffff;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 30px 0;

    .avatar {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: block;
      border: 5px solid #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      background-color: #fcf5ed;
    }

    p {
      margin: 0;
      padding-top: 10px;
      color: #fcf5ed;
    }

    .name {
      color: #1f1717;
      font-weight: bold;
      padding-top: 20px;
      font-size: 30px;
    }
  }

  .stats {
    margin: 0;
    padding: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    list-style: none;
    color: #fcf5ed;

    li {
      border: 1px solid #fcf5ed;
      width: 166px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      gap: 5px;
      background-color: #ce5a67;
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);

      .quantity {
        font-weight: bold;
      }

      &:first-child {
        border-radius: 0 0 0 60px;
      }
    }
  }
`;
