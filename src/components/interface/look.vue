<template>
	<div class="look">
		<el-row :gutter="24">
			<el-col :span="12">
				<h3><router-link to="/interface/group"><i class="fa fa-mail-reply mr5" aria-hidden="true"></i>Lub 项目组</router-link></h3>
			</el-col>
			
		</el-row>
		<el-row :gutter="24" class="mt20">
			<el-col :span="3" >
				<router-link to="/interface/edit"><el-button type="primary" size="small" plain to="/interface/edit"><i class="fa fa-plus mr5" aria-hidden="true"></i>新建接口</el-button></router-link>
			</el-col>
			<el-col :span="10" class="pull-right">
			<el-input placeholder="请输入查找接口的名称" class="input-with-select">
					<el-select v-model="select" slot="prepend" placeholder="" style="width: 120px;">
						<el-option label="模块1" value="1"></el-option>
						<el-option label="模块2" value="2"></el-option>
						<el-option label="模块3" value="3"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-col>
		</el-row>
		<el-col :span="24" class="mt20">
			<el-table :data="tableData" tripe  style="width: 100%" :row-class-name="getIndex" >
				<el-table-column type="index" prop='index' label="序号" width="50" align="center"></el-table-column>
				<el-table-column prop="name" label="接口名称" width="150"></el-table-column>
				<el-table-column prop="address" label="接口地址" width="300"></el-table-column>
				<el-table-column prop="request" label="请求类型" align="center"></el-table-column>
				<el-table-column prop="type" label="参数类型" align="center"></el-table-column>
				<el-table-column label="参数" align="center">
					<template slot-scope="{row,$index}">
						<el-button type="text"  @click="doCopy($index)">复制</el-button>
					</template>
				</el-table-column>
				<el-table-column label="返回值" align="center">
					<template slot-scope="scope">
						<el-button type="text">复制</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="author" label="作者" align="center"></el-table-column>
				<el-table-column prop="opera" label="操作" width="100" align="center">
					<template slot-scope="scope">
						<router-link to="show"><el-button type="text">查看</el-button></router-link>
						<el-button type="text">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block" style="text-align:center;margin-top:30px;">
				<el-pagination
				layout="prev, pager, next"
				:total="78">
			</el-pagination>
		</div>
	</el-col>
</div>
</template>

<script>
	export default {
		name:'look',  
		data(){
			return{
				message:'a',
				flag:false,
				select:"模块1",
				tableData: [{
					name: '名称1',
					address: 'https://www.processon.com/diagrams',
					request:'GET',
					type:'json',
					author:'Yuexiao Li'
				}, {
					name: '名称2',
					address: 'https://www.processon.com/diagrams',
					request:'GET',
					type:'json',
					author:'Yuexiao Li'
				}, {
					name: '名称3',
					address: 'https://www.processon.com/diagrams',
					request:'GET',
					type:'json',
					author:'Yuexiao Li'
				}, {
					name: '名称4',
					address: 'https://www.processon.com/diagrams',
					request:'GET',
					type:'json',
					author:'Yuexiao Li'
				}],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods:{
			doCopy: function (index) {
				this.message =  JSON.stringify(this.tableData[index]) ;
				this.$copyText(this.message).then(function (e) {
					alert('Copied')
				}, function (e) {
					alert('Can not copy')
					console.log(e)
				})

			}

		}
	}
</script>

<style scoped lang='scss'>
	
</style>







