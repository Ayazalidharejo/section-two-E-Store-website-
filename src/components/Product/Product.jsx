import React from 'react'
import Hero from "../../acsses/clock.avif";
import Hero2 from "../../acsses/cream.avif";
import Hero3 from "../../acsses/cream2.avif";
import Hero4 from "../../acsses/watch.avif";
import Hero5 from "../../acsses/ele3.avif"
import Hero6 from "../../acsses/ele.jpg"
import Hero7 from "../../acsses/eight.avif"
import { Box, Card, Rating, Typography } from '@mui/material'
const Product = () => {
const Products=[
  {

    Name:"Product-2 ",
    Price:350,
    img:Hero ,
},
  {

    Name:"Product-3 ",
    Price:450,
    img:Hero2 ,
},
  {

    Name:"Product-4 ",
    Price:550,
    img:Hero3 ,
},
  {

    Name:"Product-5 ",
    Price:650,
    img:Hero4 ,
},
  {

    Name:"Product-6 ",
    Price:150,
    img:Hero5 ,
},
  {

    Name:"Product-7 ",
    Price:950,
    img:Hero6 ,
},
  {

    Name:"Product-8 ",
    Price:220,
    img:Hero7 ,
},
  

]



  return (
   <div className='d-flex gap-2  container'>
    {
       Products.map((item)=>{
        return(
          <div className='d-flex'>
         <Card >
         <Box >
<img className='d-flex align-items-center p-3 object-fit-cover ' style={{width:"180px", minHeight:"100px",maxHeight:"180px"}} src={item.img} alt="" />
<Rating className='ms-4' name="read-only" value={3} readOnly />
<Typography className='text-center' variant='body1'>{item. Name} </Typography>
<Typography className='text-center' variant='body2'>{item. Price} </Typography>

          </Box>
          </Card>
          </div>
        )
       })
    }
   
   </div>
  )
}

export default Product