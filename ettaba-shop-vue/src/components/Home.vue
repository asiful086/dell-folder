<template>
    <default-layout>
        <div>
            <!-- hero section -->
            <div class="flex h-full flex-col md:flex-row">
                <!-- sidebar -->
                <div>
                    <!-- <CategorySidebarVue /> -->
                </div>
                <div
                    class="
                        pl-0
                        md:pl-5
                        pt-5
                        md:pt-0
                        ml-0
                        md:ml-2
                        h-[60vh]
                        w-full
                        bg-yellow-800
                    "
                    :style="{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }"
                ></div>
            </div>

            <!--  feature products-->
            <h1 class="font-bold text-center text-2xl my-5">Feature product</h1>
            <div class="mt-5 px-20">
                <Slick>
                    <!-- <a href="http://placehold.it/2000x1000"
                        ><img src="http://placehold.it/2000x1000" alt=""
                    /></a>
                    <a href="http://placehold.it/2000x1000"
                        ><img src="http://placehold.it/2000x1000" alt=""
                    /></a>
                    <a href="http://placehold.it/2000x1000"
                        ><img src="http://placehold.it/2000x1000" alt=""
                    /></a>
                    <a href="http://placehold.it/2000x1000"
                        ><img src="http://placehold.it/2000x1000" alt=""
                    /></a>
                    <a href="http://placehold.it/2000x1000"
                        ><img src="http://placehold.it/2000x1000" alt=""
                    /></a> -->
                </Slick>
            </div>
        </div>
    </default-layout>
</template>

<script>
import Slick from 'vue-slick'

export default {
    name: 'HomeComponent',
    components: { Slick },
    data() {
        return {
            settings: {
                wrapAround: true,
                itemsToShow: 5,
                itemsToScroll: 2,
                autoplay: 3000,
                transition: 3000,
                mouseDrag: true,
                pauseAutoplayOnHover: true,
                draggable: true,
                responsive: [
                    {
                        breakpoint: 1280,
                        settings: {
                            slidesToShow: 5,
                        },
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        },
                    },
                ],
            },
        }
    },
}
</script>
