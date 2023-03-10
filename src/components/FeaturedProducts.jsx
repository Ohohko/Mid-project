import React from 'react'

const FeaturedProducts = ({type}) => {

    const data = [
        {
        id: 1,
        img:"https://brouwhoeve.es/wp-content/uploads/2022/02/istockphoto-1128262881-612x612-1.jpg",
        img2:'https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg',
        title:"Gift demo 1",
        isNew:true,
        oldPrice:100,
        price:85,
        },
        {
            id: 2,
        img:"https://brouwhoeve.es/wp-content/uploads/2022/02/istockphoto-1128262881-612x612-1.jpg",
        img2:'https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg',
        title:"Gift demo 2",
        isNew:true,
        oldPrice:80,
        price:55,

        },
        {
            id: 3,
        img:"https://brouwhoeve.es/wp-content/uploads/2022/02/istockphoto-1128262881-612x612-1.jpg",
        img2:'https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg',
        title:"Gift demo 3",
        oldPrice:40,
        price:20,

        },
        {
         id: 4,
        img:'https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg',
        title:"Gift demo4",
        oldPrice:10,
        price:5,

        }

    ]


  return (
    <div className='featuredProducts mx-3.5'>FeaturedProducts
    <div className='top'>
        <h1>{type} products</h1>
    </div>
    <div className='bottom'></div>
    </div>
  )
}

export default FeaturedProducts