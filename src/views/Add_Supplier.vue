<template>
    <v-card>
        <v-card-title>Add Supplier</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form>
                 <v-text-field  label="Supplier Name" outlined type="name"></v-text-field>
                 <v-text-field label="Supplier Email" outlined type="email"></v-text-field>
                 <v-text-field label="Supplier Mobile" outlined type="number"></v-text-field>
                 <v-textarea label="Supplier Address" outlined></v-textarea>
                 <v-spacaer></v-spacaer>
                 <div class="button">
                 <v-btn color="teal lighten-3" rounded>save</v-btn>

                 <v-btn color="teal lighten-3" rounded>Save And Add Another</v-btn>
                 </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>
