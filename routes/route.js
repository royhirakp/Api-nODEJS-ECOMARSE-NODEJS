const express = require('express');
const router = express.Router();
// id: A unique identifier for the product (integer)
// name: The name of the product (string)
// description: A brief description of the product (string)
// price: The price of the product (float)
// category: The category of the product (string)

// GET /products: Retrieves a list of all products
// GET /products/:id: Retrieves a specific product by ID
// POST /products: Creates a new product
// PUT /products/:id: Updates a specific product by ID
// DELETE /products/:id: Deletes a specific product by ID
// 
let arr = [];
router.get('/products',(req,res)=>{
    res.status(200).json({
        data: arr
    })
})

let ar = [{id:1,mess:"mess"},{id:2,mess:"mess"}]
let result = ar.map((data,i)=>{
    
})
// console.log(result)
// let res = ar.filter((e,I)=>e===6)
// console.log(res)
router.get('/products/:id',(req,res)=>{
    let id = req.params.id
    let resdata = arr.find((e)=>e.id==id)
    if(!resdata ){
        res.status(400).json({satatus:"id dosenot exist"})
    }else{
        res.status(200).json({
            data: resdata
        })
    }    
})

router.put('/products/:id',(req,res)=>{
    let updatedata= {
        name:req.body.name,
        description : req.body.description,
        price : req.body.price,
        category: req.body.category
    }
    let temp = false
    arr.map((data, indx)=>{
        if(data.id == req.params.id){
            temp = true;
            console.log(data.id, indx, "dataid , index")
            updatedata.id = data.id
            arr[indx] = updatedata;
            res.json({
                status:"updated "
            })
            // break;
        }
    })
    if(!temp){
        res.json({
        status:"id not found"
    })
    }
})

let amrArr = [1,2,3,4,5,6,7,8];
amrArr.splice(2,1)
console.log(amrArr)

router.delete('/products/:id',(req,res)=>{
    // let temp = false;
    let ind = null
    arr.map((data, indx)=>{
        if(data.id == req.params.id){
            // temp = true;
            ind = indx
            arr.splice(indx,1)           
            // break;
        }
    })
    if(ind === null){
        res.status(500).json({
            status:'id not founded'
        })
    }else{
        arr.slice(ind,1)
        res.json({
            satatus:"sucessfull deleted"
        })
    }
})


router.post('/products',(req,res)=>{
    let {id, name, description , price, category} = req.body;
    price = parseFloat(price);
    // console.log(typeof(1.1),"====name")
    // let validstatus = {
    //     id: typeof id === "number" +"4555lll",
    //     name: typeof(name) === "string",
    //     description : typeof description === "string",
    //     price : typeof price === "number",
    //     category: typeof category === "string",
    // } 
    
    // for(let indx in validstatus){
    //     console.log(indx)
    //     console.log(validstatus.hasOwnProperty(indx))
    // //     if(validstatus.hasOwnProperty(indx) === false){
    // //         res.json({
    // //             messege : !validstatus.id ? "id " : "" +
    // //             !validstatus.name ? "name" :"" +" not in currect format "
    // //         })
    // //         break;
    // //     }
    // }
    let obj = {
        id: req.body.id,
        name:req.body.name,
        description : req.body.description,
        price : req.body.price,
        category: req.body.category,
    }
    arr.push(obj)
    // console.log(obj)
    res.status(201).json({
        status:"data created"
    })
})



router.get('/test',(rqs,res)=>{
    res.send('data working')
})

module.exports = router