<template>
  <div class="slide">

    <div class="display">
      <img v-for="(image, index) in images"
      :key="index"
      :class="{'image': true, 'active': index === currentImage}"
      :src="image">
    </div>

    <div class="control">
      <div class="left" @click="previous">
        <span><</span>
      </div>
      <div class="right" @click="next">
        <span>></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    images: {
      required: true,
      type: Array
    }
  },

  data() {
    return {
      currentImage: 0
    }
  },

  methods: {
    next() {
      if (this.currentImage + 1 > this.images.length - 1) {
        this.currentImage = 0
        return
      }
      this.currentImage += 1
    },
    previous() {
      if (this.currentImage - 1 < 0) {
        this.currentImage = this.images.length - 1
        return
      }
      this.currentImage -= 1
    }
  }
}
</script>

<style lang="scss">
.display {
  overflow: hidden;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  .image {
    display: none;
    width: 100%;
    max-width: 100%;
    &.active {
      display: block;
    }
  }
}
.control {
  width: 400px;
  margin: 0 auto;
}

.control {
  .left,
  .right {
    display: inline-block;
    span {
      font-size: 24px;
      line-height: 36px;
      padding: 15px;
      margin: 10px;
      cursor: pointer;
    }
    &:hover {
      font-weight: 700;
    }
  }
}
</style>


