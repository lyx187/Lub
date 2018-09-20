<template>
	<div class="edit">
		<el-row :gutter="24">
			<el-col :span="12">
				<h3>新建接口</h3>
			</el-col>
		</el-row>
		<el-row :gutter="24" class="mt20">
			<el-col :span="24">
				<el-col :span="3" class="formLabel">接口名称：</el-col>
				<el-col :span="18">
					<el-input  placeholder="请输入接口名称"></el-input>
				</el-col>
			</el-col>
			<el-col :span="24" class="mt10">
				<el-col :span="3" class="formLabel">
					接口地址：
				</el-col>
				<el-col :span="18">
					<el-input placeholder="请输入接口地址" class="input-with-select">
						<el-select v-model="interface.delivery" slot="prepend" placeholder="请选择">
							<el-option label="GET" value="1"></el-option>
							<el-option label="POST" value="2"></el-option>
							<el-option label="PUSH" value="3"></el-option>
							<el-option label="DELET" value="4"></el-option>
						</el-select>
					</el-input>
				</el-col>
			</el-col>
			<el-col :span="24" class="mt10">
				<el-col :span="3" class="formLabel">
					说明：
				</el-col>
				<el-col :span="18">
					<el-input  placeholder="说明"></el-input>
				</el-col>
			</el-col>
		</el-row>
		<el-row :gutter='24' class="p20">
			<el-tabs type="border-card">
				<el-tab-pane class="">
					<span slot="label">header</span>
					<el-button type="primary" size="small" @click="addData()">添加参数</el-button>
					<el-table :data="interface.data" border style="width:100%;margin-top:10px;">
						<el-table-column type="index" label="序号" width="120px">
						</el-table-column>
						<el-table-column prop="name" label="参数">
							<template slot-scope="{row,$index}">
								<el-input placeholder="请输入参数" v-if="showBtn[$index]" v-model="updateTxt[$index].name"></el-input>
								<span v-if="!showBtn[$index]">{{ row.name }}</span>
							</template>
						</el-table-column>
						<el-table-column  label="类型">
						<template slot-scope="{row,$index}">
							<span v-if="!showBtn[$index]">{{ row.typei }}</span>
					    <el-select v-model="dataType" placeholder="请选择活动区域" v-if="showBtn[$index]">
					      <el-option label="int" value="int"></el-option>
					      <el-option label="integer" value="integer"></el-option>
					      <el-option label="char" value="char"></el-option>
					      <el-option label="string" value="string"></el-option>
					    </el-select>
						</template>
							
						</el-table-column>
						<el-table-column label="说明">
							<template slot-scope="{row,$index}">
								<span v-if="!showBtn[$index]">{{ row.instructions }}</span>
								<el-input v-if="showBtn[$index]" v-model="updateTxt[$index].instructions"></el-input>
							</template>
						</el-table-column>
						<el-table-column label="操作" width="200px">
							<template slot-scope="{row,$index}">
								<el-button type="text" @click="handleEdit($index,row)" v-if="!showBtn[$index]" >编辑</el-button>
								<el-button type="text" @click="handelDelete($index,row)" v-if="!showBtn[$index]">删除</el-button>
								<el-button type="text" @click="handelUpdate($index,row)" v-if="showBtn[$index]">更新</el-button>
								<el-button type="text" @click="handelCancel($index,row)" v-if="showBtn[$index]">取消</el-button>
							</template>
						</el-table-column>
					</el-table> 
				</el-tab-pane>
				<el-tab-pane label="params">
					<el-button type="primary" size="small" class="mt10">添加参数</el-button>
					<br>
					<el-radio-group v-model="radio2" class="mt10">
						<el-radio :label="3">json</el-radio>
						<el-radio :label="6">FormData</el-radio>
						<el-radio :label="9">text</el-radio>
					</el-radio-group>
					<el-table :data="interface.data" style="width: 100%" class="mt10">
						<el-table-column type="index" label="序号" width="120px">
						</el-table-column>
						<el-table-column prop="name" label="参数">
						</el-table-column>
						<el-table-column prop="address" label="说明">
						</el-table-column>
					</el-table>
				</el-tab-pane>
				<el-tab-pane label="返回值">
					<el-button type="primary" size="small">添加参数</el-button>
					<el-table :data="interface.data" style="width: 100%">
						<el-table-column type="index" label="序号" width="100px">
						</el-table-column>
						<el-table-column prop="name" label="参数">
						</el-table-column>
						<el-table-column prop="address" label="说明">
						</el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>
		</el-row>
		<el-row :gutter="24" class="mt10">
			<el-col :span="6" :offset="9">
				<el-button type="primary" size="small">确认</el-button>
				<el-button type="success" size="small">保存</el-button>
				<el-button size="small"><router-link to="/interface/look">取消</router-link></el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'edit',
		data(){
			return{
				interface:{
					name:"商品查看",
					delivery:"GET",
					address:"http:/w3c.com",
					instructions:"根据id查看商品",
					data:[{
						name: '名称1',
						address: 'https://www.processon.com/diagrams',
						request:'GET',
						typei:'integer',
						instructions:"id",
						parameter:'复制',
						return:"复制",
						author:'Yuexiao Li',
						opera:'查看'
					},{
						name: '名称1',
						address: 'https://www.processon.com/diagrams',
						request:'GET',
						typei:'int',
						parameter:'复制',
						return:"复制",
						instructions:"id",
						author:'Yuexiao Li',
						opera:'查看'
					},{
						name: '名称1',
						address: 'https://www.processon.com/diagrams',
						request:'GET',
						typei:'int',
						parameter:'复制',
						return:"复制",
						author:'Yuexiao Li',
						instructions:"id",
						opera:'查看'
					}]
				},
				showBtn:[],
				updateTxt:[],
				radio2:"1",
				temp:[],
				dataType:''
			}
		},
		methods:{
			// edit
			handleEdit:function(index,row){
				// 将点击的那一行转换为  string
				let txt = JSON.stringify(this.interface.data[index]);
				// 赋值给updateTxt
				this.updateTxt[index] = JSON.parse(txt);
				// 单独赋值  数据类型
				this.dataType = this.interface.data[index].typei;
				// 赋值给temp 
				this.temp[index] = txt;
				this.showBtn[index] = true;
				this.$set(this.showBtn,index,true);
			},
			// cancel
			handelCancel:function(index,row){
				// 转换为json
				var json = JSON.parse(this.temp[index]);
				// f赋值给updateTxt   
				this.updateTxt[index] = this.temp[index]
				this.showBtn[index] = false;
				this.$set(this.showBtn,index,false);
			},
			// update 
			handelUpdate:function(index,row){
				this.interface.data[index] = this.updateTxt[index];
				this.showBtn[index] = false;
				this.interface.data[index].typei = this.dataType;
				this.$set(this.showBtn,index,false);
			},
			// delete
			handelDelete:function(index,row){
				this.interface.data.splice(index,1);
			},
			addData:function(){
				// 获取长度
				let len = this.interface.data.length;
				// 获取最后一个
				let json = this.interface.data[len-1];
				
				// 如果不是空，则添加，否则提示
				if(true){
					console.log("enter");
					// 定义添加的
					let str = {
						name:'',
						typei:"",
						instructions:""

					};
					this.interface.data.push(str) ;
				}else{
					alert("当前数据不完整")
				}
				// this.showBtn[len] = true;
				// this.$set(this.showBtn,len,true);
			}
		}
	}
</script>

<style scoped lang='scss'>
	.formLabel{
		text-align:right;
		line-height:30px;
	}
	.el-select{
		width:100px;
	}
</style>