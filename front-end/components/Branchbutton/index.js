import React from "react";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    background: #046da9;
    background-color: ${props => props.theme.colorPrimary};
    width: 237px;
    justify-content: center;
    height: 53px;
  }

  p {
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    text-align: center;
    letter-spacing: 0.05em;

    color: #ffffff;
  }

  svg {
    transition: all 0.1s;
  }

  p,
  svg {
    margin: 0 5px;
  }
`;

const MenuDiv = styled.div`
  transition: all 0.2s ease;
  width: 100%;
  position: fixed;
  left:0;
  top:0;
  overflow-y:scroll;
  display:flex;
  padding-top:84px;
  flex-direction:column;
  z-index:-1;
  height:100%;
  overflow-y:scroll;

  @media screen and (min-width: 992px) {
    padding: 53px 0 0 0;
    width: 236px;
    height: 100vh;
    background-color: white;
    position: fixed;
    margin: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const BranchesDiv = styled.div`
  display:block;
  overflow-y:scroll;
  background:white;
`

const BranchLink = styled.a`
  width: 100%;
  margin: 0;
  height: 63px;
  color: black;
  display: flex;
  align-items: center;
  padding: 0 0 0 25px;
  cursor: pointer;
  position: relative;

  .pre {
    position: absolute;
    width: 70%;
    height: 1px;
    background: lightgrey;
    top: 0;
    left: 25px;
  }

  svg,
  img {
    margin: 0 15px 0 0;
  }

  @media screen and (max-width: 992px) {
    font-size:16px;
  }
`;

const NoMobile = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

/* MenuButton.jsx */
class BranchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      branches: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8888/wp-json/wp/v2/branches").then(response => {
      this.setState({ branches: response.data });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      menu: {
        height: this.state.open ? "100vh" : "0",
        maxHeight: this.state.open ? "1100px" : "0"
      }
    };

    const colors = [
      "#AD0039",
      "#630079",
      "#005B91",
      "#256600",
      "#9C3600",
      "#685348",
      "#4A5389"
    ];

    return (
      <div>
        <ContainerDiv
          onClick={
            this.props.onClick
              ? this.props.onClick
              : () => {
                  this.handleClick();
                }
          }
        >
          <p>{this.props.title ? this.props.title : "LOCATION"}</p>
          <svg
            style={{
              transform: this.state.open ? "rotate(-180deg)" : "rotate(0deg)"
            }}
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7.5 7L14 0.999998"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ContainerDiv>

        <MenuDiv style={{ ...styles.menu }}>
          <BranchesDiv>
            <NoMobile>
              <Link href={`/`}>
                <BranchLink>
                  <img
                    height="16"
                    src="https://i.imgur.com/vAKx1pf.png"
                  />
                  Support Group Network
                </BranchLink>
              </Link>
            </NoMobile>
            {this.state.branches.map((item, key) => {
              return (
                <Link
                  key={key}
                  href={`/branches/${item.slug}?slug=${item.slug}}`}
                  as={`/branches/${item.slug}`}
                >
                  <BranchLink
                    style={{
                      ...{
                        backgroundColor:
                          this.props.title == item.acf.name
                            ? "rgba(238, 238, 238, 0.97)"
                            : "white"
                      }
                    }}
                  >
                    <svg
                      fill={colors[key]}
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z" />
                    </svg>
                    {item.acf.name}
                  </BranchLink>
                </Link>
              );
            })}
            <BranchLink href="https://instagram.com">
              <div className="pre" />Instagram
            </BranchLink>
            <BranchLink href="https://facebook.com">Facebook</BranchLink>
            <Link href="/contact">
              <BranchLink>Contact us</BranchLink>
            </Link>
          </BranchesDiv>
        </MenuDiv>
      </div>
    );
  }
}

export default BranchButton;
