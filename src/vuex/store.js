import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  pincodes: [
    {
      'officename': 'Netajinagar B.O',
      'pincode': 744207,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Hut Bay',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Tushnabad B.O',
      'pincode': 744103,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Uttara B.O',
      'pincode': 744209,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Rangat',
      'districtname': 'North And Middle Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Vivekandapur B.O',
      'pincode': 744207,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Hut Bay',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Wandoor B.O',
      'pincode': 744103,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Weby B.O',
      'pincode': 744204,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Mayabander',
      'districtname': 'North And Middle Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Aerial Bay B.O',
      'pincode': 744202,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Diglipur',
      'districtname': 'North And Middle Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Beodnabad B.O',
      'pincode': 744105,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Bimbiton B.O',
      'pincode': 744105,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Brijgunj B.O',
      'pincode': 744103,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Calicut B.O',
      'pincode': 744105,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Champin B.O',
      'pincode': 744303,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Nancowrie',
      'districtname': 'Nicobar',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Chouldari B.O',
      'pincode': 744103,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Chowra B.O',
      'pincode': 744303,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Nancowrie',
      'districtname': 'Nicobar',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Dundas Point B.O',
      'pincode': 744206,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Ferrargunj',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Gandhinagar B.O',
      'pincode': 744302,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Nancowrie',
      'districtname': 'Nicobar',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Guptapara B.O',
      'pincode': 744103,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Havelock  Bazar B.O',
      'pincode': 744211,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Port Blair',
      'districtname': 'South Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    },
    {
      'officename': 'Hathilevel B.O',
      'pincode': 744202,
      'officetype': 'B.O',
      'Deliverystatus': 'Delivery',
      'divisionname': 'A - N Islands',
      'regionname': 'Calcutta HQ',
      'circlename': 'West Bengal',
      'taluk': 'Diglipur',
      'districtname': 'North And Middle Andaman',
      'statename': 'ANDAMAN & NICOBAR ISLANDS'
    }
  ]
}

const mutations = {
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
