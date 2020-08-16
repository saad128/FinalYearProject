<template>
  
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Customer/Shop Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Item', value: 'item' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Unit Price', value: 'unit price' },
        { text: 'Total', value: 'total' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

   
  }
</script>