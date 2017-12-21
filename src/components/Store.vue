const Store = () => Promise.resolve({ 
	<template>
	  <el-row :gutter="10">
	  	<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
	  		<el-row :gutter="20">
	  		  <el-col :span="12" :offset="6">
	  		  	<div class="grid-content bg-purple">
	  		  	  <div style="margin-top: 15px;">
	  		  	    <el-input placeholder="Please input pincode" v-model="searchTerm" class="input-with-select">
	  		  	      <el-button slot="append" icon="el-icon-search"></el-button>
	  		  	    </el-input>
	  		  	  </div>
	  		    </div>
	  		  </el-col>
	  		</el-row>
	  		<hr v-if="filteredData.length>0">
	  		<el-row :gutter="20" v-if="filteredData.length>0">
	  		  <el-col :span="24">
		  		<el-table
			      :data="filteredData"
			      style="width: 100%">
			      <el-table-column
			        prop="pincode"
			        label="Pincode"
			        width="100">
			      </el-table-column>
			      <el-table-column
			        prop="officename"
			        label="Location"
			        width="120">
			      </el-table-column>
			      <el-table-column
			        prop="taluk"
			        label="Taluk"
			        width="120">
			      </el-table-column>
			      <el-table-column
			        prop="circlename"
			        label="Circle"
			        width="120">
			      </el-table-column>
			      <el-table-column
			        prop="regionname"
			        label="Region"
			        width="120">
			      </el-table-column>
			      <el-table-column
			        prop="divisionname"
			        label="Division"
			        width="120">
			      </el-table-column>
			      <el-table-column
			        prop="districtname"
			        label="District"
			        width="150">
			      </el-table-column>
			      <el-table-column
			        prop="statename"
			        label="State"
			        >
			      </el-table-column>
			    </el-table>
			  </el-col>
			</el-row>
	  	</el-col>
	  </el-row>
	</template>

	<script>
		import { mapGetters } from 'vuex'

		export default {
		  data () {
		    return {
		      searchTerm: ''
		    }
		  },
		  computed: {
		    ...mapGetters([
		      'getPincodes'
		      // ...
		    ]),
		    filteredData: function () {
		      var searchTerm = this.searchTerm
		      return this.getPincodes.filter(function (pincode) {
		        if (searchTerm !== '') {
		          return parseInt(searchTerm) === pincode.pincode
		        }
		      })
		    }
		  }
		}
	</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>

	</style>

})
