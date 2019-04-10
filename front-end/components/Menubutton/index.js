import React from 'react'
import Link from 'next/link';

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
      container: {
        height: '40px',
        width: '40px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex:10,
      },
      containerOpen: {
        height: '40px',
        width: '40px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex:10,
        position:'absolute',
        right:"0",
        top:"20px",
      },
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
        <div style={styles.container}
          onClick={this.props.onClick ? this.props.onClick:
            ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>

        <div style={{...styles.menu}}>
          {this.state.open && (<div style={styles.containerOpen}
            onClick={this.props.onClick ? this.props.onClick:
              ()=> {this.handleClick();}}>
            <div style={{...styles.line,...styles.lineTop}}/>
            <div style={{...styles.line,...styles.lineMiddle}}/>
            <div style={{...styles.line,...styles.lineBottom}}/>
          </div>)}
          <Link href="/">
            <a style={{...styles.link}}>Home</a>
          </Link>
          <Link href="/about">
            <a style={{...styles.link}}>About Us</a>
          </Link>
          <Link href="/branches">
            <a style={{...styles.link}}>Branches</a>
          </Link>
          <Link href="/events">
            <a style={{...styles.link}}>Events</a>
          </Link>
          <Link href="/contribute">
            <a style={{...styles.link}}>Contribute</a>
          </Link>
          <Link href="/contact">
            <a style={{...styles.link}}>Contact us</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default MenuButton
