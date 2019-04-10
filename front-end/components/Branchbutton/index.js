import React from 'react'
import Link from 'next/link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const BRANCH_QUERY = gql`
  query GET_POSTS {
    branches {
      edges {
        node {
            slug
            title
        }
      }
    }
  }
`;

/* MenuButton.jsx */
class BranchButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
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

  render () {
    const styles = {
      container: {
        display:'flex',
        alignItems:'center',
      },
      menu: {
        transition: 'all 0.2s ease',
        width: "100%",
        height:this.state.open ? "auto" : "0",
        maxHeight:this.state.open ? "450px" : "0",
        backgroundColor:"#005874",
        position: "fixed",
        left:"0",
        top:"0",
        overflow:"hidden",
        display:'flex',
        padding:'85px 0 0 0',
        flexDirection:'column',
        zIndex:-1,
      },
      link: {
        margin: '20px 0'
      },
      branches :{
        display: 'flex',
        flexDirection: 'column',
        overflow:'hidden'
      },
      branch : {
        width:"100%",
        margin:0,
        height:'63px',
        color:'black',
        display:'flex',
        alignItems:'center',
        padding:'0 0 0 25px'
      }
    }

    return (
      <div>
        <div style={{...styles.container}} onClick={this.props.onClick ? this.props.onClick:
            ()=> {this.handleClick();}}>
            <p>Välj Stad</p>
            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.5 7L14 0.999998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div style={{...styles.menu}}>
        <Query query={BRANCH_QUERY}>
          {({ data }) => {
              return (
                <div style={{...styles.branches}}>
                  {data.branches.edges.map((item, key) => {
                    return (
                      <Link key={key} href={`/branches/${item.node.slug}?slug=${item.node.slug}}`} as={`/branches/${item.node.slug}`}><a style={{...styles.branch, ...{backgroundColor: key % 2 == 0 ? 'rgba(238, 238, 238, 0.97)' : 'rgba(224, 224, 224, 0.98)'}}}>{item.node.title}</a></Link>
                    )
                  })}
                </div>
                  );
                }}
        </Query>
        </div>
      </div>
    )

  }
}

export default BranchButton
