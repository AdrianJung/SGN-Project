import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';

const ContainerDiv = styled.div`
  display:flex;
  align-items: center;
  cursor:pointer;
  @media screen and (min-width: 992px) {
    background:#046DA9;
    background-color: ${props => props.theme.colorPrimary};
    width:237px;
    justify-content:center;
    height:53px;
  }

  p {
    color:white;
  }

  svg {
    transition:all 0.1s;
  }

  p,svg {
    margin:0 5px;
  }
`

const MenuDiv = styled.div`
  transition: all 0.2s ease;
  width: 100%;
  position: fixed;
  left:0;
  top:0;
  overflow-y:scroll;
  display:flex;
  padding:85px 0 0 0;
  flex-direction:column;
  z-index:-1;
  height:100vh;

  @media screen and (min-width: 992px) {
    padding:53px 0 0 0;
    width:236px;
    height:100vh;
    background-color:rgba(224, 224, 224, 0.98);
    position:fixed;
  }
`

const BranchesDiv = styled.div`
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:white;
`

const BranchLink = styled.a`
  width:100%;
  margin:0;
  height:63px;
  color:black;
  display:flex;
  align-items:center;
  padding:0 0 0 25px;
  cursor:pointer;

  svg, img {
    margin:0 15px 0 0;
  }
`

const NoMobile = styled.div`
  @media screen and (max-width: 992px) {
    display:none;
  }
`

/* MenuButton.jsx */
class BranchButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      branches: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/wp-json/wp/v2/branches')
    .then((response) => {
      // handle success
      // console.log(response.data);
      this.setState({branches: response.data})
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  handleClick(){
  this.setState({open:!this.state.open});
  }

  render () {
    const styles = {
      menu: {
        height:this.state.open ? "100vh" : "0",
        maxHeight:this.state.open ? "1100px" : "0",
      }
    }

    return (
      <div>
        <ContainerDiv onClick={this.props.onClick ? this.props.onClick:
            ()=> {this.handleClick();}}>
            <p>{this.props.title ? this.props.title : "Välj Stad"}</p>
            <svg style={{transform: this.state.open ? 'rotate(-180deg)' : 'rotate(0deg)' }} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.5 7L14 0.999998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </ContainerDiv>

        <MenuDiv style={{...styles.menu}}>
          <BranchesDiv>
            <NoMobile>
              <Link href={`/`}><BranchLink>
                <img height="16" width="16" src="https://svgshare.com/i/CXg.svg" />
                Support Group Network
                </BranchLink></Link>
            </NoMobile>
            {this.state.branches.map((item, key) => {
              return (
                <Link
                  key={key}
                  href={`/branches/${item.slug}?slug=${item.slug}}`}
                  as={`/branches/${item.slug}`}>

                  <BranchLink
                    style={{...{backgroundColor: key % 2 == 0 ? 'rgba(238, 238, 238, 0.97)' : 'rgba(224, 224, 224, 0.98)'}}}>
                    <svg width="16" height="16" xmlns='http://www.w3.org/2000/svg' id='Layer_1' viewBox='0 0 512 512'>
                        <path d='M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z'
                        />
                    </svg>
                    {item.acf.name}
                  </BranchLink>
                </Link>
              )
            })}
            <BranchLink href="https://instagram.com">Instagram</BranchLink>
            <BranchLink href="https://facebook.com">Facebook</BranchLink>
            <Link href='/contact'><BranchLink>Contact us</BranchLink></Link>
          </BranchesDiv>
        </MenuDiv>
      </div>
    )

  }
}

export default BranchButton
