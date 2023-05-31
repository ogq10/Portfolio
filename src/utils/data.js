export const work = [
    {
        id: "ecommerce",
        title: "E-Commerce Store",
        techUsed: [
            "React" ,
            " Stripe",
            " Google Places API",
            " MongoDB",
            " Express",
            " Node.js",
        ],
        info: "This is by far my best project yet. A fully functional e-commerce store made using MERN stack. Purchases are made using the Stripe API. Google Place API is used for auto fill location to enhance user experience. Users can sign up and sign in to their accounts using JWT token. Users can also retrieve their order history from MongoDB and create wishlists. Little features like showing the user that an item is out of stock or limiting users' quantity to cart enchance overall experience. ",
        links: [
            {
                "source": "https://github.com/ogq10/ecommerce-backEnd",
                "live": "https://shimmering-jalebi-463d6d.netlify.app/"
            }
        ],
        videoSrc: "https://ontallme.sirv.com/ecomm.mp4"
    },
    {
        id: "netflix",
        title: "Netflix Clone",
        techUsed: [
            "React",
            " Firebase",
            
        ],
        info: "This project was solely created for me to practice making compound components in React and testing components using React Jest. What better way to practice one of the advanced patterns of React by making a clone of Netflix?! I also used Firebase to keep track of the movie data as well as store user accounts after they've sign up and sign in using FirebaseAuth. In hindesight, I should've made a clone of something less popular than Netflix because visitors to the site receive a phishing warning.",
        links: [
            {
                "source": "https://github.com/ogq10/netflixclone",
                "live": "https://beamish-naiad-2ccd3c.netlify.app/"
            }
        ],
        videoSrc: "https://ontallme.sirv.com/netflix.mkv"
    },
    {
        id: "celeb",
        title: "Celebrity Image Recognition",
        techUsed: [
            "React" ,
            " AWS",
            " Python",
        ],
        info: "This project was created to showcase the power of machine learning using Amazon Web Services. AWS Rekognition was used to analyze and verify the identity of the image. AWS Lambda enabled access to the service and allowed image conversion to base64 format written in Python. React.js was used for client side and a RESTful API was designed and tested using AWS Gateway and Postman. At completion, the app was deployed to AWS S3",
        links: [
            {
                "source": "https://github.com/ogq10/CelebrityProject",
                "live": "http://celeb-photo-app.s3-website.us-east-2.amazonaws.com/"
            }
        ],
        videoSrc: "https://ontallme.sirv.com/celeb.mkv"
    },
    {
        id: "weather",
        title: "Weather Forecast",
        techUsed: [
            "HTML",
            " CSS",
            " JS",
            " Weather API"
        ],
        info: "This project created in my very early days of coding. OpenWeather provided a free API where weather data such as temperature, forecast, and highs and lows for a given city was displayed via DOM selectors and retrieved through JSON object from JavaScript functionality like fetch",
        links: [
            {
                "source": "https://github.com/ogq10/OpenWeatherAPP",
                "live": "https://thirsty-gates-816653.netlify.app/"
            }
        ],
        videoSrc: "https://ontallme.sirv.com/weather.mkv"
    },
    {
        id: "movie",
        title: "Movie Soundtrack Player",
        techUsed: [
            "HTML",
            " CSS",
            " JS",
            " Spotify API"
        ],
        info: "One of my first projects ever. Spotify Web’s REST API provided POST method to access the data given by promise function. The movie posters laid out on the website each had an image index which was used for sending GET requests to the API to get the song of the movie soundtrack being clicked on. JavaScript functionality like play and pause enabled the URL of the audio to be played",
        links: [
            {
                "source": "https://github.com/ogq10/MoviePoster",
                "live": "https://vigilant-gates-84886a.netlify.app/"
            }
        ],
        videoSrc: "https://ontallme.sirv.com/movie%20player.mkv"
    }
]