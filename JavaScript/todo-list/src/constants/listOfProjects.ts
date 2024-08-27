/** hard coding default todo list since I cant find an example api that  is free */
const listOfProjects = [
    {
        "name": "Intermediate HTML Course",
        "items": [
            {
                "name": "Portfolio site",
                "description": "Create a portfolio site",
                "isComplete": false
            },
            {
                "name": "Login Screen",
                "description": "Create a login site",
                "isComplete": false
            },
            {
                "name": "Admin Dashboard",
                "description": "Create an admin dashboard",
                "isComplete": false
            }
        ]
    },
    {
        "name": "Advanced HTML Course",
        "items": [
            {
                "name": "Responsive design",
                "description": "Create a site that is viewable on mobile and desktop view",
                "isComplete": true
            }
        ]
    },
    {
        "name": "React",
        "items": [
            {
                "name": "Memory Game",
                "description": "Create a site that contains a memory test game",
                "isComplete": false
            },
            {
                "name": "Resume Generator",
                "description": "Let the user input their details and generate a resume for them",
                "isComplete": true
            },
            {
                "name": "Shop",
                "description": "Create a shop that contains a page for home, and items. Users can put items in a cart and see their cart with a subtotal.",
                "isComplete": false
            }
        ]
    }
]

export {listOfProjects}