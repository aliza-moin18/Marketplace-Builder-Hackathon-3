const OrderSchema = {
     name: 'order',
     type: 'document',
     title: 'Order',
     fields: [
       {
         name: 'orderId',
         type: 'string',
         title: 'Order ID',
       },
       {
         name: 'customer',
         type: 'reference',
         title: 'Customer',
         to: [{ type: 'customer' }],
       },
       {
         name: 'products',
         type: 'array',
         title: 'Ordered Products',
         of: [{ type: 'reference', to: [{ type: 'product' }] }],
       },
       {
         name: 'totalAmount',
         type: 'number',
         title: 'Total Amount',
       },
       {
         name: 'status',
         type: 'string',
         title: 'Order Status',
         options: {
           list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
         },
       },
       {
         name: 'shippingAddress',
         type: 'string',
         title: 'Shipping Address',
       },
       {
         name: 'paymentStatus',
         type: 'string',
         title: 'Payment Status',
         options: {
           list: ['Pending', 'Paid', 'Failed'],
         },
       },
       {
         name: 'orderDate',
         type: 'datetime',
         title: 'Order Date',
       },
     ],
   };
   
   export default OrderSchema;   