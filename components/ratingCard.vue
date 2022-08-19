<script lang="ts" setup>
import { computed, ref, Ref } from 'vue'

import Button from 'primevue/button'
import Chip from 'primevue/chip'
import Rating from 'primevue/rating'
import { Book } from '~/data/books'

const props = defineProps<{
    book: Book,
    currentBook: number,
    maxBooks: number,
}>()

const emit = defineEmits([ 'next' ])

const rating: Ref<number> = ref(0)
const isLoading: Ref<boolean> = ref(false)

const progress: Ref<string> = computed(() => `${props.currentBook}/${props.maxBooks}`)
const buttonText: Ref<string> = computed(() => `Submit rating and ${props.currentBook < props.maxBooks ? 'rate next' : 'get recommendations'}`)

const stars = (): void => {
    isLoading.value = true
    setTimeout(() => {
        emit('next', rating.value)
        isLoading.value = false
        rating.value = 0
    }, 500)
}
</script>

<template>
    <Card class="card" :book="book">
        <template #header>
            <Chip class="warning-chip">
                {{ progress }}
            </Chip>
            <img alt="placeholder" :src="book.imgLarge"/>
        </template>
        <template #content>
            <p class="rate">Please rate this book:</p>
            <Rating v-model="rating" :cancel="false" :disabled="isLoading" :stars="10"></Rating>
        </template>
        <template #footer>
            <Button type="button" icon="pi pi-arrow-right" iconPos="right" :label="buttonText" :loading="isLoading"
                    @click="stars" :disabled="!rating"/>
        </template>
    </Card>
</template>

<style lang="scss" scoped>
button {
    width: 100%;
}

.p-chip.warning-chip {
    align-self: flex-end;
    margin-bottom: 1rem;
    background-color: var(--warning-color);
    color: var(--warning-text-color);
}

::v-deep(.p-card-content) {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
}

p.rate {
    margin-bottom: 0.25rem;
}
</style>