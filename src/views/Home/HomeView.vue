<template>
  <div>
    <v-container v-if="!showResult">
      <p>
        Verdeel over elke vraag: 4 , 3, 2, 1 punten. Waarbij 4 de hoogste waarde en 1 de laagste waarde heeft.
      </p>

      <div class="question">
        1.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Aardig" v-model="s[0]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Straight" v-model="d[0]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Beleefd" v-model="c[0]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Innemend" v-model="i[0]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        2.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Enthousiast" v-model="i[1]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Cooperatief" v-model="c[1]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Onafhankelijk" v-model="d[1]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Hulpvaardig" v-model="s[1]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        3.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Avontuurlijk" v-model="d[2]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Evenwichtig" v-model="c[2]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Vrolijk" v-model="i[2]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Zorgzaam" v-model="s[2]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        4.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Moedig" v-model="d[3]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Onderhoudend" v-model="i[3]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Vertrouwenwekkend" v-model="s[3]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Voorzichtig" v-model="c[3]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        5.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Oplettend" v-model="c[4]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Vastbesloten" v-model="d[4]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Speels" v-model="i[4]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Gematigd" v-model="s[4]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        6.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Visionair" v-model="i[5]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Praktisch" v-model="s[5]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Besluitvaardig" v-model="d[5]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Analytisch" v-model="c[5]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        7.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Stipt" v-model="c[6]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Productief" v-model="d[6]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Behulpzaam" v-model="i[6]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Loyaal" v-model="s[6]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        8.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Optimistisch" v-model="i[7]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Gedisciplineerd" v-model="c[7]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Dynamisch" v-model="d[7]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Meegaand" v-model="s[7]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        9.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Openhartig" v-model="d[8]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Spraakzaam" v-model="i[8]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Beheerst" v-model="s[8]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Gedetailleerd" v-model="c[8]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        10.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Voorspelbaar" v-model="c[9]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Genereus" v-model="i[9]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Beslist" v-model="d[9]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Goedhartig" v-model="s[9]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        11.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Geestig" v-model="i[10]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Beleefd" v-model="c[10]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Kalm" v-model="s[10]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Krachtig" v-model="d[10]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        12.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Planner" v-model="c[11]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Snel" v-model="d[11]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Communicatief" v-model="i[11]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Tolerant" v-model="s[11]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        13.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Vriendelijk" v-model="s[12]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Bescheiden" v-model="c[12]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Confronterend" v-model="d[12]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Gezellig" v-model="i[12]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        14.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Multitasker" v-model="d[13]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Grondig" v-model="c[13]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Netwerker" v-model="i[13]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Geduldig" v-model="s[13]"></v-text-field>
      </div>

      <v-divider />
      <br />

      <div class="question">
        15.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Vooruitziend" v-model="d[14]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Inspirerend" v-model="i[14]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Betrouwbaar" v-model="s[14]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Precies" v-model="c[14]"></v-text-field>

      </div>

      <v-divider />
      <br />

      <div class="question">
        16.<br /><br />

        <v-text-field :rules="rules" type="number" dense solo label="Geduldig" v-model="s[15]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Beinvloedend" v-model="i[15]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Punctueel" v-model="c[15]"></v-text-field>
        <v-text-field :rules="rules" type="number" dense solo label="Direct" v-model="d[15]"></v-text-field>

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
