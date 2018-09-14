<template>
	<div class="show">
		<h3 style="line-height:50px;">接口名称   <router-link to="/interface/edit" class="pull-right">编辑</router-link></h3>
		<el-form label-position="right" label-width="80px" :model="formLabelAlign">
			<el-form-item label="接口：">
				<el-input  readonly value="hhifksdjk">
					<template slot="append">{{ interface_type }}</template>
				</el-input>
			</el-form-item>
			<el-form-item label="参数：">
				<el-table :data="interface.tableData" border style="width: 100%">
					<el-table-column type="index" label="序号" width="50px"> </el-table-column>
					<el-table-column prop="name" label="类型" width="180"> </el-table-column>
					<el-table-column prop="parameter" label="参数"></el-table-column>
					<el-table-column prop="request" label="说明"></el-table-column>
					<el-table-column label="操作" width="80px">
						<template slot-scope="{row,$index}">
							<el-button type="text">复制</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-form-item>
			<el-form-item label="头文件：">
				<el-table :data="interface.tableData" border style="width: 100%" slot-scope="{row,$index}">
					<el-table-column type="index" label="序号" width="50px"> </el-table-column>
					<el-table-column prop="name" label="类型" width="180"> </el-table-column>
					<el-table-column prop="parameter" label="参数"></el-table-column>
					<el-table-column prop="request" label="说明"></el-table-column>
					<el-table-column label="操作" width="80px">
						<template slot-scope="{row,$index}">
							<el-button type="text">复制</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-form-item>
			<el-form-item label="返回值：">
				<el-table :data="interface.tableData" border style="width: 100%">
					<el-table-column type="index" label="序号" width="50px"> </el-table-column>
					<el-table-column prop="name" label="类型" width="180"> </el-table-column>
					<el-table-column prop="parameter" label="参数"></el-table-column>
					<el-table-column prop="request" label="说明"></el-table-column>
					<el-table-column label="操作" width="80px">
						<template slot-scope="{row,$index}">
							<el-button type="text">复制</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name:'show',
		data(){
			return{
				select:'GET',
				radio2: 3,
				interface_type:"GET",
				formLabelAlign:{

				},
				interface:{
					tableData: [{
						name: '名称1',
						request:'GET',
						type:'json',
						parameter:'{"":""}',
						return:"复制",
						author:'Yuexiao Li',
						opera:'查看'
					}],
				},
				
			}
		},
		methods:{

		}
	}
</script>

<style scoped lang='scss'>
	.el-form-item{
		margin-bottom: 10px;
	}
	.el-table td, .el-table th{
		padding: 3px 0;
	}
	h3 .pull-right{
		color: #409EFF;
		font-weight: normal;
		font-size: 12px;
	}
</style>