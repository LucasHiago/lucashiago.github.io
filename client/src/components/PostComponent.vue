<template>
  <section class="container">
    <article>
      <h1>Lastest Posts</h1>
      <div class="create-post">
        <label for="create-post" class="post-label">Crie seu Post...</label>
        <input type="text" id="create-post" v-model="text" placeholder="Seu texto aqui!">
        <button class="btn-primary" v-on:click="createPost">Postar!</button>
      </div>
      <hr>
      <p class="error" v-if="error">{{error}}</p>
      <div class="posts-container">
        <div class="post" v-for="(post, index) in posts" v-bind:item="post" v-bind:index="index" v-bind:key="post._id"> 
          <button class="delete" v-bind:key="post._id" v-on:click="deletePost(post._id)">X</button>
          {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
          <p class="text">{{ post.text }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'PostComponent',
  data(){
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){
    try{
      this.posts = await PostService.getPosts();
    } catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async createPost(){
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<style scoped>

</style>
