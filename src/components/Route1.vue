<template>
  <p>Route 1 has el-autocomplete and lots of DOM items</p>
  <el-autocomplete placeholder="Placeholder"></el-autocomplete>
  <div v-for="index in 10000"> {{ index }} </div>
</template>
