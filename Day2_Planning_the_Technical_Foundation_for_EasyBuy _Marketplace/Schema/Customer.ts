const CustomerSchema = {
     name: 'customer',
     type: 'document',
     title: 'Customer',
     fields: [
       {
         name: 'firstName',
         type: 'string',
         title: 'First Name',
       },
       {
         name: 'lastName',
         type: 'string',
         title: 'Last Name',
       },
       {
         name: 'email',
         type: 'string',
         title: 'Email Address',
       },
       {
         name: 'phone',
         type: 'string',
         title: 'Phone Number',
       },
       {
         name: 'shippingAddress',
         type: 'string',
         title: 'Shipping Address',
       },
       {
         name: 'billingAddress',
         type: 'string',
         title: 'Billing Address',
       },
     ],
   };
   
   export default CustomerSchema;