import React from "react";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";

const ContentWrapper = styled.div`
  width: 100%;
  height: 330px;
  background: white;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  padding: 16px;
  box-sizing: border-box;
  transition: height 0.5s;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 35px;
    width: 50%;
    box-sizing: border-box;
  }

  header {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: center;
  }

  article {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    padding: 26px 40px;
    border-top:32px solid #046DA9;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  header > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 32px;
  }

  header > article > div > h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #000000;
    margin:0 0 5px 0;
  }

  h1,
  h2,
  h3 {
    color: black;
    margin: 0;
    text-align: left;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 84px;
    line-height: normal;
    letter-spacing: -0.05em;
    margin:0 32px 0 0;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #8b8b8b;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #046DA9;
  }

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    cursor: pointer;
    letter-spacing: 0.01em;
    color: #000000;
    margin: 15px 0;
    text-decoration: underline;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 40px 16px;
    margin: 0 0 32px 0;
    justify-content:space-between;
    height:auto;

    section {
      margin:30px 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      width: auto;
      box-sizing: border-box;
    }

    header {
      margin:20px 0 0 0;
      display: flex;
      align-items: center;
      width: auto;
      justify-content: center;
      box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
      padding: 34px 0;
      border-top:22px solid #046DA9;
    }

    article {
      box-shadow: none;
      padding: 0;
      border:none;
    }

    header > article > div > h2 {
      margin:0;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 23px;
      letter-spacing: 0.03em;
      color: black;
    }

    header > h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 84px;
      line-height: normal;
      text-align: center;
      letter-spacing: -0.05em;
      color: #000000;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 23px;
      letter-spacing: 0.03em;
      color: #046DA9;
      text-decoration:none;
    }
  }
`;
const InfoStyle = styled.div`
  margin: 20px 0;

  @media screen and (max-width: 992px) {
    margin: 0;
  }
`;

const NoDesktop = styled.div`
  @media screen and (min-width: 992px) {
    display:none;
  }
`;

const NoMobile = styled.div`
  @media screen and (max-width: 992px) {
    display:none;
  }
`;


class ActivityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      day: "",
      weekday: "",
      month: "",
      isLoading: true,
      isExpanded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { isExpanded: !prevState.isExpanded };
    });
  }

  componentDidMount() {
    const dateArray = this.props.data.date.split("/");

    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const date = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);

    const weekdayName = weekday[date.getDay()];
    const monthName = monthNames[date.getMonth()];

    this.setState({
      day: dateArray[0],
      weekday: weekdayName,
      month: monthName,
      isLoading: false
    });
  }

  render() {
    return (
      <ContentWrapper>
        <NoDesktop>
          <p>{this.state.title}</p>
        </NoDesktop>
        <header>
          <article>
            <h1>{this.state.day}</h1>
            <div>
              <h2>{this.state.weekday}</h2>
              <h3>{this.state.month}</h3>
            </div>
          </article>
        </header>
        <section>
          <NoMobile>
            <p>{this.state.title}</p>
          </NoMobile>
          <h3>{this.props.data.description}</h3>

          {this.state.isExpanded && (
            <InfoStyle>
              <h3>Time: {this.props.data.time}</h3>
              <h3>Location: {this.props.data.location}</h3>
            </InfoStyle>
          )}

          <a onClick={this.handleClick}>
            {!this.state.isExpanded ? "READ MORE" : "READ LESS"}
          </a>
        </section>
      </ContentWrapper>
    );
  }
}

export default ActivityCard;
