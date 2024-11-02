// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://notnite.github.io",
  base: "/webfishing-mod-wiki",

  integrations: [
    starlight({
      title: "WEBFISHING Modding Wiki",
      favicon: "/favicon.png",
      editLink: {
        baseUrl: "https://github.com/NotNite/webfishing-mod-wiki/edit/main/"
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" }
        },
        {
          label: "Tools",
          autogenerate: { directory: "tools" }
        },
        {
          label: "Extras",
          items: [
            {
              label: "GDWeave documentation",
              link: "https://github.com/NotNite/GDWeave/blob/main/MODS.md"
            },
            {
              label: "Thunderstore",
              link: "https://thunderstore.io/c/webfishing"
            }
          ]
        }
      ]
    })
  ]
});
