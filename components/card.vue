<script lang="ts" setup>
import Card from 'primevue/card'
import Rating from 'primevue/rating'
import { Book } from '~/data/books'

const props = defineProps<{
    book: Book,
}>()

</script>

<template>
    <Card class="card">
        <template #header>
            <slot v-if="$slots.header" name="header"/>
            <img v-else alt="placeholder" :src="book.imgLarge"/>
        </template>
        <template #title>
            {{ book.title }}
        </template>
        <template #subtitle>
            <span>{{ book.author }} - {{ book.publication }}</span><br/>
            <span>{{ book.publisher }}</span>
        </template>
        <template #content>
            <slot v-if="$slots.content" name="content"/>
            <Rating v-else :modelValue="book.rating" :readonly="true" :cancel="false" :stars="10"></Rating>
        </template>
        <template v-if="$slots.footer" #footer>
            <slot name="footer"/>
        </template>
    </Card>
</template>

<style lang="scss" scoped>
.card {
    width: 20rem;

    @media (min-width: 992px) {
        width: 22.5rem;
    }

    ::v-deep(.p-card-header) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.25rem 1.25rem 0;
    }

    img, ::v-deep(img) {
        max-height: 15rem;
        width: auto;
    }

    ::v-deep(.p-card-content) {
        padding: 0 !important;
    }
}

::v-deep(.p-readonly) {
    margin-top: 2rem;

    * {
        cursor: default;
    }
}
</style>