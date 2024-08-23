<script setup>
import {useUserStore} from '@/store/user'
import {useHeaderStore} from '@/store/header'

import LoginBanner from "./ui/LoginBanner.vue";

import ExploreCarousel from "./ui/carousel/ExploreCarousel.vue";

const user = useUserStore()
const header = useHeaderStore()

// TODO: remove this when the backend is ready
let games = [
  {
    id: '1',
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg',
    description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers.',
    likes: 0,
    rating: 10
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    description: 'Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.',
    likes: 0,
    rating: 10
  },
  {
    id: '1',
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg',
    description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers.',
    likes: 0,
    rating: 10
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    description: 'Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.',
    likes: 0,
    rating: 10
  },
  {
    id: '1',
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg',
    description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers.',
    likes: 0,
    rating: 10
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    description: 'Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.',
    likes: 0,
    rating: 10
  },
  {
    id: '1',
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg',
    description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers.',
    likes: 0,
    rating: 10
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    description: 'Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.',
    likes: 0,
    rating: 10
  },
  {
    id: '1',
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg',
    description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers.',
    likes: 0,
    rating: 10
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    description: 'Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.',
    likes: 0,
    rating: 10
  },
  {
    id: '1',
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Witcher_3_cover_art.jpg',
    description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers.',
    likes: 0,
    rating: 10
  },
  {
    id: '2',
    title: 'Cyberpunk 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    description: 'Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.',
    likes: 0,
    rating: 10
  },
]

</script>


<template>
  <LoginBanner v-if="!user.username"/>

  <ExploreCarousel :items="games" title="Top Rated Games"/>

  <ExploreCarousel :items="games" title="Recent Games"/>

  <ExploreCarousel :items="games" title="Popular Games"/>

</template>

<style scoped>

</style>