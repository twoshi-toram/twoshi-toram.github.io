<template>
  <v-container class="content">
    <v-row>
      <v-col>
        <v-card elevation="0">
          <v-row v-if="!petList || !petList.length" class="px-3 py-2">
            <v-col
              v-if="!petList || !petList.length"
              cols="12"
              class="font-weight-bold">
                {{zeroResultMessage}}
            </v-col>
          </v-row>
          <v-row
            v-else
            class="px-3">
            <v-col
                cols="2"
                class="font-weight-bold">
                  平均販売額
              </v-col>
              <v-col cols="4">
                  <span class="font-weight-bold text-h4">{{averagePrice}}</span>
                  <span class="text-caption">スピナ</span>
              </v-col>
              <v-col
                cols="2"
                class="font-weight-bold">
                  販売額下限/上限
              </v-col>
              <v-col cols="4">
                  <span class="font-weight-bold text-h4">{{minPrice}}~</span>
                  <span class="font-weight-bold text-h6">{{maxPrice}}</span>
                  <span class="text-caption">スピナ</span>
              </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pt-3">
      <v-col>
        <v-card elevation="0">
          <v-row class="px-3">
            <v-col>
              <v-text-field
                v-model="petName"
                label="名前 (部分一致)"
                clearable></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="weapon"
                :items="weaponList"
                menu-props="auto"
                hide-details
                label="攻撃"
                clearable
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="type"
                :items="typeList"
                menu-props="auto"
                hide-details
                label="タイプ"
                clearable
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="character"
                :items="characterList"
                menu-props="auto"
                hide-details
                label="性格"
                clearable
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="listingTarget"
                :items="listingTargetList"
                menu-props="auto"
                hide-details
                label="出品先"
                clearable
              ></v-select>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="petList"
          :loading="loading"
          loading-text="Loading... Please wait"
        >
          <template v-slot:[`item.price`]="{item}">
            {{item.price.toLocaleString()}}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import axios from 'axios'
export default {
  name: 'petMarketIndexPage',
  data() {
    return {
      headers: [
        { text: "名前", value: "name", width: "10%" },
        { text: "攻撃", value: "weapon", width: "3%" },
        { text: "タイプ", value: "type", width: "3%" },
        { text: "性格", value: "character", width: "3%" },
        { text: "出品先", value: "listing_target", width: "3%" },
        { text: "販売額(スピナ)", value: "price", width: "10%" },
        { text: "登録日", value: "created_date", width: "5%"  }
      ],
      rawPetList: [],
      loading: false,
      zeroResultMessage: "1件以上の検索結果が存在する場合、「平均販売額」「販売額下限/上限」が表示されます",
      petName: "",
      weapon: "",
      weaponList: ["片手剣", "両手剣", "弓", "自動弓", "杖", "魔道具", "手甲"],
      character: "",
      characterList: ["猛進",	"積極",	"勇敢",	"献身",	"俊敏",	"温和",	"熱血",	"知的",	"剛健",	"正義",	"堅実",	"狡猾",	"臆病",	"静穏"],
      type: "",
      typeList: ["天才", "器用貧乏", "物理攻撃", "物理防御", "命中", "回避", "魔法攻撃", "魔法防御", "スキル強化", "平凡"],
      listingTarget: "",
      listingTargetList: ["国内", "国際"]
    }
  },
  created() {
    this.loading = true;
    axios.get("https://script.google.com/macros/s/AKfycbzCLK58S1yXkBCd-jSLV7qqhovtmy6hxBNDSKDOzIwSbz8QvBQgkdIZUxuFsKygmYNZAg/exec")
    .then(res => {
      this.rawPetList = res.data;
    })
    .finally(() => this.loading = false)
  },
  computed: {
    petList() {
      return this.rawPetList
      .filter(pet => 
        (!this.petName || (this.petName && pet.name.indexOf(this.petName) > -1))
        && (!this.weapon || (this.weapon && pet.weapon === this.weapon))
        && (!this.type || (this.type && pet.type === this.type))
        && (!this.character || (this.character && pet.character === this.character))
        && (!this.listingTarget || (this.listingTarget && pet.listing_target === this.listingTarget)));
    },
    priceList() {
      return this.petList.map(pet => pet.price);
    },
    averagePrice() {
      let sum = 0;
      for (let i = 0; i < this.priceList.length; i++) {
        sum += this.priceList[i];
      }
      return Math.floor(sum / this.priceList.length).toLocaleString();
    },
    minPrice() {
      return Math.min.apply(null, this.priceList).toLocaleString();
    },
    maxPrice() {
      return Math.max.apply(null, this.priceList).toLocaleString();
    }
  }
}
</script>

<style scoped>
.content {
  max-width: 1200px;
}
</style>
