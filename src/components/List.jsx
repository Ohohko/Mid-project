import React from 'react'

const List = () => {
  return (
    <div className='list space-x-0 flex-wrap'> data from strapi</div>
  )
}

export default List











// import React,{useState,useEffect} from 'react'
// import { collection,getDocs } from 'firebase/firestore'
// import { db } from '../firebase-config'


// export default function List() {

// const [product,setProduct] = useState([])

// useEffect(() => {
//   getList()
// }, [])

// useEffect(() => {
//   console.log(product)
// }, [product])




// function getList(){
//     const giftCollectionRef = collection(db,'gift')
//     getDocs(giftCollectionRef)
//     .then(response=>{
//         // console.log(response.docs)
//         const lists = response.docs.map(doc =>({
//           data: doc.data(),
//           id: doc.id
//          }))
//          setProduct(lists)

//     })
//     .catch(error => console.log(error.message))

// }

//   return (
//     <div>
//     <h2>Product List</h2>

//     <ul>
//      {product.map(product =>(
//       <><li key={product.id}>{product.data.name}</li><li key={product.id}>{product.data.price}</li></>
//      )) }
//     </ul>

    
//     </div>
//   )
// }
