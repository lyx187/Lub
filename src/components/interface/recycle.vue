<template>
	<div class="create">
		<h3>回收站</h3>
		<el-table :data="tableData" class="mt10">
			<el-table-column type="index" label="序号"></el-table-column>
			<el-table-column prop="name" label="名字"></el-table-column>
			<el-table-column prop="role" label="角色"></el-table-column>
			<el-table-column prop="state" label="状态"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="{row,$index}">
					<el-button type="text">同意</el-button>
					<el-button type="text">拒绝</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name:'people',
		data(){
			return{
				tableData:[{
					name:"Yuexiao Li",
					role:"admin",
					state:"申请进入",
					operation:"Yuexiao Li" 
				}]
			}
		},
		methods:{
			collapse: function () {
		        this.collapsed = !this.collapsed;
		      },
		      handleSelect(index){
		        this.defaultActiveIndex = index;
		      },
		}
	}
</script>

<style scoped lang='scss'>
	.box-card .el-card__header{
		padding: 10px 20px;
	}
	.box-card .el-card__body{
		padding: 10px 20px;
	}
	.item{
		text-align:right;
		line-height:25px;

		span{
			float:left;
		}
	}
</style>