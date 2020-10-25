<template>
<v-card class="mx-auto my-1" outlined>
    <v-list-item three-line>
        <v-list-item-content>
            <div class="overline mb-4">
                Spesialis {{data.specialty}}
            </div>
            <v-list-item-title class="headline mb-1">
                {{data.name}}
            </v-list-item-title>
            <v-list-item-subtitle>
                {{this.hospital}}<br>
                <template v-if="this.days">
                    Praktik hari {{this.days}} ({{this.startHour}}.00 - {{this.endHour}}.00)
                </template>
                <template v-else>
                    Unavailable
                </template>

            </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    created() {
        console.log(this.data)
        this.getSchedule()
    },
    data() {
        return {
            hospital: null,
            days: null,
            startHour: null,
            endHour: null,
        }
    },
    methods: {
        getSchedule() {
            this.axios
                .get('http://localhost:8081/api/schedules/?search=' + this.data._id)
                .then((response) => {
                    console.log(response.data)
                    this.days = this.intToDay(response.data[0].workSchedule.days)
                    this.startHour = response.data[0].workSchedule.startHour
                    this.endHour = response.data[0].workSchedule.endHour
                    this.getHospital(response.data[0].hospital)
                });
        },
        getHospital(hospital_id) {
            this.axios
                .get('http://localhost:8081/api/hospitals/' + hospital_id)
                .then((response) => {
                    console.log(response.data)
                    this.hospital = response.data.name
                });
        },
        intToDay(dayIndex) {
            return ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][dayIndex] || '';
        }
    },
    props: {
        data: null
    }
}
</script>
