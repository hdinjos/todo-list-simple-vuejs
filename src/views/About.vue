<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>Add Task</h2>
    <input v-model="newTask" type="text" placeholder="input some task"/>
    <button @click="addTask">Add</button>

    <h2>Todos Task</h2>
    <ul v-for="(task, index) in tasks" :key="index">
      <li>
        {{editIndex !== index ? task : null}} <input v-if="editIndex === index" v-model="editInput" type="text"/>
        <button @click="delTask(index)">Delete</button>
        <button @click="saveEdit(index)" v-if="editIndex === index">Save</button>
        <button v-if="editIndex !== index" @click="editTask(index)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        tasks: ["Makan", "Minum", "Makan"],
        newTask: '',
        editInput: '',
        editIndex: true
      }
    },
    methods: {
      addTask: function(){
        this.tasks.push(this.newTask);
      },
      delTask: function(index){
        this.tasks.splice(index, 1);
      },
      editTask: function(index){
        this.editIndex = index;
        this.editInput = this.tasks[index];
        console.log(this.editInput);
        console.log(this.editIndex);
      },
      saveEdit: function(index){
        this.tasks[index] = this.editInput;
        console.log(this.tasks);
        this.editIndex = true;
      }
    }
  }
</script>
