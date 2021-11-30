<template>
    <div>
        <DefaultHeader />
        <DefaultSidebar />
        <div>
            <slot />
        </div>
        <DefaultFooter />
    </div>
</template>
<script>
import DefaultHeader from './Header.vue'
import DefaultSidebar from './Sidebar.vue'
import DefaultFooter from './Footer.vue'

export default {
    name: 'DefaultLayout',
    components: {
        DefaultHeader,
        DefaultSidebar,
        DefaultFooter,
    },
}
</script>
