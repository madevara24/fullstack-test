<template>
<v-container>
    <v-row no-gutters>
        <v-row no-gutters>
            <v-col v-for="(doctor, index) in doctors" :key="index" cols="12" sm="12">
                <DoctorCard :data="doctor" />
            </v-col>
        </v-row>
    </v-row>
</v-container>
</template>

<script>
import DoctorCard from "../components/DoctorCard";

export default {
    created() {
        console.log('Doctors')
        this.axios
            .get('http://localhost:8081/api/doctors?search=')
            .then((response) => {
                this.doctors = response.data
                console.log(response.data)
            });
    },
    components: {
        DoctorCard
    },
    data() {
        return {
            doctors: []
        }
    },
    methods: {

    },
}
</script>
