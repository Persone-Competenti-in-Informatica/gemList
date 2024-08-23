<script setup>
import '@jamescoyle/svg-icon'
import {mdiMenu, mdiClose, mdiMagnify, mdiCog, mdiHeartPlus} from "@mdi/js";

import {useRouter} from "vue-router";

const router = useRouter();

import {onMounted, ref, watch} from "vue";

import {useUserStore} from '@/store/user'
import {useHeaderStore} from '@/store/header'

const user = useUserStore()
const header = useHeaderStore()

const searchState = ref(false)
const menuState = ref(false)

const headerEl = ref(null)
const mainEl = ref(null)
const footerEl = ref(null)

function calculateMainHeight(setHeaderHeight) {
//   calculate the main height and put it in CSS
//   100svh - header height - footer height
  /** @type {HTMLElement} */
  const mainElement = mainEl.value
  if (setHeaderHeight) {
    mainElement.style.height = `calc(100vh - ${setHeaderHeight}px)`
  } else {
    /** @type {HTMLElement} */
    const headerElement = headerEl.value
    mainElement.style.height = `calc(100vh - ${headerElement.clientHeight}px)`
  }
}

watch(header, (newHeader, _) => {
  const expanded = newHeader.expanded
  calculateMainHeight(expanded ? 340 : 80)
})

onMounted(calculateMainHeight)

</script>

<template>
  <header :class="{ expanded: header.expanded, menuOpen: menuState }" ref="headerEl">
    <div class="content">
      <!--      {{  Open-Close burger button   }}-->
      <button class="has-icon" style="scale: 1.7;" @click="menuState = !menuState">
        <svg-icon v-if="!menuState" type="mdi" :path="mdiMenu"/>
        <svg-icon v-else type="mdi" :path="mdiClose"/>
      </button>
      <!--      {{  Center Title   }}-->
      <router-link to="/" class="title">gemList</router-link>
      <!--      {{  Search and Profile buttons   }}-->
      <div>
        <div class="search" :class="{ expanded: searchState }">
          <input type="text" placeholder="Search anything" id="search" ref="search"/>
          <button class="has-icon" style="scale: 1.4;" @click="e => {
            if (!searchState) searchState = true
            else {
              const searchValue = $refs.search.value

              console.log(searchValue)
            }
          }">
            <svg-icon type="mdi" :path="mdiMagnify"/>
          </button>
        </div>
        <button class="user" :title="user.username || 'Login'" @click="(() => {
          if (user.username) {
            router.push('/profile')
          } else {
            router.push('/login')
          }
        })">
          <img :src="user.avatar || ''" alt="User Avatar"/>
        </button>
        <a tabindex="0" class="has-icon button" style="scale: 1.3; display: inline-block">
          <svg-icon type="mdi" :path="mdiCog"/>
        </a>
      </div>
    </div>
    <component :is="header.content" v-if="header.expanded" class="header-info"/>
  </header>
  <left-menu :class="{ expanded: menuState }">
    <router-link to="/">gemList</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/explore">Explore</router-link>
    <router-link to="/calendar">Calendar</router-link>
    <divider/>
    <router-link to="/library">Library</router-link>
    <router-link to="/community">Community</router-link>
    <router-link to="/friends">Friends</router-link>
  </left-menu>
  <main ref="mainEl">
    <!--  TEST  -->
    <button @click="header.expanded = !header.expanded" style="position: absolute; ">
      Toggle Header Expand
    </button>
    <router-view/>
  </main>
</template>

<style scoped>
header {
  background-color: rgba(217, 217, 217, 0.12);
  color: #000;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;

  height: 80px;

  transition: .8s all;
  margin-bottom: 20px;

  & > .content {
    height: 80px;
    box-sizing: border-box;

    position: relative;

    padding: 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;

    z-index: 1;

    & > .title {
      font-weight: bold;
      letter-spacing: 4px;
      margin-right: -56px;
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 18px;
      position: relative;

      & > div.search {
        display: flex;
        align-items: center;
        position: absolute;
        left: calc(-33px - 40px);

        & > input {
          display: none;
        }

        padding: 8px;
        margin-right: -8px;

        &.expanded {
          background: #2F1212;
          width: 260px;
          box-sizing: border-box;
          left: calc(-260px - 40px + 7px);
          border-radius: 8px;
          padding-block: 0;

          & > input {
            display: block;
            width: 100%;
            padding: 8px;
            border: none;
            border-radius: 8px;

            background: none;


            border: none;
            outline: none;
          }

          & > button {
            color: rgba(217, 217, 217, 0.24);
          }
        }
      }

      & > .user {
        width: 34px;
        height: 34px;

        & > img {
          border-radius: 50%;
          width: 34px;
          height: 34px;
        }
      }
    }
  }

  &.menuOpen {
    transition: .2s border-radius;
    border-bottom-left-radius: 0;
  }

  &.expanded {
    height: 340px;

    --backgroundImage: url("https://avatars.githubusercontent.com/u/37927709?v=4");
    overflow: hidden;

    color: #fff;

    &:after {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      content: '';

      background-image: var(--backgroundImage);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      filter: brightness(0.3) blur(24px);
      transform: scale(1.1);

      z-index: -1;
    }

    & > .content:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 80%;
      height: 1px;
      background-color: #fff;
      z-index: 1;
    }

    & > div.header-info {
      padding: 1rem 4rem;

      margin-top: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: baseline;
      z-index: 1;

      position: relative;
      width: 1200px;
      margin-inline: auto;

      &.game-page {
        padding-left: 260px;
      }

      & > h3 {
        font-size: 1.4rem;
        font-weight: bold;
      }

      & > .game-page-buttons {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;

        position: absolute;
        right: 4rem;

        & > button {
          &:first-of-type {
            color: var(--primary);
            background: #D9D9D9;
            height: 28px;
            min-width: 120px;

            border-radius: 10px;
            padding: 0;
            padding-inline: 10px;

            font-size: 1.1rem;
            font-weight: bold;
          }

          &:last-of-type {
            color: var(--primary);
            background: #D9D9D9;
            width: 32px;
            height: 32px;
            line-height: 44px;
            border-radius: 10px;

            scale: .9;
          }
        }
      }
    }
  }
}

left-menu {
  display: block;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  max-width: 320px;

  height: calc(100% - 80px);
  margin-top: auto;

  background-color: rgba(217, 217, 217, 0.24);
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: .8s all;

  backdrop-filter: blur(10px);

  transform: translateX(-100%);

  &.expanded {
    transform: translateX(0);
  }

  & > a {
    display: block;
    padding: 1rem 2rem;

    width: 100%;

    text-decoration: none;

    box-sizing: border-box;

    position: relative;

    &:first-of-type {
      text-align: center;
      letter-spacing: 2px;
      font-weight: bold;
      font-size: 1.1rem;

      margin-bottom: 10px;

      &:after {
        content: '';
        display: block;
        width: 60%;
        height: 1px;
        background-color: #000;

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:not(:first-of-type) {
      transition: .2s all;

      &.router-link-active {
        background-color: #D9D9D9;
        color: #000;
        font-weight: bold;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  & > divider {
    display: block;
    height: 1px;
    width: 60%;
    margin-inline: auto;

    background: black;
  }
}

main {
  overflow: hidden;
}


</style>
