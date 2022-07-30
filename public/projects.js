export const projects = [
  {
    title: 'Sound Detector',
    group: 'project',
    subHeading: 'A table tennis app to help you keep track of your rallies with sound',
    description: `During covid lockdowns I began to play a lot of table tennis and I was interested to think of a project that could teach me about sound recognition and machine learning. I built this app as a quick proof of concept using Google’s Teachable Machine which helped me train and deploy the machine learning model. I then built the front end and hosted it on Github. In the future, I'd like it to be better at detecting false positives – currently you can enable your mic and test it out by clapping.`,
    url: 'https://ljsimpkin.github.io/table-tennis-counter',
    images: [ 'media/images/counter.png' ]
  },
  {
    title: 'Time series heat map',
    group: 'project',
    subHeading: "Software developed to display bee data but coudn't get bee consent",
    description: `While working as a data science intern at MyApiary, I built a dashboard that displays hive data as a time-series heatmap. I successfully taught myself Javascript, including how to interface with Google Maps API, and used Python with Jupyter Notebooks to conduct further research. You can try it yourself on my portfolio – Instead of the beehive data, I have replaced it with my less sensitive travel data.`,
    url: 'https://ljsimpkin.github.io/Time-series-heat-map/',
    images: [ 'media/images/map.png' ]
  },
  {
    title: 'Money Motivate',
    group: 'project',
    subHeading: 'An app that helps you stay focused, with money. #Smart_Contracts #Blockchain #Buzzwords!',
    description: `A motivational app that helps you avoid using your screen by locking away your money. Set a timer, deposit Ethereum, and watch as you resist the urge to use your computer. Break your promise, and your deposit may disappear forever! I built this with Ethereum’s Solidity language, the Web3 library, and JS/HTML/CSS. The project taught me a lot about smart contracts, blockchain, and the importance of test-driven development. `,
    url: 'https://ljsimpkin.github.io/web_test/',
    images: [ 'media/images/LogoDraft.png' ]
  },
  {
    title: 'Cash Blocks',
    group: 'project',
    subHeading: 'A simple UI for creating bitcoin-cash smart contracts',
    description: `A low code tool for developing smart contracts. I developed this in a team at the Coin Party hackathon. My role focused on building the backend that translated user input into smart contracts. To make it simpler, we focused on one use case: splitting finances into multiple accounts, helping merchants pay their employees and suppliers. Projects were presented and voted on and we won $700! I built this with Bitcoin Cash, using the mainnet.cash library.`,
    url: 'https://devpost.com/software/cash-blocks',
    images: [
      'https://res.cloudinary.com/devpost/image/fetch/s--AtmSSPeY--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://fintechreview.net/wp-content/uploads/2021/01/flowchart.jpg'
    ]
  },
  {
    title: 'Face Detection',
    group: 'project',
    subHeading: "This app detects your face and plays your walk in music (or dog barking noises if you're a bit sus). Works on your GoPro too!",
    description: "Being fascinated by image detection, I built an app that identifies people and plays their walk-in music. If the person isn’t recognised, scare away intruders with dog barking noises instead. The technical challenge was connecting the program to the input video feed from my GoPro (which could wirelessly transmit the video!). After that, the problem was my GoPro could only transmit low-quality video and the program needed to have a higher quality image to identify people at a reasonable distance. So, I used a motion detector program too, which detected movement and then triggered the GoPro to take a photo and send it to the computer. This dramatically increased the range a person could be detected, enabling their walk-in music to be played on time! I built this using Python, Google’s OpenCV, a GoPro API, and also used a pre-trained facial recognition library.",
    url: 'https://github.com/ljsimpkin/image_recognition/blob/master/README.md',
    images: [ 'media/images/Obama.jpg' ]
  },
  {
    title: 'Whack A Mole',
    group: 'project',
    subHeading: "Try and catch all the moles before the time runs out!",
    description: "As part of preparation for Dev Academy, our task was to create a Whack A Mole game with vanilla javascript. It was a fun project and I found myself playing the game way more than expected because of the 10 second timer and habit of constantly wanting to beat my high score. We were given a starting grid and then were tasked to display moles in the grid, have them disappear on clicks, and reappear in a random location. For some stretch goals, I decided to add a timer and a highscore that was saved locally. I also changed the design and added a hammer cursor for good effect.",
    url: 'https://ljsimpkin.github.io/javascript-carnival-liam/whack-a-mole/whack-a-mole.html',
    images: [ 'media/images/whack-a-mole.png' ]
  },
  {
    title: 'Personal Blog',
    group: 'project',
    subHeading: "My website for writing about tech and ideas",
    description: `As part of preparing for dev academy, we were given the project of building a personal blog. This was a great way for us to practice tech skills and explore our career goals. I chose to design my blog in a minimal way with the ability to use CSS variables to easily change the theme colour.`,
    url: 'https://ljsimpkin.github.io/liamsBlog/',
    images: [ 'media/images/myBlog.png' ]
  },
  {
    title: 'Underwater Rugby',
    group: 'adventure',
    subHeading: "Playing a sport entirely underwater",
    description: `What is that I hear you ask? As strange as it sounds, this fantastic team sport is played entirely underwater. I started hesitantly in San Francisco when a friend of mine asked me to come along. It didn’t take long for me to be hooked. I love the feeling of being underwater, the sensation is magical as one can serenely fly around in three dimensions. On top of that, there’s the challenge of getting a small circular ball into a basket at the other end of the pool. With the help of a great team, we work together trying out different strategies. I’ve had the privilege of playing with some of the best players all over the world from America to London, Austria and the world champion Colombians. One of my favorite things about it however, is that it’s a playground for me to improve my physical and mental potential in all aspects of life. Come and give it a try!`,
    url: '',
    images: [ 'media/images/underWaterRugby.jpeg' ]
  },
  {
    title: 'Twitter Sentiment Analyser',
    group: 'project',
    subHeading: "Search for a Tweet and analyse people's feelings",
    url: 'https://github.com/ljsimpkin/Twitter/tree/master/sentiment%20to%20csv',
    images: [ 'media/images/twitter.png' ]
  },
  {
    title: 'Libft',
    group: 'project',
    subHeading: 'Yes, I recoded the C standard library. Even print character.',
    url: 'https://github.com/ljsimpkin/libft',
    images: [ 'media/images/putchar.png' ]
  },
  {
    title: 'Sudoku Solver',
    group: 'project',
    subHeading: 'Easy way to solve sudoku',
    url: 'https://github.com/ljsimpkin/Sudoku',
    images: [ 'media/images/sudoku_small.JPG' ]
  },
  {
    title: 'What I learnt from my time doing door to door sales',
    group: 'learning',
    subHeading: 'Reflection on my uni sales job',
    url: 'https://drive.google.com/file/d/1ZTO0vycYsbK2uIRKVwc8cJe_O6gMWH9E/view?usp=sharing',
    images: [ 'media/images/sales.png' ]
  },
  {
    title: "Light pollution's effect on insects",
    group: 'project',
    subHeading: 'A uni research project on the effect of light at night',
    url: 'pages/light_pollution.htmlabstract</a',
    images: []
  },
  {
    title: 'Built in Obsolescence Yarn',
    group: 'learning',
    subHeading: 'Are products built to last?',
    url: 'pages/obsolescence.htmlOpinion</a',
    images: []
  },
  {
    title: 'Diving',
    group: 'adventure',
    subHeading: "And then coo coo cachoo, you find your way bag to the big ol' blue!",
    url: 'http://mailiam.me/portfolio/#',
    images: [
      'media/images/octopus.png',
      'media/images/shark.jpeg',
      'media/images/stingray.jpeg',
      'media/images/scuba.png'
    ]
  },
  {
    title: 'Neural Networks',
    group: 'project',
    subHeading: "Number identification project from Andrew Ng's Stanford Coursera class",
    url: 'https://github.com/ljsimpkin/stanford_ml/tree/master/machine-learning-ex4',
    images: [ 'media/images/numbers.png' ]
  },
  {
    title: 'Hiking',
    group: 'adventure',
    subHeading: 'A quick stroll up Yosemite',
    url: 'http://mailiam.me/portfolio/#',
    images: [ 'media/images/hiking.jpg' ]
  },
  {
    title: 'Thai Kickboxing',
    group: 'adventure',
    subHeading: 'Awesome training camp in Bangkok',
    url: 'https://www.facebook.com/sorvorapin.page',
    images: [ 'media/images/kick.JPG' ]
  },
  {
    title: 'Fast food in Japan',
    group: 'adventure',
    subHeading: 'Healthier than my home cooked slow food',
    url: 'http://mailiam.me/portfolio/#',
    images: [ 'media/images/raman.JPG', 'media/images/burger.JPG' ]
  },
  {
    title: 'Abel Tasman Kayak',
    group: 'adventure',
    subHeading: 'In an inflatable raft',
    url: 'https://www.google.com/search?q=abel+tasman+national+park&tbm=isch&ved=2ahUKEwj96_PMqNvpAhUYIysKHYmTCrMQ2-cCegQIABAA&oq=abel+tasman+nat&gs_lcp=CgNpbWcQARgAMgQIABBDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAUOQOWKgSYLkeaABwAHgAgAGJAogBpQaSAQUwLjMuMZgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ei=KS3SXr2zGJjGrAGJp6qYCw&bih=721&biw=1280&hl=en',
    images: [ 'media/images/kayak.JPG' ]
  },
  {
    title: 'The future of energy',
    group: 'learning',
    subHeading: 'Interview with Shannon, CMO of Solar Block',
    url: 'audio/solar_block.mp3',
    images: [ 'media/images/idea.JPG' ]
  },
  {
    title: 'The future of Genetics',
    group: 'learning',
    subHeading: 'Feel the excitment as founder Zack shares his thoughts.',
    url: 'audio/zack_genetics_clip.m4a',
    images: [ 'media/images/zbiotics.jpg' ]
  },
  {
    title: 'Twitter Project',
    group: 'project',
    subHeading: 'These tweets took me longer than you might think',
    url: 'https://twitter.com/5impkin',
    images: [ 'media/images/twit.png' ]
  },
  {
    title: 'What I learnt about booking flights',
    group: 'learning',
    subHeading: 'Cheap ways to travel',
    url: 'pages/travel_tips.html',
    images: [ 'media/images/kayak.JPG' ]
  },
  {
    title: 'Juvenile Wisdom',
    group: 'learning',
    subHeading: 'My speech about opportunities for kids',
    url: 'https://drive.google.com/file/d/1zrq_r7U29YMYugRZkVoC0h7q4X4xe2LC/view?usp=sharing',
    images: [ 'media/images/speech.png' ]
  },
  {
    title: 'House rafts in Vietnam!',
    group: 'adventure',
    subHeading: 'Kayaking around the islands',
    url: 'https://www.google.com/search?q=cat+ba+vietnam&tbm=isch&hl=en&ved=2ahUKEwiejPiYp9vpAhWbcH0KHR_9BF0QBXoECAEQRQ&biw=1280&bih=721',
    images: [ 'media/images/vietnam1.JPG', 'media/images/vietnam2.JPG' ]
  },
  {
    title: 'What I learnt after meeting with a VC',
    group: 'learning',
    subHeading: 'Opinion on my experience',
    url: 'pages/vc.html',
    images: [ 'media/images/slides.JPG' ]
  },
  {
    title: '42 Silicon Valley',
    group: 'learning',
    subHeading: 'Learnt to code!',
    url: 'https://www.42.us.org/',
    images: [ 'media/images/code.JPG' ]
  },
  {
    title: 'Earnt some Confetti',
    group: 'project',
    subHeading: 'Hacker Rank',
    url: 'https://www.hackerrank.com/ljsimpkin',
    images: [ 'media/images/confetti1.jpg' ]
  },
  {
    title: 'Played with Python',
    group: 'learning',
    subHeading: 'Kaggle Course',
    url: 'https://www.kaggle.com/learn/certification/liamsimpkin/python',
    images: [ 'media/images/kaggle.jpeg' ]
  },
  {
    title: 'Completed a quarter triathlon',
    group: 'adventure',
    subHeading: 'Next time the full!',
    url: 'https://www.peoplestri.co.nz/',
    images: [ 'media/images/running.JPG' ]
  },
  {
    title: 'Opportunity Alert',
    group: 'project',
    subHeading: 'Notified when NZ companies get investment',
    url: 'https://fortune.com/newsletter/termsheet/',
    images: [
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/rocket_1f680.png'
    ]
  },
  {
    title: 'Berkley AI Course',
    group: 'learning',
    subHeading: 'Signed up to inclusive AI course',
    url: 'https://berkeley.us14.list-manage.com/track/click?u=1075bc7887a2db896be9973cf&id=c0a7165a5d&e=f365cdd717',
    images: [
      'https://static.easyrecrue.com/clients/1297_f4d49f5689ab867e9bf73b6ca48c01ee/telechargement.png'
    ]
  },
  {
    title: 'Brand Stunts',
    group: 'learning',
    subHeading: 'Pulling off crazy tricks in the name of brand! – "Work" as an ambassador (not me btw)',
    url: 'mailiam.me',
    images: [ 'media/images/ue1.png', 'media/images/ue2.png' ]
  },
  {
    title: 'Ocean Swimming',
    group: 'adventure',
    subHeading: 'Almost died completing the bean rock swim. The shortest distance between two points is a straight line, remember?',
    url: 'mailiam.me',
    images: [ 'media/images/bean rock.JPG' ]
  },
  {
    title: 'Mountain Biking',
    group: 'adventure',
    subHeading: 'Get that leg pump',
    url: 'https://www.google.com/search?q=wanaka&sxsrf=ALeKk01P-Ra5C-PakNNvjk9zj50ZfrsFag:1591056980302&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQ84KR7eHpAhV77HMBHcWqC9kQ_AUoAnoECB8QBA&biw=1280&bih=721',
    images: [ 'media/images/bike.JPG' ]
  },
  {
    title: 'Agri tech startup - Beekeeping',
    group: 'project',
    subHeading: 'Great experience learning about all things bees',
    url: 'https://www.myapiary.com/',
    images: [
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/honeybee_1f41d.png'
    ]
  },
  {
    title: 'Sapiens',
    group: 'learning',
    subHeading: "Challenge every idea you've ever had",
    url: 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A',
    images: [ 'media/images/sapiens.JPG' ]
  },
  {
    title: 'MAKING MILLIONS of mistakes',
    group: 'project',
    subHeading: 'Learning investment strategies',
    url: 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A',
    images: [ 'media/images/money.jpeg' ]
  },
  {
    title: 'Filling boxes like tetris',
    group: 'project',
    subHeading: 'Fit things into anything with this algorithom',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/fillit.JPG' ]
  },
  {
    title: 'Golf Work',
    group: 'project',
    subHeading: 'Sometimes dodging golf balls',
    url: 'https://www.google.com/search?q=baylands+golf+course&sxsrf=ALeKk0253d6niHoceM_OZ45ZodGYRI6Q2w:1591161760179&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjakfu78-TpAhXfH7cAHYRyC6QQ_AUoAnoECBQQBA&biw=1280&bih=672',
    images: [ 'media/images/golf.jpg' ]
  },
  {
    title: 'Sumo in Japan',
    group: 'adventure',
    subHeading: 'Also pretty big',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/sumo.JPG' ]
  },
  {
    title: 'Finance',
    group: 'learning',
    subHeading: 'Studying finance at uni and learning how black scholes really is',
    url: 'https://www.google.com/search?q=Fischer+Black,+Myron+Scholes&sxsrf=ALeKk01oeMjs60_60VSTnLU2XOJTs3jByw:1591162420169&source=lnms&tbm=isch&sa=X&ved=2ahUKEwip1dX29eTpAhWD8HMBHbqLDX4Q_AUoAXoECAwQAw&biw=1280&bih=672',
    images: [ 'media/images/finc.PNG' ]
  },
  {
    title: 'Fixing Things',
    group: 'project',
    subHeading: 'Changin phone screen, updating laptop, and sweatproofing headphones',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/fix.JPG' ]
  },
  {
    title: 'Table Tennis',
    group: 'learning',
    subHeading: 'Self appointed table tennis champ',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/1.JPG' ]
  },
  {
    title: 'Gymming',
    group: 'learning',
    subHeading: 'Using whatevers there in the name of gains',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/gym.png' ]
  },
  {
    title: 'Bartending',
    group: 'learning',
    subHeading: 'Would you like your magereta salted or unsalted?',
    url: 'https://www.lonestar.co.nz/',
    images: [ 'media/images/drink.jpg' ]
  },
  {
    title: 'Milking',
    group: 'learning',
    subHeading: 'Providing that calcium',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/cows.JPG' ]
  },
  {
    title: 'Flatting',
    group: 'learning',
    subHeading: 'Gordon Ramsay in the house!',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/food.JPG' ]
  },
  {
    title: 'Landscape Gardening',
    group: 'learning',
    subHeading: "Holes aren't gonna dig themselves",
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/hole.JPG' ]
  },
  {
    title: 'Painting and Graphics',
    group: 'learning',
    subHeading: 'What is art? 1st place art and graphics award',
    url: 'https://sacredheart.school.nz/',
    images: [ 'media/images/art.JPG' ]
  },
  {
    title: 'Grand Canyon Road Trip',
    group: 'adventure',
    subHeading: "It's pretty big",
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/gcdrawing.JPG' ]
  },
  {
    title: 'Dolomites Biking',
    group: 'adventure',
    subHeading: '5 day road cycling and mountain biking the Dolomites',
    url: 'https://www.google.com/search?q=the+dolomites&rlz=1C5CHFA_enGB929GB929&sxsrf=ALeKk02KQKitQQdslhkY_lYeicQpU6FIIw:1608643795888&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1iZiQ2eHtAhXBnFwKHSQzC3cQ_AUoAnoECBMQBA',
    images: [ 'media/images/dolomites.jpeg' ]
  },
  {
    title: 'Tripping Italy',
    group: 'adventure',
    subHeading: '16 days exploring Sicily, Naples, and Rome',
    url: 'https://www.google.com/search?q=the+dolomites&rlz=1C5CHFA_enGB929GB929&sxsrf=ALeKk02KQKitQQdslhkY_lYeicQpU6FIIw:1608643795888&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1iZiQ2eHtAhXBnFwKHSQzC3cQ_AUoAnoECBMQBA',
    images: [ 'media/images/Italy.jpeg' ]
  },
  {
    title: 'Contact Tracing',
    group: 'project',
    subHeading: 'A simple tutorial to help professionals build a contact tracing system by themselves.',
    url: '',
    images: [ 'media/images/contact_tracing.png' ]
  },
]