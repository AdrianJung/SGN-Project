import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';

const ContentWrapper = styled.div`
  width:100%;
  height:330px;
  background:white;
  margin:16px 0;
  display:flex;
  flex-direction:row;
  padding:16px;
  box-sizing:border-box;

  section {
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding: 0 35px;
    width:50%;
    box-sizing:border-box;
  }

  header {
    display:flex;
    align-items:center;
    width:50%;
    justify-content:center;
  }

  header > div {
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: 0 0 0 32px;
  }

  h1,h2,h3 {
    color:black;
    margin:0;
    text-align:left;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 84px;
    line-height: normal;
    letter-spacing: -0.05em;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #8B8B8B;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #046DA9;
    margin: 5px 0;
    text-decoration:underline;
  }

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.01em;
    color: #000000;
    margin: 15px 0;
  }

  @media screen and (max-width: 992px) {
    flex-direction:column;

    section {
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding: 0;
      width:auto;
      box-sizing:border-box;
    }

    header {
      display:flex;
      align-items:center;
      width:auto;
      justify-content:flex-start;
    }
  }
`

class ActivityCard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title: this.props.data.title,
      day: "",
      weekday: "",
      month: "",
      isLoading: true,
    }
  }

  componentDidMount() {
    const dateArray = this.props.data.date.split("/")

    const weekday = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`)

    const weekdayName = weekday[date.getDay()];
    const monthName = monthNames[date.getMonth()];

    this.setState({
      day: dateArray[0],
      weekday: weekdayName,
      month: monthName,
      isLoading: false
    })
  }

  render () {
    console.log(this.state)
    return (
      <ContentWrapper>
        <header>
          <h1>{this.state.day}</h1>
          <div>
            <h2>{this.state.weekday}</h2>
            <h3>{this.state.month}</h3>
          </div>
        </header>
        <section>
        <p>{this.state.title}</p>
          <h3>
          Have you ever bought a lottery ticket? I admit, I’ve played a few times. You won’t be surprised to learn I never did win the big jackpot.
          </h3>
          <Link href="/activities"><a>GO TO ACTIVITY</a></Link>
        </section>
      </ContentWrapper>
    )

  }
}

export default ActivityCard
