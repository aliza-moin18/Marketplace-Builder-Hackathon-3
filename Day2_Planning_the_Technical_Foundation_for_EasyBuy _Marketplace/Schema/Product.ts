const ProductSchema = {
     name: 'product',
     type: 'document',
     title: 'Product',
     fields: [
       {
         name: 'name',
         type: 'string',
         title: 'Product Name',
       },
       {
         name: 'price',
         type: 'number',
         title: 'Price',
       },
       {
         name: 'description',
         type: 'text',
         title: 'Product Description',
       },
       {
         name: 'image',
         type: 'image',
         title: 'Product Image',
         options: {
           hotspot: true, 
         },
       },
       {
         name: 'stock',
         type: 'number',
         title: 'Stock Quantity',
       },
     ],
   };
   
   export default ProductSchema;   