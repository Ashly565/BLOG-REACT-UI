import React from "react";
import { Link } from "react-router-dom";

function Photos() {
  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"alt=""/>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <div>
            <span className="postTitle"><Link className="link" to='/post'>Lorem ipsum dolor sit ...<i class="fa-solid fa-arrow-right text-danger fa-sm ms-2"></i></Link> </span>
            <hr />
            <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit officia, veniam voluptas facilis eum hic iste quos odio nam magnam. Fugiat, quod dolore veniam officiis tempora vitae? Laudantium, nisi laboriosam!
          Illum repellat voluptas temporibus labore officiis quibusdam eveniet aperiam earum, explicabo omnis quas cupiditate fugiat accusantium sunt ab beatae impedit nihil. Sapiente rerum voluptatem unde saepe, quaerat vitae aliquam laudantium?
          Inventore ullam perferendis vel autem quaerat tenetur quasi repudiandae! Impedit, quos magnam. Voluptatem molestiae provident, necessitatibus nihil est porro quos. Animi similique magnam illo asperiores magni. Ut repellat natus suscipit.
          Reiciendis vero ullam quam aliquid !</p>
        </div>
      </div>
    </>
  );
}

export default Photos;
