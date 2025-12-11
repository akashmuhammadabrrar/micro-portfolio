import { title } from 'process'
import { defineField, defineType, validation } from 'sanity'

export const profile = defineType({
    name: "prfile",
    title: "Profile",
    type: "document",
    fields:[
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
       defineField({
        name: "headline",
        title: "Professional Headline",
        type: "string",
        description: "Full-stack Developer",
        validation: (Rule) => Rule.required(),
       }),
        defineField({
        name: "headlineStaticText",
        title: "Headline Static Text",
        type: "string",
        description: "The static part of the headline (e.g., 'I build)",
        placeholder: "I build",
        validation: (Rule) => Rule.required(),
       }),
       defineField({
        name: "headlineAnimatedWords",
        title: "Headline Animated Words",
        type: "array",
        description: "Words that will flip/animate in the headline",
        of: [{ type: "string" }],
        validation: (Rule) => Rule.required().max(10),
       }),
       defineField({
        name: "headlineAnimationDuration",
        title: "Headline Animation Duration (ms)",
        type: "number",
        description: "how long each word stays visible before flipping (default: 3000ms)",
        validation: (Rule) => Rule.required().min(300),
   }),
   defineField({
    name: "shortBio",
    title: "Short Bio",
    type: "text",
    description: "Detailed  about section with rich text formatting",
   }),
    defineField({
    name: "fullBio",
    title: "Full Bio",
    type: "array",
    of: [{ type: "block" }],
    description: "Detailed  about section with rich text formatting",
   }),
   defineField({
    name: "profileImage",
    title: "Profile Image",
    type: "image",
    options:{
        hotspot: true,
    },
    fields:[
        {
            name: "alt",
            type: "string",
            title: "Alternative text",
            description: "Important for SEO and accessibility.",
        }
    ]
   }),
   defineField({
    name: "email",
    title: "Email",
    type: "string",
    validation: (Rule) => Rule.required().email(),
   }),
   defineField({
    name: "phone",
    title: "Phone Number",
    type: "string",
   }),
   defineField({
    name: "location",
    title: "Location",
    type: "string",
    description:"E.G. Dhaka, Bangladesh",
   }),
   defineField({
    name: "availibility",
    title: "Availability Status",
    type: "string",
    options:{
        list: [
            { title: "Available for hire", value: "Available" },
            {title: "Open to opportunities", value: "Open"},
            {title: "Not available", value: "Not Available"},
        ]
    }
   }),
   defineField({
    name: "socialLinks",
    title: "Social Links",
    type: "object",
    fields: [
        {name: "github",title: "GitHub URL",type: "url"},
        {name: "linkedin",title: "LinkedIn URL",type: "url"},
        {name: "twitter",title: "Twitter URL",type: "url"},
        {name: "website",title: "Personal Website URL",type: "url"},
        {name: "medium",title: "Medium URL",type: "url"},
        {name: "devto",title: "Dev.to URL",type: "url"},
        {name: "youtube",title: "YouTube URL",type: "url"},
        {name: "stackoverflow",title: "Stack Overflow URL",type: "url"},
    ]
   }),
   defineField({
    name: "yearsOfExperience",
    title: "years Of Experience",
    type: "number",
    validation: (Rule) => Rule.required().min(0),
   }),
   defineField({
    name: "stats",
    title: "Profile Statictics",
    type: "array",
    description: "Key statistics to display on your about section",
    of: [
        {
            type: "object",
            fields: [
                {
                    name: "label",
                    title: "Label",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "value",
                    title: "Value",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                }
            ],
            preview:{
                select: {
                    title: "label",
                    subtitle: "value",
                }
            }
        }
    ]
   })
    ], 
    preview:{
        select:{
            title: "firstName",
            subtitle: "lastName",
            media: "profileImage",
        },
        prepare(seletion){
            const {title, subtitle, media} = seletion;
            return {
                title: title,
                subtitle: subtitle,
                media: media
            }
        }
    }
}) 