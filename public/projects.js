export const projects = [
  {
    title: 'Dev Invaders',
    group: 'project',
    subHeading: "2D scrolling game made with Phaser",
    description: `
    For my final project at Dev Academy, my group and I decided to build a game. None of us had game dev experience nor worked with an object oriented game engine like phaser yet we managed to achieve our finished product in less than a week. We decided the game would be a 2D scroller game kinda like flappy bird but with the ability to shoot enemies and bosses too. 
    \n
    My roles were to get the character displayed and moving on the screen, make the spaceship shoot, generate different obstacles, break the code into scenes, and randomly spawn enemies. I also helped the team with debugging, pair programming when teammates were stuck, and contributed a fair share to planning using agile development methods. 
    \n
    There were a lot of directions to go in but we knew we wanted to make the game available for everyone with a browser, to have shooting, and the background scrolling. We found a number of possible tools, babylon, unity, phaser, and three js and thought to ourselves how hard could a 2D game be? To give ourselves a challenge let's make it 3D! So we decided on three js, a tool for building 3D objects. We spent the first day researching three js, and began to feel really confident with it. The only problem was it didn’t have all the game mechanics we needed to move objects on the screen and interact with each other. This was a lot of work. We thought long and hard about this but decided to go with Phaser because it was better suited to the goal of building a shooting game. 
    \n
    We still had a lot to learn with Phaser. The engine is written in object oriented code which was a style of coding we had never seen before. We started exploring the tool in the style we were used to, but this created issues for us when we chose to move to the new version. After we overcame this, it did a lot of excellent things for us like making objects move around the screen, detect when characters collide with each other, and built the game loop. Making our code object oriented turned out to be really useful as it made us able to break our tasks down and we were able to delegate roles more effectively
    It was almost time to hand in our game and on the last day we found some pretty serious bugs. Panic stations as we tried to fix them. Our biggest bug by far was this. The player would sometimes run out of bullets and enemies would randomly explode in the middle of the game. It turned out bullets weren’t being destroyed. Instead they stayed on the screen, invisible after they collided with enemies. We managed to fix this by moving the bullets off the screen after a collision. I figured this out and put the final touches on the app to make it mobile compatible. Our game was ready for liftoff! To finish it all off, we presented in front of a group of 70 people with a lot of ease and fun. It was a great experience to be a part of.
    `,
    url: 'https://ljsimpkin.github.io/dev-invaders-website/',
    images: [ 'media/images/devInvaders1.png',
    'media/images/devInvaders2.png',
    'media/images/devInvaders3.png',
    'media/images/devInvaders4.png' ]
  },
  {
    title: 'Time series heat map',
    group: 'project',
    subHeading: "Software developed to display bee data but coudn't get bee consent",
    description: `While working as a data science intern for MyApiary, I built a dashboard that displays hive data as a time-series heatmap. I successfully taught myself Javascript, including how to interface with Google Maps API, and used Python with Jupyter Notebooks to conduct further research. You can try it yourself on my portfolio – Instead of the beehive data, I've replaced it with my less sensitive travel data.`,
    url: 'https://ljsimpkin.github.io/Time-series-heat-map/',
    images: [ 'media/images/map.png' ]
  },

  {
    title: '42 Silicon Valley',
    group: 'learning',
    subHeading: 'Learning to code in Silicon Valley!',
    description: `Located on the edge of silicon valley across the water from Google and Facebook, and next door to Tesla, there existed a school called 42. \n

    42 Silicon Valley is a school like no other. It’s completely free, has no teachers, and students solve problems by asking friends for help and finding out for themselves. Entries are competitive, and to be accepted you have to pass a 1 month gruelling application process called the piscine, French for “swimming pool”, where you code on individual and group projects every day to see who can swim.  \n
    
    While I was there, I dived into algorithms, learnt about using loops, recursion, compilers, building scripts with bash, how to debug, and check memory leaks. We learnt everything in C so afterwards, when I did some ML courses and later the Data Science internship, the coding element was surprisingly quick for me to learn. 42 has strengthened my self belief and I have since done a lot of project-based learning: Deploying an ML app with Google’s teachable machine, making a wireless face detection security camera, and building a couple of blockchain apps – one of which for a hackathon that won our team prize money! \n
    
    42 Silicon Valley has since closed because of covid but tons of other schools have popped up all around the world, franchising the curriculum, and creating a worldwide standard for beginning your coding journey with C.
    `,
    url: '',
    images: [ 'media/images/42.jpeg',
    'media/images/42_2.JPG' ]
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
    title: 'Flutter mobile app',
    group: 'project',
    subHeading: 'A cross platform tool for building mobile and web apps',
    description: `Being interested in building mobile and web apps from one code base, I experimented with flutter to see what I could build in 48 hours. It was my first time using the development kit and to get set up quickly I found an online IDE called https://flutlab.io. I went through the getting started tutorial and built a few example projects like a startup name generator and a web app for teaching people about the importance of pH. You can try it out below.`,
    url: 'https://github.com/ljsimpkin/Flutter-pH-App',
    images: [
      'media/images/flutterPh1.png',
      'media/images/flutterPh2.png',
      'media/images/flutterPh3.png'
    ]
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
    title: 'Tiling',
    group: 'learning',
    subHeading: 'Learning to tile 3 bathrooms from scratch',
    description: `Having never tiled before, I took on the biggest DIY project of my life. My home growing up had 3 unfinished bathrooms and tiling was the only thing standing in their way of being complete. \n

    My task was to learn how to tile from scratch and then implement it. After watching a number of youtube videos and asking my uncle for building advice, I went to different hardware stores to buy the tools and material. Here I encountered my first problem: the tile concrete I bought was rigid instead of flexible. Luckily my dad noticed this before I started and then off I went to the tile store to get some specialist advice this time around. \n
    
    With some patience, most of the tiles were fairly straightforward to cut once I became comfortable using the tile cutter; the challenge was curving the tiles around the base of the showers and pipes. Through a lot of research, practice and a few broken tiles, I perfected the art of the curve by scoring, cutting teeth shapes, and finely smoothening the edge with an angle grinder.\n
    
    I am super happy with the result and finished it to a standard that looks very professional. It took me 2 months to do 2 bathrooms. Being really meticulous helped a lot as I would patiently redo a tile if I wasn’t happy with it. Also being organised helped a lot as did a lot of planning with my Dad to decide on the layout and design.
    \n
    10/10 Thanks for reading
    `,
    url: '',
    images: [
      'media/images/tiling/tile2.png',
      'media/images/tiling/tile1.png',
      'media/images/tiling/tile3.png',
      'media/images/tiling/tile5.png',
      'media/images/tiling/tile6.png',
      'media/images/tiling/tile7.png',
      'media/images/tiling/tile8.png',
      'media/images/tiling/tile9.png',
      'media/images/tiling/tile10.png',
      'media/images/tiling/tile11.png',
    ]
  },
  {
    title: 'Sound Detector',
    group: 'project',
    subHeading: 'A table tennis app to help you keep track of your rallies with sound',
    description: `During covid lockdowns I began to play a lot of table tennis and I was interested in projects that would teach me about sound recognition and machine learning. I built this app as a quick proof of concept using Google’s Teachable Machine which helped me train and deploy the machine learning model. I then built the front end and hosted it on Github. In the future, I'd like it to be better at detecting false positives – currently you can enable your mic and test it out by clapping!`,
    url: 'https://ljsimpkin.github.io/table-tennis-counter',
    images: [ 'media/images/counter.png' ]
  },
  {
    title: 'Face Detection',
    group: 'project',
    subHeading: "This app detects your face and plays your walk in music (or dog barking noises if you're a bit sus). Works on your GoPro too!",
    description: "Being fascinated by image detection, I built an app that identifies people and plays their walk-in music. If the person isn’t recognised, scare away intruders with dog barking noises instead.\nThe technical challenge was connecting the program to the input video feed from my GoPro (which could wirelessly transmit the video!). After that, the problem was my GoPro could only transmit low-quality video and the program needed to have a higher quality image to identify people at a reasonable distance. So, I used a motion detector program too, which detected movement and then triggered the GoPro to take a photo and send it to the computer. This dramatically increased the range a person could be detected, enabling their walk-in music to be played on time! I built this using Python, Google’s OpenCV, a GoPro API, and detected faces with the pre-trained library face_detection on Github.",
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
    title: 'Twitter Sentiment Analyser',
    group: 'project',
    subHeading: "Search for a Tweet and analyse people's feelings",
    description: `This was Inspired by an NPR experiment where they made a trading bot that would buy or sell stocks depending on Donald Trump’s twitter sentiment towards it (Spoiler they didn’t make any money because company names were sometimes mistaken for other words like fruit eg Apple… and vice versa). \n
    I built this with python, a sentiment analysis library called TextBlob, and twitter’s api. Also Siraj Raval Twitter Sentiment Analysis video helped me out a lot along the way.
    `,
    url: 'https://github.com/ljsimpkin/Twitter/tree/master/sentiment%20to%20csv',
    images: [ 'media/images/twitter.png' ]
  },
  {
    title: 'Libft',
    group: 'project',
    subHeading: 'I recoded the C standard library. Even print character!',
    url: 'https://github.com/ljsimpkin/libft',
    images: [ 'media/images/putchar.png' ]
  },
  {
    title: 'Sudoku Solver',
    group: 'project',
    subHeading: 'Easy way to solve sudoku',
    description: 'This was one of the group projects during the piscine at 42 Silicon Valley. The objective was to build an algorithom that could solve sudoku puzzles from a standard input. We achieved this by creating a matrix of all the possibilites and then recursively backtracking.',
    url: 'https://github.com/ljsimpkin/Sudoku',
    images: [ 'media/images/sudoku.jpeg' ]
  },
  {
    title: 'Berkley AI Course',
    group: 'learning',
    subHeading: `Completed Berkeley's course for inclusive AI course`,
    url: 'https://fcba.berkeley.edu/certificate-verifier/?code=52-159-567-2935',
    images: [
      'media/images/berkeley.png'
    ]
  },

  {
    title: 'Diving',
    group: 'adventure',
    subHeading: "And then coo coo cachoo, you find your way bag to the big ol' blue!",
    url: '',
    images: [
      'media/images/scuba.png',
      'media/images/shark.jpeg',
      'media/images/octopus.png',
      'media/images/dive1.png', 
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
    title: 'Half Dome',
    group: 'adventure',
    subHeading: 'Half Dome summit hike Yosemite',
    url: '',
    images: [ 'media/images/hiking.jpg',
      'media/images/hiking2.jpeg',
      'media/images/hiking3.jpg' 
    ]
  },
  {
    title: 'The future of Genetics',
    group: 'learning',
    subHeading: 'Feel the excitment as founder Zack shares his thoughts',
    url: 'media/audio/zack_genetics_clip.mp3',
    images: [ 'media/images/zbiotics.jpg' ]
  },
  {
    title: 'Twitter',
    group: 'learning',
    subHeading: '42 Silicon Valley Twitter project',
    url: 'https://twitter.com/5impkin',
    images: [ 'media/images/twit.png' ]
  },
  {
    title: 'Thai Kickboxing',
    group: 'adventure',
    subHeading: 'Awesome training camp in Bangkok',
    url: '',
    images: [ 'media/images/kick.JPG' ]
  },
  {
    title: 'Played with Python',
    group: 'learning',
    subHeading: 'Kaggle Course',
    url: 'https://www.kaggle.com/learn/certification/liamsimpkin/python',
    images: [ 'media/images/kaggle.jpeg' ]
  },
  {
    title: 'Triathlons',
    group: 'adventure',
    subHeading: `Getting gains doing the Auckland People's triathlon`,
    url: '',
    images: [ 'media/images/running.JPG' ]
  },
  // {
  //   title: 'Opportunity Alert',
  //   group: 'project',
  //   subHeading: 'Notified when NZ companies get investment',
  //   url: 'https://fortune.com/newsletter/termsheet/',
  //   images: [
  //     'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/rocket_1f680.png'
  //   ]
  // },
  {
    title: 'Brand Stunts',
    group: 'learning',
    subHeading: 'Pulling off crazy tricks in the name of brand!',
    url: '',
    images: [ 'media/images/ue1.png', 'media/images/ue2.png' ]
  },
  {
    title: 'Ocean Swimming',
    group: 'adventure',
    subHeading: 'Completed the bean rock ocean swim advance mode. Note to self: The shortest distance between two points is a straight line',
    url: '',
    images: [ 'media/images/bean rock.JPG' ]
  },
  {
    title: 'Mountain Biking',
    group: 'adventure',
    subHeading: 'Getting that leg pump around the NZ and Italian trails',
    url: '',
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
    title: "Light pollution's effect on insects",
    group: 'learning',
    subHeading: 'A uni research project on the effect of human light on animals',
    description: `
    Abstract: Ecological light pollution, defined by its ability to alter the patterns of night and day in an ecosystem, is a relatively recent disturbance from an evolutionary perspective (Longcore & Rich, 2004). Before two hundred years ago the moon and the stars were the major sources of light at night. By burning wood, oil, dried fish and other materials alike, fire was the main source of artificial light. While certainly influencing local animal behavior and ecology, such effects were limited. Since then, the proliferation of electric lighting has revolutionised the way the world is seen today. At the flick of a switch or press of a button, the patterns of night and day that used to govern early human behavior can now be controlled.`,
    url: '',
    images: ['media/images/light.jpeg' ]
  },
  {
    title: 'Abel Tasman',
    group: 'adventure',
    subHeading: 'In an inflatable raft',
    url: '',
    images: [ 'media/images/kayak.JPG' ]
  },
  {
    title: 'Sapiens',
    group: 'learning',
    subHeading: "Challenge every idea you've ever had",
    url: '',
    images: [ 'media/images/sapiens.JPG' ]
  },
  {
    title: 'MAKING MILLIONS of mistakes',
    group: 'project',
    subHeading: 'Learning investment strategies',
    url: '',
    images: [ 'media/images/money.jpeg' ]
  },
  {
    title: 'Golf Work',
    group: 'project',
    subHeading: 'Sometimes dodging golf balls',
    url: '',
    images: [ 'media/images/golf.jpg' ]
  },
  {
    title: 'Sumo in Japan',
    group: 'adventure',
    subHeading: 'Also pretty big',
    url: '',
    images: [ 'media/images/sumo.JPG' ]
  },
  {
    title: 'Earning Confetti',
    group: 'learning',
    subHeading: 'Hacker Rank',
    url: 'https://www.hackerrank.com/ljsimpkin',
    images: [ 'media/images/confetti.jpg' ]
  },
  {
    title: 'Built in Obsolescence blog',
    group: 'learning',
    subHeading: 'Are products built to last?',
    description: `Located in an old fire station, there exists an incandescent bulb that has been burning for over 100 years. If we have always had the ability to build such a light bulb, why are there not more like this one? One theory is that many of our products today are designed to become obsolete. During the industrial revolution light bulb manufacturers came together to form a cartel. This cartel allegedly agreed to manufacture light bulbs that expired after 1000 hours (XX). This was advertised under the guise that light bulbs with such life spans were safer. That such light bulbs were less prone to exploding, catching fire, and omitting noxious gases (the gas inside the lightbulb is not pure oxygen. It’s a combination of gases that are designed to be inert). However, some people think that it was simply a way to encourage consumers to buy more bulbs. Essentially they believe that these light bulbs were built to become obsolete. On the other hand, another explanation might be that it is much cheaper to produce light bulbs which expire sooner and this is simply what people want. 
    \n
    From a perspective of hindsight, it is easy to conjure up such conspiracies by looking at who benefits (quay bono). Apple has been accused for building phones that slow down over time (being incentivised by the sale of their hardware rather than software); IBM delayed the production of its new processor until their existing patent ran out so that people would buy their old one and then replace it when they made their new one; dodgy used cars salesmen who sell cars that last just long enough to void consumer guarantees; and clothes that quickly become out of fashion - otherwise known as fast fashion. The imagination can easily be stretched to view capitalism as being responsible for the unnecessary waste from products built to last long enough to warrant satisfaction, but just short enough to make sustainable fortunes. And for those companies that don’t play ball, the risk of producing a product that is too good is a temporary existence. Pumpkin patch made clothes that were “too good” such that once somebody had purchased them, no-one needed new ones. Hand me downs could last generations. Go pro designed products that were so good that people needn’t buy the latest versions. Or maybe these companies just failed to innovate. 
    \n
    Do companies intentionally build products that have an expiry date? Or more importantly, does our economic climate incentivise the production of products that are built to expire? Economic theory predicts that competition would result in people cheating the hold of a cartel in pursuit of their own self interest to take more of the market share. That if there were a demand for longer lasting light bulbs companies would soon scurry to satisfy this demand. This would lead to the production of light bulbs that last much longer, just like the LED ones we have today. Competition has created technologies that overcome the obsolescence problem. Perhaps the problem of built in obsolescence is not as bad as we thought when innovation through competition soon follows.
    \n
    Is redundancy and waste just an uninviteable aspect of innovation? One theory that may help solve this problem is the release of ownership. Instead of buying products it might be better if we rented them. This would change the whole incentive structure that builds companies. For example, it would be in a light bulb companies best interest to build bulbs that lasted the longest amount of time. They would also be more inclined to build products that were more recyclable at the end of their life span. One carpet company is already doing this. The rent tiled carpet so that when part of the carpet near the doorway needs replacing, only that part need be replaced. They also recycle the carpet and turn it into other patterns. Such examples of circular economy where the manufacturer internalises the externality of waste has exciting implications on global reductions in waste. 
    \n
    Renting may not be the best for everything. We tend to look after our own car better than a rented one. But for products that incur no moral hazard (like light bulbs) perhaps renting is the next step to moving towards a more environmentally friendly economy. Another problem it might have is that it might decrease innovation as companies have fewer incentives to do so. Products aren’t mutating as much as they would because they are living longer lives. 
    \n
    Gone are the days of old where tools would last generations the mere thought conjuring up an image of grandad sitting in a rocking chair and saying “things don’t last as long as they used to bag in my day”. `,
    url: '',
    images: ['media/images/lightBulb.png']
  },
  {
    title: 'Finance',
    group: 'learning',
    subHeading: 'Studying finance at uni and learning how black scholes really is',
    url: '',
    images: [ 'media/images/finc.PNG' ]
  },
  {
    title: 'Fixing Things',
    group: 'learning',
    subHeading: 'Changin phone screen, updating laptop, and sweatproofing headphones',
    url: '',
    images: [ 'media/images/fix.JPG' ]
  },
  {
    title: 'Filling boxes like tetris',
    group: 'project',
    subHeading: 'Fit things into anything with this algorithom',
    url: 'https://github.com/ljsimpkin/Fillit',
    images: [ 'media/images/fillit.JPG' ]
  },
  {
    title: 'House rafts in Vietnam!',
    group: 'adventure',
    subHeading: 'Kayaking around the islands',
    url: '',
    images: [ 'media/images/vietnam1.JPG', 'media/images/vietnam2.JPG' ]
  },
  // {
  //   title: 'Bartending',
  //   group: 'learning',
  //   subHeading: '',
  //   url: '',
  //   images: [ 'media/images/drink.jpg' ]
  // },
  {
    title: 'Milking',
    group: 'learning',
    subHeading: `Milking twice a day on my uncle's farm.`,
    url: '',
    images: [ 'media/images/cows.JPG' ]
  },
  {
    title: 'Landscape Gardening',
    group: 'learning',
    subHeading: "Holes aren't gonna dig themselves",
    url: '',
    images: [ 'media/images/hole.JPG' ]
  },
  {
    title: 'Dolomites Biking',
    group: 'adventure',
    subHeading: '5 day road cycling and mountain biking the Dolomites',
    url: '',
    images: [ 'media/images/dolomites.jpeg' ]
  },
  {
    title: 'Fast food in Japan',
    group: 'adventure',
    subHeading: 'Healthier than my home cooked slow food',
    url: '',
    images: [ 'media/images/raman.JPG', 'media/images/burger.JPG' ]
  },
  {
    title: 'The future of energy',
    group: 'learning',
    subHeading: 'Interview with Shannon, CMO of Solar Block',
    url: 'media/audio/solar_block.mp3',
    images: [ 'media/images/idea.JPG' ]
  },
  {
    title: 'Painting and Graphics',
    group: 'learning',
    subHeading: 'Highschool 1st place in art and graphics award. What is art? ',
    url: '',
    images: [ 'media/images/art.JPG' ]
  },
  {
    title: 'Table Tennis',
    group: 'learning',
    subHeading: 'Self appointed table tennis champ',
    url: '',
    images: [ 'media/images/1.JPG' ]
  },
  {
    title: 'Tripping Italy',
    group: 'adventure',
    subHeading: '16 days exploring Sicily, Naples, and Rome',
    url: '',
    images: [ 'media/images/Italy.jpeg' ]
  },
  {
    title: 'Gymming',
    group: 'learning',
    subHeading: 'Using whatevers there in the name of gains',
    url: '',
    images: [ 'media/images/gym.png' ]
  },
  {
    title: 'Dev Who',
    group: 'project',
    subHeading: 'Guess who but for superheroes',
    url: 'https://dev-who.herokuapp.com',
    images: [ 'media/images/devwho.png' ]
  },
  {
    title: 'Sharing is Caring',
    group: 'project',
    subHeading: 'App to enable students to share things',
    url: 'https://github.com/matai-2022/sharingIsCaring',
    images: [ '' ]
  },
  {
    title: 'Chorely',
    group: 'project',
    subHeading: 'Deligate chores randomly!',
    url: 'https://github.com/matai-2022/Saitama',
    images: [ '' ]
  },
  {
    title: 'Contact Tracing',
    group: 'project',
    subHeading: 'A simple tutorial to help professionals build a contact tracing system by themselves.',
    url: '',
    images: [ 'media/images/contact_tracing.png' ]
  },
]