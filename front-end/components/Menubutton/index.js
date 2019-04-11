import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  height: 22px;
  width: 22px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  z-index:10;
`

const OpenContainerStyle = styled.div`
  height: 22px;
  width: 22px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  z-index:10;
  position:absolute;
  right:0;
  top:20px;
`
const LinkStyle = styled.a`
  margin: 20px 0;
  color:white;
`

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'white',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  handleClick(){
  this.setState({open:!this.state.open});
  }

  render(){
    const styles = {
      line: {
        height: '2px',
        width: '20px',
        background: this.state.color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0: 1,
        transform: this.state.open ? 'translateX(-16px)':'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },
      menu: {
        transition: 'all 0.2s ease',
        width: "100%",
        height:this.state.open ? "100vh" : "0",
        maxHeight:this.state.open ? "1000px" : "0",
        backgroundColor:"#005874",
        position: "fixed",
        left:"0",
        top:"0",
        zIndex:5,
        overflow:"hidden",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
      },
      link: {
        margin: '20px 0'
      }
    }

    return(
      <div>
        <ContainerStyle
          onClick={this.props.onClick ? this.props.onClick:
            ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </ContainerStyle>

        <div style={{...styles.menu}}>
          {this.state.open && (<OpenContainerStyle
            onClick={this.props.onClick ? this.props.onClick:
              ()=> {this.handleClick();}}>
            <div style={{...styles.line,...styles.lineTop}}/>
            <div style={{...styles.line,...styles.lineMiddle}}/>
            <div style={{...styles.line,...styles.lineBottom}}/>
          </OpenContainerStyle>)}
          <Link href="/">
            <LinkStyle>Home</LinkStyle>
          </Link>
          <Link href="/about">
            <LinkStyle>About Us</LinkStyle>
          </Link>
          <Link href="/branches">
            <LinkStyle>Branches</LinkStyle>
          </Link>
          <Link href="/events">
            <LinkStyle>Events</LinkStyle>
          </Link>
          <Link href="/contribute">
            <LinkStyle>Contribute</LinkStyle>
          </Link>
          <Link href="/contact">
            <LinkStyle>Contact us</LinkStyle>
          </Link>
        </div>
      </div>
    )
  }
}

export default MenuButton
