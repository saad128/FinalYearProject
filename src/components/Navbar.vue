<template>

  <v-app>
   
   
     <v-snackbar v-model="snackbar" :timeout="4000" top  color="indigo">
      <span>Awesome! You Added a new Project</span>
      <v-btn depressed small color="indigo white--text" @click="snackbar =false">Close</v-btn>
    </v-snackbar>
    
    <v-navigation-drawer clipped class="teal lighten-3" v-model="drawer" app>  
     <v-list>
       <v-list-item link router="/">
        <v-list-item-icon>
          <v-icon>dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="subItem in item.items" :key="subItem.title" @click="items" router :to="subItem.route">
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
     
   
    <v-app-bar clipped-left class="teal lighten-1" app clipped-right elevation="0"  >
      
     <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="balck--text">Spice World</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="black--text">
        <v-icon>notification_important</v-icon>
      </v-btn>
      <v-btn icon class="black--text">
        <v-icon>settings_applications</v-icon>
      </v-btn>
    </v-app-bar>
    
    <router-view />
  </v-app>
</template>



<script>
export default {
  name: "App",

  data() {
    return {
      drawer: null,
       items: [
          {
            action: 'dvr',
            title: 'Sell',
            
            items: [
              { title: 'Running Orders', route:'/Running_Order' },
              { title: 'Closing Orders', route:'/Closing_Order' },
            ],
          },
          {
            action:'card_travel',
            title: 'Product',
            
            items: [
              { title: 'Category',route:'/Category' },
              { title: 'Add Product',route:'/Add_Product' },
              { title: 'Manage Product',route:'/Manage_Product' },
            ],
          },
           {
            action: 'people',
            title: 'Customer',
            
            items: [
              { title: 'Add Customer',route:'/Add_Customer' },
              { title: 'Manage Customer',route:'/Manage_Customer' },
            ],
          },
          {
            action: 'person',
            title: 'Salesman',
            
            items: [
              { title: 'Add Salesman',route:'/Add_Salesman' },
              { title: 'Manage Saleman',route:'/Manage_Salesman' },
            ],
          },
         
          {
            action: 'people_alt',
            title: 'Supplier',
            
            items: [
              { title: 'Add Supplier',route:'/Add_Supplier' },
              { title: 'Manage Supplier',route:'/Manage_Supplier' },            
            ],
          },
          {
            action: 'shopping_cart',
            title: 'Purchase',
            
            items: [
              { title: 'Add Purchase',route:'/Add_Purchase' },
              { title: 'Manage Purchase',route:'/Manage_Purchase' },
            ],
          },
           {
            action: 'signal_cellular_alt',
            title: 'Stock',
            
            items: [
              { title: 'Stock Report',route:'/Stock_Report' },
              { title: 'Stock Report (Supplier wise)',route:'/Stock_Report_(Supplier_wise)' },
              { title: 'Stock Report (Purchase wise)',route:'/Stock_Report_(Purchase_wise)' },
            ],
          },
          {
            action: 'menu_book',
            title: 'Report',
            
            items: [
              { title: 'Purchase Report',route:'/Purchase_Report' },
              { title: 'Sales Report',route:'/Sales_Report' },
              { title: 'Today Report',route:'/Today_Report' },
            ],
          },
        ],
    };
    
  }
 
};
</script>