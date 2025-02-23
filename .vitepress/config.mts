import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LMS",
    description: "Learning Management System",
    srcDir: "./src",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Documentation", link: "/overview" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Overview", link: "/overview" },
                    { text: "Student Scenarios", link: "/student-scenarios" },
                    {
                        text: "Instructor Scenarios",
                        link: "/instructor-scenarios",
                    },
                    { text: "School Scenarios", link: "/admin-scenarios" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/nextmission/lms-docs" },
        ],
        search: {
            provider: "local",
        },
    },
});
