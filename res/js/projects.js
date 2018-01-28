const AVAILABLE = 0;
const UNAVAILABLE = 1;
const WITHHELD = 2;
const SCHOOL = 3;

// Projects sorted by date descending
const PROJECTS = [

    // Newer -----------------------------------------------------------------------------------------------------------

    {
        title: "MLint",
        date: "2018 - Present",
        description: "MLint is a code linter for C++. It is written in Python and based on Google's cpplint project.",
        source: AVAILABLE,
        category: "Personal",
        buttons: [
            {
                name: "Github",
                link: "https://github.com/msedwar/mlint"
            }
        ],
        tags: [
            "Inspection",
            "Tool",
            "Python"
        ]
    },
    {
        title: "Personal Website",
        date: "2018 - Present",
        description: "The website you are looking at! Originally created to showcase personal and school projects, occasionally used as a playground to test static website techniques I come across.<br /><br />The website currently uses jQuery and Bootstrap, but all other assets, styles, and code are created by me.",
        source: AVAILABLE,
        category: "Personal",
        buttons: [
            {
                name: "Website",
                link: "index.html"
            },
            {
                name: "Github",
                link: "https://github.com/msedwar/msedwar.github.io"
            }
        ],
        tags: [
            "Website",
            "HTML",
            "CSS",
            "Javascript",
            "jQuery",
            "Bootstrap"
        ]
    },
    {
        title: "Disk Scheduler",
        date: "Winter 2018",
        description: "A somewhat simple concurrent program that receives, schedules, and services disk requests using a provided library.<br /><br />This was the first project in EECS 482: Introduction to Operating Systems. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 482",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 482",
            "Multithreading"
        ]
    },

    // School ----------------------------------------------------------------------------------------------------------

    {
        title: "Binary Exploitation",
        date: "Fall 2017",
        description: "This project introduced control-flow hijacking vulnerabilities in application software, including buffer overflows. Given a series of vulnerable programs and a virtual machine environment, I had to develop binary exploits. This involved the use of decompilers and debuggers like GDB.<br /><br />This was the fourth project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security",
            "Binary Exploitation"
        ]
    },
    {
        title: "Penetration Testing",
        date: "Fall 2017",
        description: "An insecure router and website were provided and we were required to perform a penetration test. This included network packet capture, brute force password cracking, and remote SSH entry.<br /><br />This was the third project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security"
        ]
    },
    {
        title: "Web Security",
        date: "Fall 2017",
        description: "Given the provided insecure website, I was required to attack the website by exploiting three common classes of vulnerabilities: SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). I was also required to exploit these problems with various flawed defenses in place. Understanding how these attacks work will help to better defend web applications.<br /><br />This was the second project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security",
            "Web",
            "SQL",
            "Javascript"
        ]
    },
    {
        title: "Cryptographic Attacks",
        date: "Fall 2017",
        description: "This project included investigation of vulnerabilities in widely used cryptographic hash functions, including length-extension attacks and collision vulnerabilities, and an implementation vulnerability in a popular digital signature scheme. Part 1 included attacking the authentication capability of an imaginary server API. The attack will exploit the length-extension vulnerability of hash functions in the MD5 and SHA family. Part 2 required use a cutting-edge tool to generate different messages with the same MD5 hash value (collisions). Part 3 then investigated how that capability can be exploited to conceal malicious behavior in software. It also included learning about an attack against certain implementations of RSA padding. Finally, it required forging a digital signature using my own implementation of the attack.<br /><br />This was the first project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security",
            "Hashing",
            "RSA",
            "Python"
        ]
    },
    {
        title: "Classic NP-hard Problems",
        date: "Winter 2017",
        description: "It’s election season, and you’ve been selected as the manager for Senator Lukefahr and General Paoletti’s presidential campaign. In order to triumph in the race to the White House, you must strategically plan Senator Lukefahr’s campaign trail to maximize his votes without exceeding his campaign budget. Your task is to find the optimal states for him to campaign in and plan his route to get to them.<br /><br />Project problems included creation of efficient algorithms for Knapsack problems, Minimum Spanning Tree problems, and Travelling Salesman problems.<br /><br />This was the fourth project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "NP-hard Problems",
            "Knapsack Problem",
            "Travelling Salesman Problem",
            "Algorithms",
            "C++"
        ]
    },
    {
        title: "Classic NP-hard Problems",
        date: "Winter 2017",
        description: "It’s election season, and you’ve been selected as the manager for Senator Lukefahr and General Paoletti’s presidential campaign. In order to triumph in the race to the White House, you must strategically plan Senator Lukefahr’s campaign trail to maximize his votes without exceeding his campaign budget. Your task is to find the optimal states for him to campaign in and plan his route to get to them.<br /><br />Project problems included creation of efficient algorithms for Knapsack problems, Minimum Spanning Tree problems, and Travelling Salesman problems.<br /><br />This was the fourth project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "NP-hard Problems",
            "Knapsack Problem",
            "Travelling Salesman Problem",
            "Algorithms",
            "C++"
        ]
    },
    {
        title: "SillyQL",
        date: "Winter 2017",
        description: "Implementation of a relational database model in which a query language (the project's SillyQL) should be able to modify and retrieve information. Project emphasis was on correctness and efficiency in memory and performance.<br /><br />This was the third project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "Database",
            "SQL",
            "Algorithms",
            "Data Structures",
            "C++"
        ]
    },
    {
        title: "Mine All Mine (Priority Queues)",
        date: "Winter 2017",
        description: "Given a collapsed mine, help the miner find their way out. Project goals included increasing understanding of priority queues, implementing generic code using inheritance and polymorphism, and implement an unfamiliar data structure (Pairing Heaps) from only academic papers and a description. Project emphasis was on correctness and efficiency in memory and performance.<br /><br />This was the second project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "Simulator",
            "Priority Queues",
            "Data Structures",
            "C++"
        ]
    },
    {
        title: "Letterman Reboot (Path Finding)",
        date: "Winter 2017",
        description: "Given a dictionary of words and optional abilities to change letters in different ways, implement \"Letterman's\" ability to tell if a starting would could be transformed into an ending word (using depth first or breadth first searching through the dictionary). Project emphasis was on correctness and efficiency in memory and performance.<br /><br />This was the first project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "Path Finding",
            "C++"
        ]
    },
    {
        title: "LC-2K Assembler, Linker, and Simulator",
        date: "Winter 2017",
        note: "4 Projects",
        description: "These projects were completed as part of EECS 370: Introduction to Computer Organization. The first project introduced implementation of assemblers for LC-2K (a University of Michigan Assembly Language) and single-cycle processor simulators. The second project introduced object files and the linking process for executable programs. The third project required implementation of a simulator for a multi-cycle, pipelined processor running LC-2K machine code instructions. The final project required implementation of a caching simulator. Together, these four projects formed a usable assembler, linker, processor simulator, and virtual memory simulator for LC-2K. I also wrote various programs in LC-2K assembly.<br /><br />Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 370",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 370",
            "LC-2K",
            "Assembler",
            "Linker",
            "Simulator",
            "Virtual Memory",
            "C"
        ]
    },
    {
        title: "Machine Learning",
        date: "Fall 2016",
        description: "Uses natural language processing and machine learning techniques to automatically identify the subject of posts from the EECS 280 Piazza.<br /><br />This was the fifth project in EECS 280: Programming and Data Structures. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 280",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 280",
            "Machine Learning",
            "C++"
        ]
    },
    {
        title: "Euchre",
        date: "Fall 2016",
        description: "Euchre is a trick-taking card game popular in Michigan. It is most commonly played by four people in two partnerships with a deck of 24 cards. Partnerships accumulate points for winning tricks, and the game continues until one side reaches the maximum number of points.<br /><br />This was the third project in EECS 280: Programming and Data Structures. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 280",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 280",
            "Simulator",
            "Euchre",
            "C++"
        ]
    },
    {
        title: "Content-Aware Image Resizing",
        date: "Fall 2016",
        description: "Seam carving is a technique for content-aware resizing of images (sometimes known as \"retargeting\"). The end result is that we can resize images in a way that changes the aspect ratio but does not distort the image.<br /><br />This was the second project in EECS 280: Programming and Data Structures. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 280",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 280",
            "Images",
            "C++"
        ]
    },

    // Older -----------------------------------------------------------------------------------------------------------

    {
        title: "Decentralized Election System",
        note: "Cutler-Bell Prize in High School Computing (National Winner, 2015)",
        date: "2015 - 2016",
        description: "Decentralized E-Voting System based on the Bitcoin algorithm. The project includes a working artifact demonstrating the function of an individual network node in the system.",
        source: AVAILABLE,
        category: "Personal",
        buttons: [
            {
                name: "Website",
                link: "https://mjolnircommando.github.io/DES/"
            },
            {
                name: "Github",
                link: "https://github.com/MjolnirCommando/DES"
            },
            {
                name: "Award",
                link: "https://awards.acm.org/about/2015-cutler-bell-prize"
            }
        ],
        tags: [
            "Networking",
            "Blockchain",
            "Voting",
            "Hashing",
            "Java"
        ]
    },
    {
        title: "MJGL",
        date: "2014 - Present",
        description: "Java Gaming Library, using OpenGL bindings. The library includes infrastructure for Math, Entity, Rendering, and other game utilities.",
        source: UNAVAILABLE,
        category: "Personal",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            }
        ],
        tags: [
            "Game",
            "OpenGL",
            "Library",
            "Java"
        ]
    },
    {
        title: "Trench",
        date: "2013",
        description: "A small applet-based casual game written in Java.",
        source: UNAVAILABLE,
        category: "Personal",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            }
        ],
        tags: [
            "Game",
            "Java"
        ]
    },
    {
        title: "MineConomy",
        date: "2011 - 2013",
        description: "A Minecraft Java Server plugin using the Bukkit framework. In 2012, it was the third most downloaded Minecraft Server plugin globally.",
        source: AVAILABLE,
        category: "Personal",
        buttons: [
            {
                name: "DevBukkit",
                link: "http://dev.bukkit.org/server-mods/mineconomy"
            },
            {
                name: "Github",
                link: "https://github.com/MjolnirCommando/MineConomy"
            }
        ],
        tags: [
            "Minecraft",
            "Bukkit",
            "Java"
        ]
    }
];
