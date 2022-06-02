let data = [
  {
    id:1,
    title: 'Twelve Crazy Things You Didn’t Know You Could Do with Python',
    imgSrc: 'https://miro.medium.com/max/1400/0*RrXmKBlJA6waUC-F.jpg',
    desc: `Python is one of the most popular programming languages today, and it’s commonly used in both software development and data science. It’s extremely simple to learn, yet incredibly powerful at the same time, which makes it one of the most widely used programming languages in the world right now. In this article, you’ll learn about a slew of different uses for Python programming that will demonstrate just how useful it can be in your day-to-day life, including web development and data analysis.

    Even some of the most experienced Python programmers can sometimes be surprised by its capabilities. Here are 12 examples of how you can use Python that might just blow your mind…
    
    1) Create an App with Python
    
    For those interested in app development, Python makes a lot of sense. For one, it’s an open-source language, meaning developers aren’t hit with license fees. Plus, many large companies already use Python to create apps, so there’s high demand for developers who can speak it. And not only that, but it turns out that Python is well suited to build applications and games. If you are looking to get started with programming and app development in particular, learn how to code in Python first. You will be glad you did!
    
    2) Create 2D Games with Python
    
    Developing simple games with Python is a great way to learn to program, especially if you’re new to coding. You can do basic animation and create visual effects like shadows and lighting with ease. A couple of quick Google searches will lead you to excellent open-source frameworks that can get you up and running in no time and help you build your skills, not to mention a portfolio. Plus, there are thousands of existing game templates available online that use Python scripting; these are just waiting for you to customize them (or you can make your own from scratch). From there, branching out into 3D graphics becomes easier with newer open-source libraries like Pyglet or Panda3D.
    
    3) Create Robots with Python
    
    Being able to code using Python programming can help you create amazing robots and drones. From making your own autonomous robot to hacking a drone, you can use your coding skills to manipulate many of these devices that are being used today in everyday life. One common use for Python programming when it comes to robotics is creating an autonomous robot. Many people today want to build their own autonomous robot, but they aren’t sure where to start. With some basic knowledge of how robots work, you can actually turn them into functional creations.
        
    `,
    data: 'Mar 28',
    category: 'Python',
    user: 'Careerist',
    read: '6 min read',
    userImg: 'https://miro.medium.com/fit/c/96/96/1*NnwfQlzDv8A6eI6EpPqB4w.jpeg',
    saved: false,
    reactions: 234,
    comments: 23,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:2,
    title: 'React project structure for scale: decomposition, layers and hierarchy',
    imgSrc: 'https://miro.medium.com/max/1400/1*x_9YUL5NuXkdxU8IuPMr8A.png',
    desc: `How to structure React apps “the right way” seems to be a hot topic for as long as React existed. React’s official opinion on it is that it “doesn’t have opinions”. This is great, it gives us total freedom to do whatever we want. And also it’s bad. It leads to so many fundamentally different and very strong opinions about the proper React app structure, that even the most experienced developers sometimes feel lost, overwhelmed and the need to cry in a dark corner because of it.

    I, of course, also have a strong opinion on the topic 😈. And it’s not even going to be “it depends” this time 😅 (almost). What I want to share today is the system, that I’ve seen working pretty well in:
    
    an environment with dozens of loosely connected teams in the same repository working on the same product
    in a fast-paced environment of a small startup with just a few engineers
    or even for one-person projects (yeah, I use it all the time for my personal stuff)
    Just remember, same as the Pirate’s Code, all of this is more what you’d call “guidelines” than actual rules.
    
    What do we need from the project structure convention
    I don’t want to go into details on why we need conventions like this in the first place: if you landed on this article you probably already decided that you need it. What I want to talk about a little bit though, before jumping into solutions, is what makes a project structure convention great.
    
    Replicability
    Code convention should be understandable and easy enough to reproduce by any member of the team, including a recently joined intern with minimal React experience. If the way of working in your repo requires a PhD, a few months of training and deeply philosophical debates over every second PR… Well, it’s probably going to be a really beautiful system, but it won’t exist anywhere other than on paper.
    
    Inferrability
    You can write a book and shoot a few movies on “The way of working in our repo”. You can probably even convince everyone on the team to read and watch it (although you probably won’t). The fact remains: most people are not going to memorise every word of it, if at all. For the convention to actually work, it should be so obvious and intuitive, so that people in the team ideally are able to reverse-engineer it by just reading the code. In the perfect world, same as with code comments, you wouldn’t even need to write it down anywhere — the code and structure itself would be your documentation.
    
    Independence
    One of the most important requirements from coding structure guidelines for multiple people, and especially multiple teams, is to solidify a way for developers to operate independently. The last thing that you want is multiple developers working on the same file, or teams constantly invading each other’s areas of responsibility.
    
    Therefore, our coding structure guidelines should provide such a structure, where teams are able to peacefully co-exist within the same repository.
    
    Optimised for refactoring
    Last one, but in the modern frontend world, it’s the most important one. Frontend today is incredibly fluid. Patterns, frameworks, and best practices are changing constantly. On top of that, we are expected to deliver features fast nowadays. No, FAST. And then re-write it completely after a month. And then maybe re-write it again.
    
    So it becomes very important for our coding convention to not force us to “glue” the code in some permanent place with no way to move it around. It should organize things in such a way that refactoring is something that is performed casually on a daily basis. The worst thing a convention can do is to make refactoring so hard and time-consuming that everyone is terrified of it. Instead, it should be as simple as breathing.
    
    Now, that we have our general requirements for the project structure convention, time to go into details. Let’s start with the big picture, and then drill down into the details.
    
    Organising the project itself: decomposition
    The first and the most important part of organizing a large project that is aligned with the principles we defined above is “decomposition”: instead of thinking of it as a monolithic project, it can be thought of as a composition of more or less independent features. Good old “monolith” vs “microservices” discussion, only within one React application. With this approach every feature is essentially a “nanoservice” in a way, that is isolated from the rest of the features and communicates with them through an external “API” (usually just React props).
    `,
    data: 'May 25',
    category: 'React',
    user: 'Nadia Makarevich',
    read: '20 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*rlZundiPIRTbEhQRd-nv6w.jpeg',
    saved: false,
    reactions: 452,
    comments: 32,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:3,
    title: '6 Best Note-Taking Apps in 2022',
    imgSrc: 'https://miro.medium.com/max/1400/1*qg4kpoZH9UzvJBIsGUekBA.png',
    desc: `Note-taking apps are valuable tools for organizing your work and boosting your productivity. They’re great for students and professionals who need a digital workspace to conveniently store and manage class notes, work files, project ideas, meeting minutes, and the like.

    As the popularity of remote work and online education continues to grow, so too does the industry of note-taking apps. Today, there are dozens of note-taking app options to choose from, each with their own set of unique features, strengths, and weaknesses.
    
    We evaluated what the 2022 note-taking market has to offer and put together a list of six great note-taking apps:
    
    Notion
    Evernote
    OneNote
    Roam Research
    Bear
    Apple Notes
    Read on for a description of each note-taking app’s features, price, pros, and cons.
    
    Notion
    Notion tops our list for its ease-of-use and versatility. In addition to being a powerful note-taking app, Notion can also be used as a task and project manager, and a reference wiki tool.
    
    
    Image from Notion
    Strengths
    
    Integrations. Notion integrates with Zapier so you can connect it to all your other apps. After integrating with Zapier, you can seamlessly perform hundreds of organizational tasks from the Notion platform, like generating google calendar events or saving Slack messages.
    Versatility. Notion lets you build the workflow you want with a drag and drop dashboard.
    Powerful Databases. Notion’s databases function similarly to Google Docs and Google Sheets, allowing users to share files and update their contents in real-time.
    `,

    data: 'May 2',
    category: 'Productivity',
    user: 'Leon Zucchini',
    read: '6 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*PZkj4N9rMfWz9JZSMxTIdQ.png',
    saved: false,
    reactions: 341,
    comments: 16,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:4,
    title: '20 Digital Products You can Create and Sell Online',
    imgSrc: 'https://miro.medium.com/max/1400/0*f07YJt9GdfXPF9qa',
    desc: `Digital Products are the best form of products from which you can easily make money. They have 100% of the profit margin since you’re building and selling all by yourself unless you have third-party support, and require little to less effort to make one. Selling your own Digital Product is a great way to start an online business with relatively no startup costs.

    There are tons of free websites on the internet from where you can take help to create your own digital products and can handle your own designing and illustrating if needed. Canva, Crello, and smartmockups.com are a few that you can bet on.
    
    But let’s talk about what digital products actually are, how you can create and sell one of them and start earning your first $.
    
    What are Digital Products?
    
    Digital products are non-physical products that you can make and sell to people for them to download online. They required no physical costs, shipping costs or any other costs that were required in selling physical goods.
    
    Digital products come in a variety of forms and you may have even heard of people making six figures selling digital products.
    
    For selling your own physical products, you need to have your market research. What is something that your audience or customers want?
    
    Find this answer and start making your preferred digital products for free.
    `,
    data: 'April 25',
    category: 'Marketing',
    user: 'Piyush',
    read: '6 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*cHpWPIFXdXHpo25bR-R6ow.png',
    saved: false,
    reactions: 123,
    comments: 6,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:5,
    title: 'Data salaries at FAANG companies in 2022',
    imgSrc: 'https://miro.medium.com/max/1400/1*kIP5PxDTogpvm_AMdPwaFQ.png',
    desc: `If you have a problem. And it’s like a really bad reoccurring horrific problem, and you tell me that there’s just absolutely no way to fix it. I would be skeptical, but I might be convinced to believe you. If however, you are standing in a room full of dozens maybe even hundreds of other people who have all addressed or maybe even solved this very same problem to varying degrees of success using a variety of different methods some not so great but even the most lackluster amongst them being worlds better than what you’ve got going on, and it becomes just abundantly clear that you are the only one with this problem, I’m going to be a lot less likely to believe you. When you say that there is no solution and especially if you dismiss every single proposed solution to the problem without trying it first, if you tell me that right after the problem occurred is a bad time to talk about the problem or if you can’t have an intelligent conversation about the problem without just making noises or unfounded assumptions, I’m going to be a lot less convinced that you have a problem and a lot more convinced that you are the problem.
    The society we live in has evolved in many ways but a lot of things have stayed the same some of which include communication and education, so if you have a brain in your head and you are able to read, write and reason then there is no reason for you to be going through the same difficulties which your peers have already resolved. Very often, simply because of our ego or some aggressive shyness, we end up having to deal with so many problems which could be easily solved if we just asked another person for the solution. Take a moment to reflect on the difficulties you might be going through right now, are you the only person you know going through those same difficulties? if the answer is no, then you are the problem.
    `,
    data: 'April 12',
    category: 'Data',
    user: 'Mikkel Dengsøe',
    read: '4 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*7cxazNOzww8rYzrd4YhWew.png',
    saved: false,
    reactions: 156,
    comments: 65,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:6,
    title: 'Bye-Bye Notion, My Obsidian Dashboard is Humming!',
    imgSrc: 'https://miro.medium.com/max/1400/1*TAfuNnM6-3txPZ7JhkO8vQ.png',
    desc: `No matter the app they live in, the wonderful thing about life-dashboards is how delightfully different they look from person to person.

    I like exploring what other people come up with, but only when their board sings in tune with their values, and the best life they’re carving out for themselves.
    
    Straight copies of other people’s work are nothing more than well-stitched clothing tailored to someone else’s measurements. It won’t fit and feel right until it’s been polished by the tumbling and turning demands of your needs, habits, and routines.
    
    My Dashboard helps me see what is, so I can choose the future I want to create.
    
    In this story I’ll be describing how my Obsidian dashboard has grown since the last time I wrote about it . I’ll show you how I added a weather widget, an automatically updating Focus section, and pretty icons to make my this plain-text-based page a truly useful navigational tool.
    
    The Short Leap From Notion to Obsidian
    My first experience with Notion was a heady, blissful revelation, but our breakup was inevitable.
    
    It’s powerful, free, and easy to use, so what’s not to love? Notion ticks all the boxes that matter to me except these:
    
    off-line access (important)
    digital autonomy (vital)
    All those crazy-gorgeous Notion dashboards people create remind me of the attractive, intricate bullet journals people love to share on Pinterest. They take hours to set up, look lovely, and seem to work beautifully for those people. But, you know…I’m not those people. And that’s okay.
    
    After five years of feeling the pull, I realise that digital autonomy for my most important data is, for me, a non-negotiable destination. And future-proof, app-independent, deceptively simple, and immensely satisfying plain text is my vehicle of choice.
        
    `,
    data: 'May 13',
    category: 'Data',
    user: 'Ellane W',
    read: '6 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*ICKYciJP1Ymq5sOhP6dKsw@2x.jpeg',
    saved: false,
    reactions: 863,
    comments: 23,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:7,
    title: '6 Killer Productivity Apps for Programmers',
    imgSrc: 'https://miro.medium.com/max/1400/1*x-kbq3HAMky4TfNo4lv0Vw.png',
    desc: `With the rise of “instant-dopamine-hit” applications, the current attention span of humans has decimated so much that even a goldfish can beat us!

    But all hope isn’t lost disciples, there are some apps that when used, can blow up your productivity to new and unthinkable heights. Some use the same feedback loop as those “instant-dopamine-hit” applications, but constructively; others make your life way easier. Let’s take a look at 6 such incredible apps.
    
    1. Habitica
    
    Habitica is a free habit-building and productivity app that treats your real life like a game, a process known as gamification. With in-game rewards and punishments to motivate you and a strong social network to inspire you, Habitica can help you achieve your goals to become healthy, hard-working, and happy.
    
    Habitica is simply gamification on steroids, a really effective tool to help you stay motivated & productive and even get rid of bad habits.
    
    Fun Fact: It is an Open Source Project, so you can dive into the source code here: https://github.com/HabitRPG/habitica
    
    2. Forest
    
    Forest is an app that helps you stay focused on the essential things in life. The app has a lot of pluses. First, it’s a well-designed app that helps make the abstract idea of focusing away from your phone into a fun game, just like Habitica.
    
    It has some great features, but it keeps things simple where it counts, and even the free version with ads is pretty good at not distracting you.
    
    As a bonus for every tree you grow, the Forest team partners with a real-tree-planting organization, Trees for the Future, to plant real trees on Earth. When our users spend virtual coins they earn in Forest on planting real trees, the Forest team donates to our partner and creates planting orders.
    
    Not only do you stay focused, but leave a positive impact on the environment too! It is killing two birds with one stone!
    `,
    data: 'Mar 20',
    category: 'Programming',
    user: 'Tapajyoti Bose',
    read: '4 min read',
    userImg: 'https://miro.medium.com/fit/c/96/96/0*n9_7SVFcOBe2LscH',
    saved: false,
    reactions: 342,
    comments: 11,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:8,
    title: 'This Graph has Predicted Every Recession since 1976. What It’s Telling Us Now.',
    imgSrc: 'https://miro.medium.com/max/1400/1*flYzofuzs_GWukbRQeu_Nw.png',
    desc: `What if I told you that a single graph predicted the COVID Pandemic and every recession in the past 50 years. In August 2019, movements in one of the most closely watched ‘recession indicators’ rang the warning bell that some paid attention to, and others brushed off. After all, who would’ve thought that a global pandemic would ensue?

    What is the Yield Curve?
    Known as the yield curve, it’s a line plot chart that graphs out the yield, or interest rate, of U.S. Treasuries at different maturities (the date when the principal investment must be paid back in full).
    
    The U.S. government finances some of its day-to-day operations by issuing debt. This debt will have different maturities and is backed by the full faith and credit of the United States government.
    
    While all securities will come with some risk, investors of Treasuries are guaranteed the return of their principal investment and interest if they hold them to maturity.
    
    During ‘normal’ economic times, a yield curve will look something like the graph below, where shorter-term Treasuries will have a lower yield than longer-term Treasuries.
    
    After all, there should be larger rewards for holding a treasury longer.
    
    Investors need a larger yield to compensate for taking on the risk of inflation lowering the returns of a longer-term treasury.
    `,
    data: 'Mar 17',
    category: 'Economy',
    user: 'Timothy Chang',
    read: '5 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*DPiI-gcRkjatcgHnGFNG7Q@2x.jpeg',
    saved: false,
    reactions: 652,
    comments: 67,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:9,
    title: 'Top 10 Next-Gen Calendar Apps (2022)',
    imgSrc: 'https://miro.medium.com/max/1400/1*cpVU0BKoDpQ6YlWA83NGeQ.png',
    desc: `Every knowledge worker on the planet uses at least two tools: email and calendar. Traditionally these spaces have been dominated by Google, but that’s beginning to change. Superhuman opened our eyes to the massive opportunity in seemingly mundane tools. Today there are dozens of startups with ambitions of being the “Superhuman of calendars” or even more.

    Below is a collection of the best calendar apps that launched recently or will launch soon. As a productivity geek, I’m fascinated by their potential. These calendar apps are beautifully designed, lightning-fast, and hotkey enabled. Some are already saving me hours each week. Let’s get into it! 📆
    
    📌 Note: this list is in no particular order! All the tools below are fantastic. It’s also not exhaustive — if you think we missed one, let us know. 📌
    
    Best Calendar Apps — 2022
    1. Motion
    Pricing: free trial, $19/mo
    
    Motion is a powerful scheduling tool that goes way beyond the idea of “Superhuman for calendar.” The product is fast and modern. It combines your calendar and tasks all-in-one. Once you download the Chrome extension, ⌥-c pulls up Motion from anywhere, and ⌥-space lets you add new tasks. This alone has saved me from hours of opening up Google Calendar in new windows.
    
    What makes Motion unique is its AI-powered scheduling engine. It takes everything you need to do — meetings, tasks, habits…etc. — and automatically plans the optimal schedule. When creating a task, you give Motion a few details about length and deadline, and it intelligently finds the best time on your calendar. When things inevitably take longer than expected or more urgent work comes up — Motion automatically re-shuffles your schedule to re-optimize your day. This eliminates all the manual work that goes into planning your schedule when things change.
    
    Every aspect of Motion is designed to help maximize productivity and finish tasks on schedule. It revolves around the idea that we work best when we can focus on one thing at a time. The team moves lightning-fast and is constantly churning out new features including booking links, smart scheduler, flexible events, project management, and more.`,
    data: 'Mar 8',
    category: 'Productivity',
    user: 'Matthew Busel',
    read: '10 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*dlhBes5JdARMsZrIpkvz6A.png',
    saved: false,
    reactions: 873,
    comments: 62,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:10,
    title: 'Make your Gmail a better place',
    imgSrc: 'https://miro.medium.com/max/1400/0*tUymj0nhAXHA78cd',
    desc: `1. Keep it clean
    Let’s admit, we visit our mailbox rarely, but we visit it for important tasks. Most of the time, some of our important emails will be lost between a ton of promotional and spam emails. So it is so important that we keep our inbox clean so that we do not miss out on important emails. Here are a few tips that you can follow to keep your inbox nice and clean.
    
    * Unsubscribe
    YES. You read it right. UNSUBSCRIBE.
    
    You can unsubscribe from emails to stop receiving them. Companies tend to send promotional emails to all the Email addresses in their database. They give us a “Agree to receive promotional emails” option when we first create the account, many of us do not mind it and just accept it. This will result in them sending their promotional emails to us.
    
    So what to do now?
    
    You can just unsubscribe from the mails by looking at the tiny unsubscribe text in the footer of the mail.
    
    They generally look like this.
    
    
    * Create filters
    It will be great if we have an unsubscribe option. But some companies do not give us an option to unsubscribe or we may not want to completely stop receiving emails. In that case, we can create filters to make them skip the inbox and assign them directly to a related label.
    
    I use this technique to filter all the mails from Phonepe, Paytm and Amazon.`,
    data: 'Jan 13',
    category: 'Productivity',
    user: 'Teja Seelam',
    read: '4 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*YctpKerpuBZ-h6ZD9QAuYg.png',
    saved: false,
    reactions: 451,
    comments: 82,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:11,
    title: '10 Useful Automation Scripts You Need To Try Using Python',
    imgSrc: 'https://miro.medium.com/max/1400/1*MTgqpGvXCruloH8nRsNGUA.png',
    desc: `Browser extensions help save time by automating the user’s daily tasks. Most useful programs and applications have extensions in Chrome, Firefox and other browsers. They increase the speed of data processing and allow the user to perform fewer actions.

    Extensions or plugins allow you to improve your browsing experience on your favorite sites and pages in the browser by providing more features, such as blocking ads, changing the font or page color, saving passwords, and more.
    
    Developers are constantly adding new features that allow you to extend the functionality of the browser — that’s why they are called extensions.
    
    
    What types of browser extensions are available?
    There are integration solutions (such as cloud extensions), background services that interact with web pages (translators, calendar, prompts), microservices with full functionality (video, screenshots, notes), tools for developers and IT specialists (coding services, remote access, antiviruses).
    
    Pros and cons of browser extensions
    Advantages:
    
    quick and easy to use;
    universal integration;
    cross-platform;
    interoperability with other services.
    Disadvantages:
    
    you need to write a separate version for each browser;
    you need to update the extensions.`,
    data: 'Mar 24',
    category: 'Python',
    user: 'Abhay Parashar',
    read: '7 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*3CtmFEK8CR1-QJlacbjWkQ.png',
    saved: false,
    reactions: 325,
    comments: 17,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:12,
    title: 'My Top5 Productivity Gadgets of 2022',
    imgSrc: 'https://miro.medium.com/max/1400/1*Ks8UdUZK_tyB1UQ89UWspQ.png',
    desc: `Work smarter, not harder.

    There is no doubt that as time goes by we progress more in technology. We get faster and more efficient computers, better projects that help us work.
    
    Then there are gadgets that make our life easier, which is why I am eager to share the top 5 productivity gadgets with you!`,
    data: 'Mar 5',
    category: 'Productivity',
    user: 'Akash Bhattacharya',
    read: '4 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*iFaSeYkOzFO9a5SUdrLaoQ.jpeg',
    saved: false,
    reactions: 112,
    comments: 12,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:13,
    title: 'Write better React, compose multiple functional HoCs, Higher-Order Components',
    imgSrc: 'https://miro.medium.com/max/1400/1*eKp6CeYY-krBEKhXLz6oFg.jpeg',
    desc: `In a previous article, I wrote about the concept of chaining functions using pipe and compose. Today I would like to extend this topic by providing you some scenarios where I found function composition can become really handy in the everyday life of a front-end developer using React applying multiple Higher-Order Components in a more functional way!

    What is a Higher-Order Function (HOF)
    Before diving deep into Higher-Order Components you should be familiar with the meaning of Higher Order Functions that we can describe as a function that does at least one of the followings:
    
    Takes one or more functions as arguments
    Returns a function as its result
    Let’s take for example one of the standard ES Higher-Order Function you are probably already familiar with: Array.prototype.map, it takes a function as an argument which is used as a callback and applies it to every element of the array. A very quick reminder:
    
    
    We can now write a custom Higher-Order Function:
    
    
    Obviously, this is a dead-simple example but there are many applications for Higher-Order Functions, the benefit of this approach is that you can reuse the HoF providing different operation functions, reducing code duplication in favor of the single responsibility principle.`,
    data: 'Mar 30',
    category: 'React',
    user: 'Filippo Rivolta',
    read: '3 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*Puzvj-3HPPWXldkGsTJ0Ig.jpeg',
    saved: false,
    reactions: 321,
    comments: 41,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:14,
    title: 'Nigeria’s violence is economic',
    imgSrc: 'https://miro.medium.com/max/1400/1*YiyZjO1YRHA2oXoAnNcxiA.jpeg',
    desc: `This chart from SBM Intelligence shows that you are actually more likely to be lynched in Southern Nigeria. It should be food for thought for Southern Nigerians. It should be food for thought for someone like me, who is a parent.

    Imagine sitting in your house, and your child goes out, then you hear that he has been killed because of ₦100 ($0.17)? That is what happened to David Imoh’s parents.
    
    Sadly, too low-income Nigerians have been socialised by the random violence in the country to see mob justice as normal. When you include the fact that most of us have no trust in the legal system in any event, too many Nigerians will be likely to resort to mob justice at the drop of a hat, and thus the cycle continues. We will see more lynchings in future. No one is safe, because even the child of a top banker who lives in Banana Island could one day want to cross the road at Admiralty Way in Lekki, and could very easily be accused of failing to pay a random ₦100 toll. Then that’s it…
    
    If we are honest, it is what Nigeria has always been. Lynching is not a new thing in Nigeria, so the Deborah Yakubu and David Imoh tragedies should surprise no one.
    
    What were the Aluu 4 killed for 10 years ago?
    
    What was that young boy lynched for at Stadium Bus Stop in Surulere back in 2004 (does anyone still remember that?).
    
    In general terms, the difference between the nature of violence in Northern Nigeria and Southern Nigeria is that in the North of the country, the violence is typically nihilist; while in the South, it is typically for economic reasons. The murder of David Imoh brings these two threads together, the rapid violence of the North, with the commercial violence of the South.
    
    We have been used to it for a very long time in all parts of the country, I think what has now changed is the ubiquity that the mobile phone brings these things to people’s doorsteps, and, like the way a mobile phone live-streamed the Lekki Massacre into our living rooms, makes us confront the stark reality of what our country is — a Hobbesian state.
    
    Speaking of Hobbesian states, we cannot deny the ethnic element to these tragedies as seen by the attacks on Igbo-owned businesses in Sokoto two weekends ago for an event in which no Igbo person was involved. It is true that other ethnicities (especially Southern minorities) have also been victims of repeated religious violence in Northern Nigeria, but it is also true that Igbos are the biggest victims.
    
    This ethnic dimension has also shown up in the fact that many commentators have seized on the apparent identity of Daniel’s killers as Hausa-speaking motorcycle riders to call for the deportation of (lower-class) Hausas from Lagos. It is true that Daniel Imoh’s killers were Hausa speakers, but it is also true that other perpetrators of mob violence in Southern Nigeria have been locals.
    
    For example, the day after Deborah Yakubu was killed in Sokoto, in Auchi, Edo State, 847 kilometres away, a mob set a robbery suspect on fire. He died on the spot. The killers were local Etsako speakers. Essentially, all of these things can be true at the same time, in much the same way as we can walk and chew gum at the same time.
    
    What we need, at least those of us who know where our next meal is coming from is to ask ourselves why. For me, the answers are economic.
    
    The Igbos have always been the go-to victims of Nigeria’s ethnic violence for the simple fact that we are everywhere. I always tell about how I have been to every state in Nigeria (except Taraba), and I have spoken the Igbo language with someone who is resident in the place I’m visiting. Historically, the Igbos have moved because of geographical reasons. The same is happening to Arewa people now, but they are moving largely because of economic reasons, and as a result, will take roles that are at the lower rungs of society. That ubiquity will stand them out and make them targets.
    
    The flow of Hausa speakers into Southern Nigeria is not an invasion as I have seen many Southerners claim, it is simple economics. Nigeria has failed them, so they are doing what people will do in order to put food on the tables of their families, they are moving to areas of more opportunity.
    
    `,
    data: 'May 30',
    category: 'Economy',
    user: 'Cheta Nwanze',
    read: '4 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/0*IyNeSe40m-fVKX1X.',
    saved: false,
    reactions: 532,
    comments: 32,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 0
      },
    ]
  },
  {
    id:15,
    title: 'Simple Dependency Injection in Elixir',
    imgSrc: 'https://miro.medium.com/max/1400/1*4c8NJY2T4KWrK8_J0YvC-w.png',
    desc: `In functional programming, dependency injection is a design pattern when a function receives another function it depends on.

    In a regular code, it is introduced for loose coupling to achieve inversion of control. For testing purposes, we use it to leverage mock implementations in the modules under tests, which I will describe in this very article now.
    
    Use Case
    Imagine the following flow: a user of a mobile application calls your server to fetch some data, e.g., weather conditions in their area. The server handles the request, but it’s not self-sufficient: it has to ask Weather Open API for some external data about the selected region.
    
    
    The code can be simple and may look as follows:
    
    def is_it_raining?(city) do
      with {:ok, response} <- WeatherAPI.forecast(city),
           do: parse_forecast(response)
    end
    It is easy to test locally as well (assuming you have authorized WeatherAPI previously), but it cannot be tested offline without any mocking. We have to avoid calling and external API to save a quota and not exceed request limits.
    
    Dependency Injection
    
    The simplest solution to test such code, without any additional library like mox, is passing the WeatherAPI dependency as a parameter to the function.
    
    This is the most common way to test dependencies during unit testing in ExUnit. It lets us create test doubles that behave predictably, allowing our tests to focus on the logic inside the code.
    
    First of all, we need to change the is_it_raining? function to accept an additional parameter. In our case, it will be a function from theWeatherAPI module. Of course, we could inject the entire module and call its function from our function, but it would require implementing an implicit contract in our tests.
    
    Have a look at the new function signature:
    
    def is_it_raining?(city, forecast \\ &WeatherAPI.forecast/1) do
      with {:ok, response} <- forecast.(city),
           do: parse_forecast(response)
    end
    Here, we could also have used an environmental/application variable to replace the adapter during test, but — for simplicity — let’s leave it as is for the time being.
    
    A function reference — provided as the default parameter for the injected dependency — allows us to avoid calling an external API during testing.
    
    `,
    data: 'May 30',
    category: 'Programming',
    user: 'Kamil Lelonek',
    read: '4 min read',
    userImg: 'https://miro.medium.com/fit/c/176/176/1*bIWHY0rskh1HKeHGCA0E_Q@2x.jpeg',
    saved: false,
    reactions: 172,
    comments: 34,
    commentsArr:[
      {
        commentsId: 1,
        acc: 'Stuart Johnson',
        postedTime: '6 days ago',
        commentsDesc: `A topic dear to my heart, and I couldn't agree more. I have to admit, I succumb to the temptation of Flutter, and dropped any ideas of using MAUI, although Avalonia came very close. Flutter and Avalonia both use Skia for rendering, so should be good for embedded devices too. `,
        accImg:'https://miro.medium.com/fit/c/64/64/0*vlSQNcQPWiK0lxzV',
        rec: 4
      },
      {
        commentsId: 2,
        acc: 'Robert Barrueco',
        postedTime: '5 days ago',
        commentsDesc: `I've been a .Net developer since it was first called ASP+. Thank you for reminding me that I'm still relevant as a C# "web developer". One thing though, how many times in my life am I going to have to learn how to connect to a database and run a stored procedure?`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*FgX_U198USO2U_jqrOF24Q.png',
        rec: 2
      },
      {
        commentsId: 3,
        acc: 'Jon Trauntvein',
        postedTime: 'about 13 hours ago',
        commentsDesc: `Try as I might to resist this, I find my self-control slipping to the point where I will simply explode if I don't start writing a reply.`,
        accImg:'https://miro.medium.com/fit/c/64/64/0*w5zkDYxesI_XYylH.',
        rec: 2
      },
      {
        commentsId: 4,
        acc: 'B4blue',
        postedTime: '1 day ago',
        commentsDesc: `After working for 4 years in a company where older version of .Net was used, along with Python, Go, Node.js, .. for backend and some C++ for microcontrolers that connected to our IOT platform, I'm so glad that in my new job, I can use the newest .Net and none of the others. I feel like I have beaten a terrible disease and I'm finally healthy.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*AtvwrgMTFW_2DlReZ_YN1w.jpeg',
        rec: 0
      },
      {
        commentsId: 5,
        acc: 'Eric PASCUAL',
        postedTime: '3 day ago',
        commentsDesc: `I stopped reading as soon as I saw the first chart in which there are together .Net with Numpy, React and a collection of other things as similar as apples and gorillas.
        One click bait more.`,
        accImg:'https://miro.medium.com/fit/c/64/64/1*ZSyHzZDxaC348dYURssYqg.jpeg',
        rec: 5
      },
    ]
  },

]
export default data;