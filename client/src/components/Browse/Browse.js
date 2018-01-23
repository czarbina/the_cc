import React from "react";
import "./Browse.css";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import BrowseMap from "../BrowseMap/BrowseMap";


// const List = props => {
//   // Using the filter method, we can create a new array containing only groceries which haven't been purchased
//   const notPurchased = props.groceries.filter(grocery => !grocery.purchased);
//   return (
//     <ul className="list-group">
//       {notPurchased.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default List;


const Artists = [
  { 
    id:1,
    artistName: "marshmello",
    image: "http://3.bp.blogspot.com/-Q9YULC9C9Cg/UMkEx90dlHI/AAAAAAAACdU/RXv8slR6cxY/s1600/charstrengths.jpg",
    bio: "joe",
    link: "http://soundcloud.com/"
  },
  { 
    id:2,
    artistName: "beanbag",
    image: "https://i.pinimg.com/736x/cf/b6/ce/cfb6ce8aadfbf338c1c7c36333745da7--yung-lean-sad-boys-seapunk.jpg",
    bio: "joe",
    link: "http://soundcloud.com/"
  },
  { 
    id:3,
    artistName: "boy boy",
    image: "http://i2.kym-cdn.com/photos/images/newsfeed/000/444/233/733.jpg",
    bio: "joe",
    link: "http://soundcloud.com/"
  },
  { 
    id:4,
    artistName: "giselle",
    image: "https://pbs.twimg.com/profile_images/785597007280771072/MU2u1ywq_400x400.jpg",
    bio: "joe",
    link: "http://soundcloud.com/"
  }
];

const Browse = () => <BrowseMap Artists={Artists} />;

// class Browse extends React.Component { 

// 	state = {
// 			  artistName: "",
// 			  image: "",
// 			  bio: "",
// 			  links: ""
//  			};

 //   componentDidMount() {
 //    this.getProfiles();
 //  }

 //  loadBios = () => {
 //    API.getProfiles()
 //      .then(res => this.setState({ artistName: res.data.artistName }, {image: res.data.image}, {bio: res.data.bio), {links: res.data.links)
 //        ))
 //      }
 //      }
 //      }
 //      .catch(err => console.log(err));
 //  };


// render() {
	
// 	return (

// <div className="parallax-container" 
//         style={{
//           minHeight: "380px", 
//           lineHeight: 0, 
//           height: "auto", 
//           color: "#ffffffff",
//           display: "-webkit-box",
//           display: "-webkit-flex",
//           display: "-ms-flexbox",
//           display: "flex",
//           WebkitBoxAlign: "center",
//           WebkitAlignItems: "center",
//           msFlexAlign: "center",
//           alignItems: "center",
//           width: "auto"
//         }}>

// <div>
//  <div class="col s12 m7">
//     <h2 class="header">Horizontal Card</h2>
//     <div class="card horizontal">
//       <div class="card-image" style={{color:"#7986cb", textAlign: "center"}}>
//         <img 
//           value={this.state.image}
//             name="image"
//             width="150" height="150" />
//       </div>
//       <div class="card-stacked">
//         <div class="card-content"
//               value={this.state.artistName}
//               name="artistname" />
//         <div class="card-content"
//               value={this.state.bio}
//               name="bio"


//           <p style={{color:"#7986cb", textAlign: "center"}}>It's not about your 9-5; it's about your 5-9</p>
//         </div>
//         <div class="card-action">
//           <a href="#">This is a link</a>
//         </div>
//       </div>
//     </div>
//   </div>





  // <div className="card">
    // <div className="card-image waves-effect waves-block waves-light">
    // </div>
    // <div className="card-content">
    //  <img className="activator" src="https://img.discogs.com/_2N3_k2rr10kDcAbnRoeOwr71yQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/L-1262149-1497116291-7868.png.jpg" /* {this.state.image} */ width="150" height="150" /> 
    //   <span className="card-title activator grey-text text-darken-4">Dont Die At Work<i className="material-icons right">more_vert</i></span>

    //   <p><a href="http://soundcloud.com/dontdieatwork" target="_blank">Dont Die At Work</a></p>
    // </div>
    // <div className="card-reveal">
    //   <span className="card-title grey-text text-darken-4">DDAW MF<i className="material-icons right">close</i></span>
    //   <p> It's not about your 9-5; it's about your 5-9</p>
 //    </div>
 // </div>





// 		)


// }




export default Browse;