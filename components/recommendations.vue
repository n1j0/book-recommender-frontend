<script lang="ts" setup>
import Skeleton from 'primevue/skeleton'

import { Book } from '~/data/books'

const props = defineProps<{
    books: Book[],
    skeleton: boolean,
}>()
</script>

<template>
    <div class="recommendations">
        <template v-if="skeleton">
            <div v-for="i in 5" class="custom-skeleton">
                <div class="image">
                    <Skeleton width="60%" height="15rem"></Skeleton>
                </div>
                <Skeleton class="title" width="100%" height="2.25rem"></Skeleton>
                <Skeleton class="author" width="15rem" height="1.2rem"></Skeleton>
                <Skeleton class="publisher" width="10rem" height="1.2rem"></Skeleton>
                <Skeleton width="95%" height="1.5rem"></Skeleton>
            </div>
        </template>
        <Card v-else v-for="book in books" :book="book"/>
    </div>
</template>

<style lang="scss" scoped>
.recommendations {
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.25rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
}

.custom-skeleton {
    width: 20rem;
    padding: 1.25rem;
    background: var(--surface-card);
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    border-radius: 6px;

    @media (min-width: 992px) {
        width: 22.5rem;
    }

    .image {
        display: flex;
        justify-content: center;
        margin-bottom: 1.25rem;
    }

    .title {
        margin-bottom: 0.5rem;
    }

    .author {
        margin-bottom: 0.25rem;
    }

    .publisher {
        margin-bottom: 1rem;
    }
}
</style>