<template>
  <div class="table">
  <el-button type="button" @click="addTr()">添加</el-button>
   <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column label="序号" align="center">
        <template slot-scope="{row,$index}">
          <span>{{$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column label="名称"  prop="name"  align="center">
        <template slot-scope="{row,$index}">
        <!-- 默认显示  文字   -->
          <input class="edit-cell" v-if="showEdit[$index]"    v-model="row.name">
          <span v-if="!showEdit[$index]">{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row,$index}">
        <!-- 点击显示  更新与取消  true的时候显示   点击变成false -->
          <el-button type="text" size="small" @click="handleUpdate($index, row)" v-if="showBtn[$index]">更新</el-button>
          <el-button type="text" size="small" @click="handelCancel($index, row)" v-if="showBtn[$index]">取消</el-button>
          <!-- 默认显示 编辑与删除  false的时候显示  点击变成true -->
          <el-button type="text" size="small" @click="handleEdit($index, row)" v-if="!showBtn[$index]">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete($index, row)" v-if="!showBtn[$index]">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default{
  data() {
    return {
      showEdit: [false], //显示编辑框
      showBtn: [false],
      showBtnOrdinary: true,
      tableData:[
        {
          name:"test1",
          editeFlage:false
        },
        {
          name:"test2",
          editeFlage:false
        },
        {
          name:"test3",
          editeFlage:false
        },
        {
          name:"test4",
          editeFlage:false
        },
      ],
    }
},
  methods:{
    //点击编辑
    handleEdit(index, row) {
        this.showEdit[index] = true;
        this.showBtn[index] = true;
        this.$set(this.showEdit,index,true);
        this.$set(this.showBtn,index,true);
        console.log(this.showEdit)
    },
    //取消编辑
    handelCancel(index, row) {
      this.showEdit[index] = false;
      this.showBtn[index] = false;
      this.$set(this.showEdit,index,false);
      this.$set(this.showBtn,index,false);
    },

    //点击更新
    handleUpdate(index,row) {
      this.showEdit[index] = false;
      this.showBtn[index] = false;
      this.$set(this.showEdit,index,false);
      this.$set(this.showBtn,index,false);
      // this.tableData[index].name=""

    },
    //点击删除
    handleDelete(index, row) {
      // 遍历数组里面的json
      this.tableData.splice(index,1);
    },
    addTr(){
      var index = this.tableData.length;
      console.log(index);
      var addData = {
        name:'',
        editeFlage:false
      }
      this.tableData.push(addData);
      this.showEdit[index] = true;
      this.showBtn[index] = true;
      this.$set(this.showEdit,index,true);
      this.$set(this.showBtn,index,true);

    }
  }
}

</script>

<style>
.cell-edit-input .el-input, .el-input__inner {
  width:100px;
}
.cell-icon{
  cursor:pointer;
  color:#fff;
}
</style>