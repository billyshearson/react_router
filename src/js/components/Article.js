import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="col-md-4">
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          voluptatibus earum a quod consectetur reiciendis sit fugit vero quia
          excepturi incidunt, pariatur repellat itaque consequatur veritatis ut
          quae, cumque maxime?
        </p>
        <a href="#" className="btn btn-default">
          More Info
        </a>
      </div>
    );
  }
}
