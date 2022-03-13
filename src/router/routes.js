const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "/quran",
        component: () => import("pages/quran.vue"),
      },
      {
        path: "/prayer-times",
        component: () => import("pages/prayerTimes.vue"),
      },
      {
        path: "/hijri-calender",
        component: () => import("pages/hijriCalender.vue"),
      },
      {
        path: "/georgian-calender",
        component: () => import("pages/georgianCalender.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
