import React from 'react'

function Singlepost() {
  return (
    <>
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className='singlePostImg' style={{position:"relative",bottom:"60px"}}
        src="https://cdn.pixabay.com/photo/2019/03/07/04/52/himalaya-4039495_1280.jpg" alt="" />
        <h1 className="singlePostTitle">
            Explore the world...
            <div className='singlePostEdit'>
            <i className=" singlePostIcon text-success fa-solid fa-pen-to-square"></i>
            <i className=" singlePostIcon text-danger fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author:<b>unknown</b></span>
            <span className='singlePostDate'>posted:<b>1 hour ago</b></span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita voluptatem veniam rem facere? Natus animi vero accusamus porro amet ipsam, at vel, nobis iste ipsa enim sint voluptates molestiae.
        Commodi perspiciatis, suscipit sequi reiciendis, amet iure esse excepturi quas, est illo eaque! Tempora corrupti voluptatibus eveniet quasi nesciunt magni optio laborum molestias itaque hic nam aut maiores, quibusdam veniam.
        Placeat minus et nobis aliquam alias explicabo inventore earum illum? Harum et minima quo inventore quisquam quia, adipisci ex quibusdam consectetur sapiente nesciunt dolorem quam, ad repudiandae natus mollitia a?
        Illo numquam veniam quasi, voluptatem maiores, quam dolor magnam sit facere voluptatibus expedita cumque soluta ipsam obcaecati inventore velit. Voluptatibus soluta cumque itaque sed sequi explicabo maxime officia earum eveniet.</p>
      </div>
    </div>
    </>
  )
}

export default Singlepost