// import "react-image-gallery/styles/scss/image-gallery.scss";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
export default class MyGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(this.props);
  }
    
  render() {
    return <ImageGallery  slideDuration={300} infinite={false} showNav={false} items={this.props.sekil} showFullscreenButton={false} showPlayButton={false} />;
  }
}
