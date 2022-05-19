<template>
    <div>
        <v-container v-if="!showResult">
            <p>
                Verdeel over elke vraag: 4 , 3, 2, 1 punten. Waarbij 4 de hoogste waarde en 1 de laagste waarde heeft.
            </p>

            <div class="question">
                1.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Aardig" v-model="s[0]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Straight" v-model="d[0]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Beleefd" v-model="c[0]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Innemend" v-model="i[0]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                2.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Enthousiast" v-model="i[1]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Cooperatief" v-model="c[1]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Onafhankelijk" v-model="d[1]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Hulpvaardig" v-model="s[1]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                3.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Avontuurlijk" v-model="d[2]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Evenwichtig" v-model="c[2]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Vrolijk" v-model="i[2]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Zorgzaam" v-model="s[2]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                4.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Moedig" v-model="d[3]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Onderhoudend" v-model="i[3]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Vertrouwenwekkend" v-model="s[3]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Voorzichtig" v-model="c[3]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                5.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Oplettend" v-model="c[4]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Vastbesloten" v-model="d[4]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Speels" v-model="i[4]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Gematigd" v-model="s[4]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                6.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Visionair" v-model="i[5]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Praktisch" v-model="s[5]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Besluitvaardig" v-model="d[5]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Analytisch" v-model="c[5]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                7.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Stipt" v-model="c[6]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Productief" v-model="d[6]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Behulpzaam" v-model="i[6]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Loyaal" v-model="s[6]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                8.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Optimistisch" v-model="i[7]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Gedisciplineerd" v-model="c[7]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Dynamisch" v-model="d[7]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Meegaand" v-model="s[7]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                9.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Openhartig" v-model="d[8]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Spraakzaam" v-model="i[8]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Beheerst" v-model="s[8]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Gedetailleerd" v-model="c[8]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                10.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Voorspelbaar" v-model="c[9]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Genereus" v-model="i[9]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Beslist" v-model="d[9]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Goedhartig" v-model="s[9]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                11.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Geestig" v-model="i[10]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Beleefd" v-model="c[10]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Kalm" v-model="s[10]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Krachtig" v-model="d[10]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                12.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Planner" v-model="c[11]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Snel" v-model="d[11]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Communicatief" v-model="i[11]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Tolerant" v-model="s[11]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                13.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Vriendelijk" v-model="s[12]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Bescheiden" v-model="c[12]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Confronterend" v-model="d[12]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Gezellig" v-model="i[12]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                14.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Multitasker" v-model="d[13]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Grondig" v-model="c[13]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Netwerker" v-model="i[13]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Geduldig" v-model="s[13]"></v-select>
            </div>

            <v-divider />
            <br />

            <div class="question">
                15.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Vooruitziend" v-model="d[14]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Inspirerend" v-model="i[14]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Betrouwbaar" v-model="s[14]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Precies" v-model="c[14]"></v-select>

            </div>

            <v-divider />
            <br />

            <div class="question">
                16.<br /><br />

                <v-select dense solo :items="[1,2,3,4]" label="Geduldig" v-model="s[15]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Beinvloedend" v-model="i[15]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Punctueel" v-model="c[15]"></v-select>
                <v-select dense solo :items="[1,2,3,4]" label="Direct" v-model="d[15]"></v-select>

            </div>

            <br />


            <p v-if="!isValid">Vul eerst alle vragen correct in.</p>
            <v-btn :disabled="!isValid" @click="showResult = true">Resultaten tonen</v-btn>

        </v-container>

        <v-container v-if="showResult" >
            <span class="d">D</span> {{ dTotal }} |
            <span class="i">I</span> {{ iTotal }} |
            <span class="s">S</span> {{ sTotal }} |
            <span class="c">C</span> {{ cTotal }} |
            <radar-chart :data="[dTotal,iTotal,sTotal,cTotal]"/>
        </v-container>

    </div>
</template>

<script lang="ts" src="./HomeView.ts" />
<style lang="scss" src="./HomeView.scss" scoped />
