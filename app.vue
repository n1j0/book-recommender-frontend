<script lang="ts" setup>
import { Ref, ref } from 'vue'

import ToggleButton from 'primevue/togglebutton'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'

import { Book, booksRecommended, booksToRate } from '~/data/books'

import star from './assets/lotties/star.json'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()

const books: Ref<Book[]> = ref([])
const recommendations: Ref<Book[]> = ref([])
const darkMode: Ref<boolean> = ref(true)
const step: Ref<number> = ref(0)
const loading: Ref<boolean> = ref(false)
const currentBook: Ref<number> = ref(1)
const allBooks: Ref<number> = ref(5)
const age: Ref<number> = ref(25)

const changeTheme = () => { document.documentElement.className = `${ darkMode.value ? 'dark' : 'light' }-theme` }

const nextStep = async () => {
    if (step.value === 1) {
        loading.value = true
        try {
            books.value = await(await fetch(`${config.BACKEND_URL}books/initial/5`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json()
            loading.value = false
        } catch (e) {
            books.value = booksToRate
            loading.value = false
        }
    }
    step.value++
}

const nextBook = async (event) => {
    books.value[currentBook.value - 1].userRating = event
    if (currentBook.value < allBooks.value) {
        currentBook.value++
    } else {
        loading.value = true
        step.value++
        const ratings = books.value.map(b => ([b.ISBN, b.userRating]))
        try {
            const recommendedBooks = await(await fetch(`${config.BACKEND_URL}books/recommended`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ratings, 'age': age.value})
            })).json()
            recommendedBooks.forEach(t => ({
                ISBN: t.ISBN,
                rating: +t.rating.toFixed(0),
                location: '',
                title: t['Book-Title'],
                author: t['Book-Author'],
                publication: t['Year-Of-Publication'],
                publisher: t.Publisher,
                imgSmall: t['Image-URL-S'],
                imgMedium: t['Image-URL-M'],
                imgLarge: t['Image-URL-L'],
            }))
            recommendations.value = recommendedBooks
            loading.value = false
        } catch (e) {
            recommendations.value = booksRecommended
            loading.value = false
        }
    }
}

const animation = ref<HTMLElement>()
const defaultOptions = {
    animationData: star,
    loop: true,
    autoplay: true,
}
const handleAnimation = (anim: any) => {
    animation.value = anim
}
</script>
<template>
    <main class="container">
        <ToggleButton class="theme-switch" v-model="darkMode" onIcon="pi pi-sun" offIcon="pi pi-moon"
                      @change="changeTheme"/>
        <template v-if="step === 0">
            <template v-if="animation">
                <h1>Nice to see you!</h1>
                <p>Are you ready to get some book recommendations?
                    Together we will rate 5 books and with the help of your age you will get your perfect
                    suggestions.</p>
            </template>
            <lottie
                ref="animation"
                :options="defaultOptions"
                width="auto"
                height="50vh"
                @animCreated="handleAnimation"
            />
            <Button v-if="animation" type="button" icon="pi pi-arrow-right" iconPos="right" label="Let's go!"
                    @click="nextStep"/>
        </template>
        <template v-if="step === 1">
            <label for="horizontal">How old are you?</label>
            <InputNumber id="horizontal" v-model="age" showButtons buttonLayout="horizontal" :step="1"
                         decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success"
                         incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" :min="0"
                         :useGrouping="false" :disabled="loading"/>
            <Button type="button" :loading="loading" icon="pi pi-arrow-right" iconPos="right" label="Submit age and rate some books"
                    @click="nextStep"/>
        </template>
        <template v-if="step === 2">
            <RatingCard :current-book="currentBook" :max-books="allBooks" :book="books[currentBook-1]" @next="nextBook"/>
        </template>
        <template v-if="step === 3">
            <Recommendations :skeleton="loading" :books="JSON.parse(JSON.stringify(recommendations))"/>
        </template>
    </main>
</template>
<style lang="scss" scoped>
* {
    font-family: var(--font-family)
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .theme-switch {
        align-self: flex-end;
        margin-bottom: 2.5rem;
    }

    h1, p, label {
        color: var(--text-color);
    }

    h1, p {
        text-align: center;
    }

    label {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    button {
        margin-top: 1.5rem;
    }
}
</style>
