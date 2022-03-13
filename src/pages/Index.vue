<template>
  <q-page class="">
    <!-- Carousal Section -->
    <q-carousel
      arrows
      animated
      control-type="push"
      v-model="slide"
      height="90vh"
    >
      <q-carousel-slide
        name="first"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">
            "Ramadan is the month in which was sent down the Qur’an as a guide
            to mankind, also Clear Signs for guidance and judgment between right
            and wrong." (- Al-Baqarah, 2:185).
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Collections -->

    <section
      class="
        section
        feature-section
        twmax-w-7xl
        twmx-auto
        twpx-4
        twsm:px-6
        twlg:px-8
      "
    >
      <div class="tww-100 twpy-16 twsm:py-24 twlg:py-32">
        <h2 class="twtext-2xl twfont-extrabold twtext-gray-900 twtext-center">
          Features
        </h2>

        <div
          class="
            twmt-6
            twflex twflex-wrap
            twjustify-center
            twitems-center
            twgap-4
            twpx-6
          "
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="twgroup twmax-w-md twrelative"
          >
            <div
              class="
                twrelative
                tww-full
                twh-80
                twbg-white
                twrounded-lg
                twoverflow-hidden
                twsm:h-64
              "
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="tww-full twh-full twobject-center twobject-cover"
              />
            </div>
            <h3 class="twmt-6 twtext-sm twtext-gray-500">
              <a :href="callout.href">
                <span class="twabsolute twinset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p class="twtext-base twfont-semibold twtext-gray-900">
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <!-- <section class="section feature-section">
      <p class="font-bold">Feature Section</p>

      <div class="q-pa-md row items-start q-gutter-md">
        <div class="feature-container">
          <q-card class="feature-card text-center q-mx-md">
            <q-icon size="lg" name="style" />
            <p class="text-h4 q-mt-md">Iftar/Sehar</p>
            <p class="text-body1">Body</p>
          </q-card>
          <q-card class="feature-card text-center q-mx-md">
            <q-icon size="lg" name="style" />
            <p class="text-h4 q-mt-md">Calenders</p>
            <p class="text-body1">Body</p>
          </q-card>
          <q-card class="feature-card text-center q-mx-md">
            <q-icon size="lg" name="style" />
            <p class="text-h4 q-mt-md">Prayer Times</p>
            <p class="text-body1">Body</p>
          </q-card>
          <q-card class="feature-card text-center q-mx-md">
            <q-icon size="lg" name="style" />
            <p class="text-h4 q-mt-md">Quran</p>
            <p class="text-body1">Body</p>
          </q-card>
        </div>
      </div>
    </section> -->

    <!-- Footer Section -->
    <section class="section footer-section">
      <p>Footer</p>
    </section>

    <!-- Footer -->
    <!-- <q-footer class="q-pa-md"> &copy; {{ new Date().getFullYear() }} </q-footer> -->
  </q-page>
</template>

<script>
const callouts = [
  {
    name: "Quran",
    description: "Daily commute essentials",
    imageSrc: "https://mvslim.com/wp-content/uploads/2021/03/quran-1.jpeg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Calenders",
    description: "Work from home accessories",
    imageSrc: "https://mvslim.com/wp-content/uploads/2021/03/quran-1.jpeg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Prayer Timings",
    description: "Journals and note-taking",
    imageSrc: "https://mvslim.com/wp-content/uploads/2021/03/quran-1.jpeg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
];
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      slide: ref("first"),
      callouts,
    };
  },
});
</script>


<style scoped>
.section {
  min-height: 400px;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
}

.feature-card {
  /* max-height: 400px; */
}

.feature-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
